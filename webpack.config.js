module.exports = {
    context: __dirname,
    entry: {
        'main': './main.js',
    },
    output: {
        path: __dirname + '/mobile/assets',
        filename: 'index.js',
        publicPath: '/mobile/assets'
    },
    devServer: {
        contentBase: __dirname,
        port:9999
    },
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }]
            },
            {
               test: /\.css$/,
               exclude: /node_modules/,
               use: ['style-loader','css-loader']
           },
            {
               test: /\.scss$/,
               exclude: /node_modules/,
               use: ['style-loader','css-loader','sass-loader']
           },
           {
               test: /\.jpg$/,
               use: ['file-loader']
           },
           {
               test: /\.svg/,
               use: ['svg-url-loader']
           }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
