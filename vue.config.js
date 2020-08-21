const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const webpack = require("webpack");
module.exports = {
    //选项
    //基本路径
    publicPath: '/',
    //构建时的输出目录
    outputDir: "dist",
    //放置静态资源的目录
    assetsDir: 'static',
    //html的输出路径
    indexPath: 'index.html',
    //文件名哈希
    filenameHashing: true,
    //用于多页配置，默认时undefined,
    pages: {
        // index: {
        //     //page的入口文件
        //     entry: 'src/index/main.js',
        //     //模板文件
        //     template: 'public/index.html',
        //     //在dist/index.html的输出文件
        //     filename: 'index.html',
        //     //当使用页面title选项时，
        //     //template中的title标签需要是<title><%= htmlwebpackplugin.otions.title %></title>
        //     title: 'Index Page',
        //     //在这个页面中包含的块，默认情况下，会包含
        //     //提取出来的通用chunk和vendor chunk
        //     chunks: ['chunk-vendors', 'chunk-common', 'index']
        // },
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            filename: 'index.html',
            // title: 'Index Page',
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        //当使用只有入口的字符串格式时，模板文件默认是'public/subpage.html'.
        // 如果不存在，就回退到'public/index.html''.输出文件默认是'subpage.html'
        // subpage: 'src/subpage/main.js',
    },
    //是否在保存的时候使用eslint-loader 进行检查
    lintOnSave: true,
    //是否使用带有浏览器内编译器的完整构建版本，
    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
    runtimeCompiler: false,
    //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    //css相关选项
    css: {
        //将组件内的css提取到一个单独的css文件（只用在生产环境中）
        //也可以是一个传递给‘extract-text-webpack-plugin'的选项对象
        extract: process.env.NODE_ENV !== 'production',
        //是否开启 css source map ?
        sourceMap: false,
        //为预处理的loader传递自定义选项，比如传递给
        //css-loader 时，使用`{Css: {...}}`.
        // loaderOptions: {
        //     css: {
        //         //这里的选项会传递给css-loader
        //     },
        //     postcss: {},
        // },
        // loaderOptions: {
        //     scss: {
        //         data: `@import "@/assets/styles/common.scss";`
        //     }
        // },
        //为所有的css及其预处理文件开启css modules
        //为这个选项不会影响"*.vue"文件
        // modules: false,
        // requiredExtension: true,
    },
    //配置webpack-dev-server行为
    devServer: {
        // open: process.platform === 'darwin',
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hot: true,
        // proxy: {
        //     '/api': {
        //         target: "http://app.rem.com",
        //         changeOrigin: true,
        //         secure: true,
        //         ws: true,
        //         pathRewrite: {
        //             "^/api": "",
        //         }
        //     },
        //
        // },
        // before: app => {}
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            /*new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                    },
                },
                sourceMap: false,
                parallel: true,
            })*/
        ]
    },
    // webpack 路径配置
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('src/index.js')];
        // 配置静态文件引入路径
        config.resolve.alias
            .set('@', resolve('src'));
        // 打包构建项目时,图片压缩，开发环境不需要打开
        // config.module
        //     .rule('images')
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         bypassOnDebug: true
        //     })
        //     .end();
    },
    // 第三方插件配置
    pluginOptions: {}
};
