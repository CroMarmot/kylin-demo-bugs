# 创建父项目文件夹
mkdir eslintBugDemoDir && cd eslintBugDemoDir
# 初始化父目录
yarn init -y
# 克隆当前仓库
git clone https://github.com/CroMarmot/kylin-demo-bugs.git --depth=1 && cd kylin-demo-bugs

cnpm i
# cnpm run lint # 正常
./node_modules/.bin/eslint --ext js --ext vue src/pages/eslintBug/components/index-view.vue

cd ..
# 父目录安装所需的webpack
yarn add webpack
cd kylin-demo-bugs
# cnpm run lint # 错误(期望不应该受到任何父目录变化影响)
./node_modules/.bin/eslint --ext js --ext vue src/pages/eslintBug/components/index-view.vue

cd ..
# 删除父目录安装的webpack
rm -rf node_modules
cd kylin-demo-bugs
# cnpm run lint # 正常
./node_modules/.bin/eslint --ext js --ext vue src/pages/eslintBug/components/index-view.vue
