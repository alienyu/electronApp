/*
* 更新文件的各类情形:
* IPList 有更新
*   Version 有更新
*      强制更新
*      非强制更新
*   Version 无更新
* IPList 无更新
*   Version 有更新
*      强制更新
*      非强制更新
*   Version 无更新
*
* */
const { app, BrowserWindow, dialog } = require('electron');
const http = require("http");
const shell = require('child_process');
const fs = require("fs");

//更新失败提示
var showUpdateFail = function (text) {
    dialog.showErrorBox('更新失败通知', `${text},请打开客户端重新尝试!`);
    setTimeout(function () {
        app.quit()
    }, 1000)
};

//强制更新提示
var showForceUpdate = function (text) {
    dialog.showErrorBox('版本更新通知', text);
};

//打开客户端失败
var showInitFail = function () {
    dialog.showErrorBox('客户端启动失败', '启动失败,请打开客户端重新尝试!');
    setTimeout(function () {
        app.quit()
    }, 1000)
};

var updateFile = function(filePath, dst, success, error) {
    var url = `http://localhost:63342/electron/update/updateFiles/${filePath}`;
    error = error || showUpdateFail;
    http.get(url, function (res) {
        res.setEncoding('utf8');
        var rawData = '';
        res.on('data', function (chunk) {
            rawData += chunk;
        }).on('end', function () {
            // 成功回调
            //往临时目录写文件
            //需要创建路径
            try {
                if(filePath.split("/").length > 1) {
                    let path = filePath.split("/").slice(0,-1).join("/");
                    shell.execSync(`mkdir -p ${dst}${path}`);
                }
                fs.writeFileSync(`${dst}${filePath}`, rawData);
                success();
            } catch(e) {
                if(!ajaxErrorShow) {
                    error("更新临时文件列表失败");
                    ajaxErrorShow = true;
                }
            }
        }).on('error', function (e) {
            // 出错回调
            error("获取更新文件列表失败");
        });
    });
};

var mainWindow = null;
var tempPath = app.getPath("temp");  //临时目录,用于更新文件
var currentVer = app.getVersion();
var recentVer;
var loadLocal;
var asyncAjaxNum = 0; //异步ajax计数器
var ajaxErrorShow = false;
try {
    var currentPackageJSON = JSON.parse(fs.readFileSync("./package.json"));
    var currentHashKey = JSON.parse(fs.readFileSync("./serverConfig.json")).hashKey;
} catch(e) {showInitFail("读取配置失败");return;}
activeIP = loadActiveIP(); //获取服务器IP地址
winTitle = ""; //设置title, 带版本信息//静态资源加载策略
// 当所有窗口被关闭了，退出。
app.on('window-all-closed', function () {
    // 在 OS X 上，通常用户在明确地按下 Cmd + Q 之前
    // 应用会保持活动状态
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
// 这个方法就被调用
app.on('ready', function () {
    // 获取版本更新信息
    http.get("http://localhost:63342/electron/update/versionControl.html", function(res) {
        var resData = "";
        res.on("data",function(data){
            resData += data;
        }).on("end", function() {
            try {
                checkUpdate(JSON.parse(resData));
            } catch(e) {showUpdateFail("获取版本信息失败")}
        }).on("error", function() {
            showInitFail();
        });
    });
});

function checkUpdate(newData) {
    //需要更新服务器IP列表
    loadLocal = newData.loadLocal;
    if (newData.hashKey != currentHashKey) {
        console.log("needUpdateIPList");
        showForceUpdate("当前有版本需要更新,请耐心等待.更新完毕后会自动打开客户端!");
        http.get("http://localhost:63342/electron/update/updateFiles/serverConfig.html", function (res) {
            var resData = "";
            res.on("data", function (data) {
                resData += data;
            }).on("end", function () {
                try {
                    shell.execSync(`mkdir -p ${tempPath}electron/IPList/`);
                } catch(e) {showUpdateFail("创建更新目录失败")}
                fs.writeFile(`${tempPath}electron/IPList/serverConfig.json`, resData, function (err) {
                    if (!err) {
                        try {
                            shell.execSync(`cp ${tempPath}electron/IPList/serverConfig.json ./`);
                        } catch(e) {showUpdateFail("更新文件失败")}
                        activeIP = loadActiveIP();
                        checkGUIUpdate(newData);
                    } else {
                        showUpdateFail("更新临时文件失败");
                    }
                });
            }).on("error", function(err) {
                showUpdateFail("获取更新文件失败");
            })
        });
    } else {
        console.log("don't need UpdateIPList");
        checkGUIUpdate(newData);
    }
}

//获取当前服务器IP
function loadActiveIP() {
    let IPFiles = JSON.parse(fs.readFileSync("./serverConfig.json"));
    var IPList = IPFiles.ipList;
    var activeKey = IPFiles.activeIP;
    return IPList[activeKey];
}

//检查GUI更新
function checkGUIUpdate(newData) {
    recentVer = newData.version;
    forceUpdate = newData.forceUpdate;
    //不需要版本更新
    if(!newVersion(currentVer, recentVer)) {
        createMainWin();
    } else {
        //有版本更新
        var result = getNeedUpdateFileInfo(newData.manifest);
        var fileList = result.fileList;
        var updateDetail = result.updateDetail;
        var updateContent = "";
        updateDetail.map((item,index) => updateContent = updateContent + "\n" + `${index+1}.` + item);
        //强制更新
        if(forceUpdate) {
            showForceUpdate(`有版本需要更新,内容如下:\n${updateContent}`);
            updateProcess(fileList);
        } else {
            //手动更新
            const options = {
                type: 'info',
                title: '版本更新提示',
                message: `有版本需要更新,内容如下:\n${updateContent}`,
                buttons: ['暂时跳过', '确认更新']
            };
            dialog.showMessageBox(options, function (index) {
                if(index == 0) {
                    createMainWin();
                } else {
                    updateProcess(fileList);
                }
            })
        }
    }
}

function updateProcess(fileList) {
    try {
        shell.execSync(`mkdir -p ${tempPath}electron/${recentVer}/`);
    } catch (e) {showUpdateFail("创建临时文件列表失败")}
    var dst = `${tempPath}electron/${recentVer}/`;
    ajaxErrorShow = false;
    fileList.map(file => {
        updateFile(file, dst, updateSuccess.bind(this, fileList.length))
    });
}

function updateSuccess(length) {
    asyncAjaxNum ++;
    if(asyncAjaxNum == length) {
        //从临时目录更新文件
        try {
            shell.execSync(`cp -r ${tempPath}electron/${recentVer}/ ./web/`);
            //修改当前版本号
            var packageJSON = JSON.parse(fs.readFileSync("./package.json"));
            packageJSON.version = recentVer;
            fs.writeFileSync("./package.json", JSON.stringify(packageJSON));
        } catch(e) {
            showUpdateFail("更新文件列表失败");
        }
        //准备打开客户端
        createMainWin();
    }
}

function getNeedUpdateFileInfo(updateInfo) {
    let fileList = [];
    let updateDetail = [];
    updateInfo.map(item => {
        let ver = item.version;
        if(newVersion(currentVer, ver)) {
            fileList = fileList.concat(item.file);
            updateDetail = updateDetail.concat(item.detail);
        }
    });
    fileList = unique(fileList);
    updateDetail = unique(updateDetail);
    return {
        fileList,
        updateDetail
    }
}

function newVersion(current, recent) {
    return recent.replace(/\./g, "") > current.replace(/\./g, "");
}

function unique(arr) {
    var newArr = [];
    arr.map(item => {if(newArr.indexOf(item) < 0){newArr.push(item)}});
    return newArr
}

function createMainWin() {
    winTitle = `rhine v${currentVer}`;
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // 加载应用的 index.html
    mainWindow.loadURL(`file://${__dirname}/web/${loadLocal ? 'admin.html' : 'admin_remote.html'}`);

    // 打开开发工具
    mainWindow.openDevTools();

    // 当 window 被关闭，这个事件会被发出
    mainWindow.on('closed', function () {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 但这次不是。
        mainWindow = null;
    });
}