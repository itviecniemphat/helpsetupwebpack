var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
  },
};

module.exports = config;
// run >> webpack -p


//or
// module.exports = {
// 	entry: './app/app.js',
// 	output: {
// 		path: __dirname,
// 		filename: './public/bundle.js'
// 	}
// };
// run >> webpack
