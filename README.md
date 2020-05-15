# Mock-Data

Mock数据代码库，可单独运行，也可作为子仓库引入各个项目自己构建对应项目的mock数据

> 前端mock接口数据的环境。基于express+mock.js搭建。

 - 支持typescript编写。
 - 支持[Faker.js](https://github.com/marak/Faker.js/)/[Mock.js](http://mockjs.com/)构建测试数据。
 - 支持swagger.yml接口参数读取



```bash
# 安装相关依赖
npm install 

# 启动mock接口服务：端口默认9528
npm run mock 

```
启动成功后：http://localhost:9528/mock-api/v1/tasks

## 项目结构
```js
root/
├─ mock/ //mock服务及mock接口数据生成
│  ├─ api.ts/ // 
│  ├─ swagger.yml/ // 后端接口swagger文件
├─ src/ //前端代码及ajax请求示例
│  ├─ demo.html

```
双击demo.html 或通过vs-code 插件live-server启动查看

## todo
- [ ] 增加多种示例
- [x] 本机ip

参考项目 [vue-element-admin:Mock Data](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/mock-api.html)