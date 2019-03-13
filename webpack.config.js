const GasPlugin = require("gas-webpack-plugin");
const es3ifyPlugin = require("es3ify-webpack-plugin");

module.exports = {
    devtool: "none",
    entry: "./src/main.ts",
    output: {
        filename: "code.js",
        path: `${__dirname}/dist`,
    },
    resolve: {
        modules: [
           `${__dirname}/src`, `${__dirname}/node_modules`
        ],
        extensions: [".ts"],
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader" },
        ],
    },
    plugins: [
        new GasPlugin(),
        new es3ifyPlugin()
    ],
};
