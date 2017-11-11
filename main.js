const { app, BrowserWindow, dialog } = require('electron');
const http = require("http");
const shell = require('child_process');
const fs = require("fs");

//更新失败提示
var showUpdateFail = function () {
    dialog.showErrorBox('更新失败通知', '更新失败,请打开客户端重新尝试!');
    setTimeout(function () {
        app.quit()
    }, 1000)
};

//强制更新提示
var showForceUpdate = function () {
    dialog.showErrorBox('版本更新通知', '当前有版本需要更新,请耐心等待.更新完毕后会自动打开客户端!');
};

var mainWindow = null;
var tempPath = app.getPath("temp");  //临时目录,用于更新文件
var currentVer = app.getVersion();
var recentVer;
activeIP = loadActiveIP();
winTitle = ""; //设置title, 带版本信息
var currentHashKey = JSON.parse(fs.readFileSync("./serverConfig.json")).hashKey;
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
        });
        res.on("end", function() {
            checkUpdate(JSON.parse(resData));
        });
    });
});

function checkUpdate(newData) {
    //需要更新服务器IP列表
    if (newData.hashKey != currentHashKey) {
        console.log("needUpdateIPList");
        showForceUpdate();
        http.get("http://localhost:63342/electron/update/updateFiles/serverConfig.html", function (res) {
            var resData = "";
            res.on("data", function (data) {
                resData += data;
            });
            res.on("end", function () {
                shell.execSync(`mkdir -p ${tempPath}electron/IPList/`);
                fs.writeFile(`${tempPath}electron/IPList/serverConfig.json`, resData, function (err) {
                    if (!err) {
                        shell.execSync(`cp ${tempPath}electron/IPList/serverConfig.json ./`);
                        activeIP = loadActiveIP();
                        checkGUIUpdate(newData);
                    } else {
                        showUpdateFail();
                    }
                });
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
function checkGUIUpdate() {
    createMainWin();
    const options = {
        type: 'info',
        title: '信息',
        message: "这是一个信息对话框. 很不错吧？",
        buttons: ['是', '否']
    };
    //dialog.showMessageBox(options, function (index) {
    //    console.log(index)
    //})
}

function createMainWin() {
    winTitle = `rhine v${currentVer}`;
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // 加载应用的 index.html
    mainWindow.loadURL('file://' + __dirname + '/web/admin.html');

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