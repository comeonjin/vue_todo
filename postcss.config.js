const autoprefixer = require('autoprefixer')


module.exports = {
    plugins: [
        autoprefixer()  //编译生成css文件后，处理css文件，比如这个插件自动添加浏览器前缀
    ]
}