const { name, version } = require("./package");
const babel = require("rollup-plugin-babel");
const json = require('rollup-plugin-json');//读取 json 文件
const commonjs = require('rollup-plugin-commonjs');//可以使用 commonjs 规范的模块
const { uglify } = require('rollup-plugin-uglify');//压缩 bundle 文件
// const { eslint } = require("rollup-plugin-eslint");
const path = require("path");
const packageDir = __dirname;
const resolve = p => path.resolve(packageDir, p);

/*
rollup基础插件
rollup-plugin-alias: 提供modules名称的 alias 和reslove 功能
rollup-plugin-babel: 提供babel能力
rollup-plugin-eslint: 提供eslint能力
rollup-plugin-node-resolve: 解析 node_modules 中的模块
rollup-plugin-commonjs: 转换 CJS -> ESM, 通常配合上面一个插件使用
rollup-plugin-serve: 类比 webpack-dev-server, 提供静态服务器能力
rollup-plugin-filesize: 显示 bundle 文件大小
rollup-plugin-uglify: 压缩 bundle 文件
rollup-plugin-replace: 类比 Webpack 的 DefinePlugin , 可在源码中通过 process.env.NODE_ENV 用于构建区分 Development 与 Production 环境.
rollup-plugin-sourcemaps：能生成 sourcemaps 文件
*/
const full =process.env.FULL=="true" ? '.full' : '';
const min =process.env.MIN=="true"? '.min' : ''; 

module.exports = {
    input: resolve(`./src/index${full}.js`),
    plugins: [
        // eslint({
        // 	fix: true,
        //   	exclude: 'node_modules/**'
        // }),
        commonjs(),
        json({
            namedExports: false
        }),
        babel({
            exclude: 'node_modules/**',//为了避免转译第三方脚本，我们需要设置一个 exclude 的配置选项来忽略掉 node_modules 目录
            // plugins: ['external-helpers'],
        }),
        min ? uglify() : undefined
    ],
    output: {
        name,
        file: resolve(`dist/${version}/${name}${full}${min}.js`),//文件打包后出口文件名称
        format: `iife`,//打包后文件格式 iife 自执行函数,适合script引入
        sourcemap: process.env.SOURCE_MAP, //生成bundle.map.js文件，方便调试
    },
    // globals: {
    //     lutils: ''
    // }
};