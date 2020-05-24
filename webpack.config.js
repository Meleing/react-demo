const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: 'development',
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
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
        new CopyWebpackPlugin({
            patterns: [
                { from: __dirname + '/public', to: __dirname + '/dist' },
            ],
        })
    ]
};
