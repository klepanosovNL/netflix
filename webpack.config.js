const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';
    const isDev = argv.mode === 'development';
    
    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'
        ];
    };

    const getPlugins = () => {
        const plugins = [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            })
        ];

        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                    filename: 'main-[hash:8].css'
                })  
            )
        }

        return plugins;
    }

    return {
        mode: isProd ? 'production' : isDev && 'development',

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // Loading images
                {
                    test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
                    use: [
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            } 
                        }
                    ]
                },
                // Loading fonts 
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            } 
                        }
                    ]
                },
                // Loading css
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },
                // Loading sass/scss
                {
                    test: /\.(s[ca]ss)$/,
                    use: [...getStyleLoaders(), 'sass-loader']
                }
            ]
        },
    
        plugins: getPlugins(),
    
        devServer: {
            open: true,
            overlay: true
        }
    };
};