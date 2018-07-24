var http = require('http');
var express = require('express');

var app = express();

app.use(require('morgan')('short'));

(function () {
    var webpack = require('webpack');
    var webpackConfig = require('../config/webpack/dev.config');
    var compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        logLevel: 'warn',
        publicPath: webpackConfig.output.publicPath
    }))

    app.use(require("webpack-hot-middleware")(compiler));
})()

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
});