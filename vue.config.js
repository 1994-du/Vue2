const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports={
    optimization:{
        minimize:true,
        minimizer:[new TerserPlugin({
            sourceMap:false
        }),new CssMinimizerPlugin({
            sourceMap:false
        })]
    },
    devServer:{
        disableHostCheck:true,
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    },
    css:{
        sourceMap:false
    },
    configureWebpack: {
        devtool:false
    }
}