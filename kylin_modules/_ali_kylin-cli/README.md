# kylin-cli

## install

``` js
tnpm install @ali/kylin-cli -g
```

## command

### init

``` bash
kylin init <templateName>
```

- 如果无输入`<templateName>`，会自动使用`ls`命令查询`kylin-templates`仓库让用户选择
- 如果不含`/`符号，会去 `gitlab.alipay-inc.com/kylin-templates/<templateName>` 中寻找
- 如果含`/`符号，会取 `gitlab.alipay-inc.com/<templateName>` 中寻找
- 使用`ssh`连接，仓库权限依赖于当前`git`配置用户权限

### init-page

``` bash
kylin init-page [templateName] <pageName>
```

- templateName 为可选输入
- pageName 希望初始化的page名称

- 如果当前cwd下有`package.json`存在并且存在`kylinApp`字段，则会自动往`kylinApp.pages`添加新增的`page`

### init-component

``` bash
kylin init-component [templateName] <componentName>
```

- templateName 为可选输入
- component 希望初始化的component名称

- 如果当前cwd下有`package.json`存在并且存在`kylinApp.pages`大于1个page，会提示选择需要在哪个page/components目录下创建

### ls

``` bash
kylin ls [group-name]
```

- groupName 可选输入，默认`kylin-templates`

- 会去`groupName`对应gitlab组中查询符合条件的`kylin`模板，（符合条件指：仓库的`description`字段为`[ls]`开头，方便过滤）