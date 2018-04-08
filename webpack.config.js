module.exports = {
    entry: __dirname + "/app/main.js", //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在目录
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    }
}