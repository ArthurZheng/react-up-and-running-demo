module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js',
    },
		devtool: '#eval',
    devServer: {
        hot: true,
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
						{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ],
    },
};
