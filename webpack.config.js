const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    // path.resolve generates an absolute path
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // NB! Webpack parses loaders in the 'use' array from bottom to top
        use: [
          // style-loader: Injects the CSS from the individual CSS files
          // into the top of our html page so that there are less files to download in PROD
          { loader: 'style-loader' },
          // css-loader: Understands "import './*.css'"
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // Tell 'css-loader' how many other loaders we need to run before it needs to run
              modules: true, // Enable CSS modules
              // [name]: name of the class we define in the CSS file eg. .PizzaImage
              // [local]: component's name eg. PizzaImage
              // [hash...]: random number to make the class namer really unique
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          // postcss-loader: use this to apply auto prefixing to some css properties
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: ['> 1%', 'last 2 versions']
                })
              ]
            }
          }
        ]
      },
      // 'url-loader': Will convert any images, smaller than the limit specified, to base64 and inline them
      // so we don't have to download a separate image file.
      // Files above the limit will just be copied to the output folder eg. dist/image/<name>
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      }
    ]
  }
};
