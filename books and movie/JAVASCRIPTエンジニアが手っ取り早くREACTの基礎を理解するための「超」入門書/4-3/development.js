import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
    mode: 'development',
    entry: src + '/index.jsx',

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                // 対象となるファイルの拡張子
                test: /\.css/,
                // ローダー名
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    {
                        loader: "css-loader",
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            url: false
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html'
        })
    ]
}
