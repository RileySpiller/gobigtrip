module.exports = {
    entry: "./main.js",
    output: {
        path: "../public",
        filename: "sharetribestyle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
