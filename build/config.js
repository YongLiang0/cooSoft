/**
 * 页面信息配置
 */

const _page_config = {

    // 所有页面信息
    pages : {
        'index' : {
            title : '首页',
            userAgent : 'pc',
            pcUrl : '/index.html',
            mobileUrl : '/phone/index.html'
        },
        'phone/index' : {
            title : '首页',
            userAgent : 'mobile',
            pcUrl : '/index.html',
            mobileUrl : '/phone/index.html'
        }
    },

    // 公用js，cdn,static文件内的js都可以引入
    commonJs : [
        '//cdn.bootcdn.net/ajax/libs/babel-polyfill/7.10.4/polyfill.min.js',
        '//cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js'
    ],

    // 公用css，cdn,static文件内的css都可以引入
    commonCss : [
        '//cdn.bootcdn.net/ajax/libs/animate.css/3.7.2/animate.min.css'
    ]

};

module.exports = _page_config;