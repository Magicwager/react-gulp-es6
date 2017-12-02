/**
 * Created by Magicwager on 2017/12/1.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var util = require('gulp-util');
var minifycss = require('gulp-minify-css');
var koa = require('koa');
var app = koa();
var cfg = require('./config/config');
var browserify = require('gulp-browserify');
var es2015 = require("babel-preset-es2015");
var react=require('gulp-react');
var webpack = require("gulp-webpack");
var server = require('gulp-server-livereload');
var DevServer = require("portal-fe-devServer");
var serverConfig = cfg.serverConfig;

// 编译 src 下所有的 html,js 文件到 dist 目录
gulp.task('copy:src', function () {
    gulp.src([
        'src/**/**/*.html',
        'src/**/**/*.js',
        'src/**/**/*.json',
        'src/**/**/*.png',
        'src/**/**/*.jpg',
        'src/**/**/*.gif',
        'src/**/**/*.ico',
        'src/**/**/*.css',
    ])
        .pipe(rename(function (path) {
            path.dirname += '';//相对src的路径，例如设path.dirname='/test',则输出的路径会在原目录文件的外层包一层test
        }))
        .pipe(gulp.dest("./dist"));
});

// 匹配所有 less文件进行 less 编译
gulp.task('less', function () {
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(rename(function (path) {
            path.extname = ".css"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('less:dist', function () {
    gulp.src(['src/**/*.less'])
        .pipe(less())
        .pipe(minifycss())
        .pipe(rename(function (path) {
            path.extname = ".css"
        }))
        .pipe(gulp.dest('dist'));
    gulp.src(['src/**/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));
});
gulp.task('react-es6',function(){
    gulp.src(['./src/**/*.jsx','./src/**/*.js'])
        //.pipe(browserify({
           // transform:['babelify','reactify']
        //}))//compile JSX (superset of javascript used in react UI library) files to javascript
        .pipe(react({es6module: true}))//这里就是新加入的模块, 解析jsx用
        .pipe(babel({presets:[es2015]}))//es6tojs的解析器
        .pipe(gulp.dest('dist'))
        .pipe(webpack({//babel编译import会转成require，webpack再包装以下代码让代码里支持require
            output:{
              filename:"index.js",
            },
            stats:{
              colors:true
            }
          }))
        .pipe(gulp.dest('./dist/build'))
});
//监听文件改动，执行相应任务
gulp.task('watch', function () {
    console.log('监听文件改动，执行相应任务');
    gulp.watch('src/**/**/*.less', ['less']);
    gulp.watch('src/**/**/*.js');
    gulp.watch([ 'src/**/**/*.html', 'src/**/**/*.js', 'src/**/**/*.css'], [ 'copy:src']);
});

//清空 dist 目录下的资源
gulp.task('clean', function () {
    console.log('清空 dist 目录下的资源')
    gulp.src('dist/*', {
        read: false
    })//read:false--阻止gulp读取文件，这样会加快任务
        .pipe(clean({
            force: true
        }));
});

//
gulp.task('dev-server', function () {
    serverConfig.app = app;
    var mockServer = new DevServer(serverConfig);
    mockServer.start(serverConfig);
});
/* gulp.task('server',function(){
    gulp.src('dist')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      defaultFile:"./seconde_stage_src/index.html",
      open: true
    }));
}) */
gulp.task('before', [ 'copy:src', 'less']);
gulp.task('default', ['before','react-es6','dev-server', 'watch']);
//gulp.task('trans-test', ['translate', 'dev-server','watch']);
