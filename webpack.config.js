module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port:9999
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
               test: /\.css$/,
               exclude: /node_modules/,
               loader: 'style!css'
           },
            {
               test: /\.scss$/,
               exclude: /node_modules/,
               loader: 'style!css!sass'
           },
           {
               test: /\.jpg$/,
               loader: 'file-loader'
           },
           {
               test: /\.svg/,
               loader: 'svg-url-loader'
           }
        ]
    }
};
