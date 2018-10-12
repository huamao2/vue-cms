var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

// 自动指定入口和出口文件,这样运行webpack时就不用手动指定了
module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: path.join(__dirname, 'src/main.js'), //相对路径
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=1000&name=[name].[ext]' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  resolve:{
    alias:{
      // 'vue$': 'vue/dist/vue.js'  //设置vue被导入时候的路径
    }
  }
}