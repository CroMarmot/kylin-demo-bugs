'use strict';

const config = {};

// 用户自定义mock
config.call = {
    // mock rpc 接口
    rpc: function (opts, callback) {
        var type = opts.operationType;
        var rpc = require('./rpc/' + type);
        var data = typeof rpc === 'function' ? rpc(opts) : rpc;
        // 防止在业务逻辑中对传入的对象进行了修改
        data = Object.assign({}, data);
        // callback && callback(data);

        // 模拟服务端/网络接口延迟，此时会发现打了2次log，一次是纯请求的，一次是包含返回结果的
        setTimeout(() => {
            callback && callback(data);
        }, 2000);
    },

    // mock pushWindow 接口
    pushWindow: function (opts, callback) {
        // 模拟客户端正在实现的一个新功能，这样可以在demo阶段前端自己进行mock，等客户端完成后业务代码无修改直接集成
        if (opts.type === 'a-new-type') {
            alert('mock' + JSON.stringify(opts));
            return true;
        } else {
            // 返回false意味着调用客户端默认的实现
            return false;
        }
    },

    // mock getLocation 接口
    getLocation: function (opts, callback) {
        // mock方法必有opts，callback两个参数。H5容器API中opts不传时，opts为undefined
        callback && callback({
            province: '北京'
        });
    }
};

// 仅对此列表之中的rpc进行mock，如果不配置此项默认会对所有rpc进行mock
config.rpcMockList = [
    'test',

    // 可以用回调方法进行更复杂的定制，返回false说明不进行mock，使用服务端接口的返回
    function (opts) {
        // mock兴趣这个特殊接口，其他例如获取职业使用服务端接口的返回
        var shouldMock = opts.operationType === 'testRPC' &&
            (opts.requestData[0].menuType === 'LIKE');
        return shouldMock;
    }
];


// 一般本地chrome开发时会打开此项配置，说明页面运行在一般的浏览器中，此时会自动mock一些容器API，触发AlipayJSBridgeReady事件，mock全局变量AlipayJSBridge
// 但是如果安装了luna-devtools，会自动识别到是在浏览器中运行，因此就不用打开了。
// 默认此项关闭，会通过UserAgent来猜测是否页面运行于Nebula中，如果页面运行在钱包容器中，不会自动mock，只会应用本配置文件中自定义的mock
// config.runInBrowser = true;


// 完全禁用本工具，方便使用线上接口进行最后的验证。默认为false会开启所有mock
// config.forbidAll = true;

// 本工具默认会显示每次容器调用的log，如果想关掉请打开下面的配置
// config.disableLog = true;

// 如果上面call中写的代码比较多，全部注释可能比较麻烦，可以单独配置为false来关闭自定义mock，此时会强制使用原生实现
// config.call.rpc = false; // 关闭对rpc接口的mock
// config.call.httpRequest = false; // 关闭对httpRequest接口的mock
// config.call.toast = false; // 关闭对toast接口的mock

window.lunaMockConfig = config;
