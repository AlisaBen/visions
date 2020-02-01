# 关于开发环境

IDE（写代码的效率）
git（代码版本管理，多人写作开发）
js模块化
打包工具
上线回滚的流程

## IDE

- webstorm
- sublime
- vscode
- atom
- 插件

## git

git的基本操作
- git add 
- git checkout 
- git commit -m ""
- git push origin master
- git pull origin master
- git branch
- git checkout -b xxx
- git merge xxx

# 模块化

## 不使用模块化

需要在最外层引入代码文件

- util.js getFormatDate底层代码
- a-util.js aGetFormatDate   使用getFormatFate业务底层代码
- a.js aGetFormatDate业务代码

## 使用模块化

文件和函数之间自己知道引用了谁，我们只需要在最外层引入业务代码就好

> 利用export和require导入和导出函数


## AMD

模块定义规范

- require.js
- 全局define函数
- 全局定义require函数
- 以来js会自动、异步加载（底层依赖关系明确）

```javascript
//util.js
define(function () {
    return {
        getFormatDate: function (date, type) {
            if (type === 1) {
                return '2017-05-14';
            }
            if (type === 2) {
                return '2017年6月15日';
            }
        }
    }
})

//a-util.js
define(['./util.js'], function (util) {
    return {
        aGetFormatDate: function (date) {
            return util.getFormatDate(date, 2);
        }
    }
})

// a.js
define(['./a-util.js'], function (aUtil) {
    return {
        printDate: function(date) {
            console.log(aUtil.aGetFormatDate(date));
        }
    }
})

// main.js
requestAnimationFrame(['./a.js'], function (a) {
    var date = new Date();
    a.printDate(date);
})

```

## CommonJS
- nodejsm模块化规范
- 前端开发依赖的插件和库， 都可以从npm中获取
- 构建工具的高度自动化，使用npm的成本非常低
- CommonJS不会异步加载js，而是同步一次性加载出来（后端）


```javascript
var util = require('util.js');
module.exports = {
    aGetFormatDate: function (date) {
        return util.getFormatDate(date, 2);
    }
}
```

AMD和CommonJS的使用场景
- 需要异步加载,使用AMD
- 使用了npm建议使用CommonJS


# 构建工具

grunt

gulp

fis3百度

**webpack**

- 全局安装http-server:`sudo npm install http-server -g`
- 在工程目录下启动服务`http-server -p 8881`
- 在工程目录下初始化`npm init`
- `npm install webpack --save-dev`仅仅在开发环境下

[项目代码](./webpack)

## 上线回滚

### 上线和回滚的基本流程

- 将测试完成的代码提交到git版本库的master分支
- 将当前服务器的代码全部打包并记录版本号，备份
- 将master分支的代码提交覆盖到线上服务器，生成新的版本号

#### 回滚流程要点
- 将当前服务器的代码全部打包并记录版本号，备份
- 将备份的上一个版本号解压，覆盖到线上服务器，并生成新的版本号

### linux基本命令
- 登录：`ssh benyafang@neotel.com.cn`
- `mkdir a`
- `ll`/`ls`
- `rm -rf a`
- `vi a.js`
- `mv a1.js src/a1.js`
- `cat`
- `tail -n 100 a.js` 
- `head -n 100 a.js`
- `grep '2' a.js`
