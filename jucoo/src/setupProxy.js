const proxy = require("http-proxy-middleware");
module.exports = function(app){
    app.use("/juooo",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/juooo":""
        }
    }))
};