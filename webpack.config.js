const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        // publicPath: 'public'
    },
    mode: 'development',
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        // publicPath: 'public'
        port: 8003
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{loader: 'awesome-typescript-loader'}] 
            },
            { 
                enforce: "pre",
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024
                    }
                }] 
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({   //创建一个在内存中生成html页面的插件
            template: path.join(__dirname,'./public/index.html'),   //指定模板页面
            favicon: path.join(__dirname, './public/images/favicon.png'),
            //将来会根据此页面生成内存中的页面
            filename: 'index.html'   //指定生成页面的名称，index.html浏览器才会默认直接打开
        })
    ]
};

module.exports = webpackConfig;
