
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                //preprocessor
                //anything that is a jsx file, runs through the loader (babel-loader)
                loader: "babel-loader",
                query: {

                    //transpiling
                    //coverts one programming language into another
                    presets: ['react','es2015']
                }
            }
        ]
    }
};