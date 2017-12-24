## 构建说明：

1. 安装npm插件
```
npm install
```

2. 测试启动

```
npm run
```


打包命令
```
 // "packager": " electron-packager ./app electron_tools --all --out ./OutApp  --version 0.1.0 --overwrite  --icon=./app/img/icon/icon.ico"
 electron-packager <location of project> <name of project> <platform> <architecture> <electron version> <optional options>
 命令说明： 
* location of project：项目所在路径 
* name of project：打包的项目名字 
* platform：确定了你要构建哪个平台的应用（Windows、Mac 还是 Linux） 
* architecture：决定了使用 x86 还是 x64 还是两个架构都用 
* electron version：electron 的版本 
* optional options：可选选项
```

npm run-script packager

npm全局安装打包工具
```
npm install electron-packager -g
```

"packager": "electron-packager ./app electron_tools --all --out ./OutApp  --version 0.1.0 --overwrite --icon=./app/img/icon/icon.png --ignore=node_modules"