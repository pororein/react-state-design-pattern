const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: "0.0.0.0"
    }
};