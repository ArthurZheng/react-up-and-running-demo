module.exports = {
    entry: "./public/scripts/hello_world.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
						{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};
