const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        
        ]
      }
    ],

    rules: [

      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ['file-loader']
      }
    ]

  }
};