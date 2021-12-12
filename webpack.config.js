const path = require("path");

module.exports = (env) => {
    return {
        mode: "none",
        entry: "./src/index.js",
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "postcss-loader",
                        "sass-loader",
                    ],
                },
            ],
        },

        devServer: {
            static: path.join(__dirname, "dist"),
            port: env.port
        }
    }
};
