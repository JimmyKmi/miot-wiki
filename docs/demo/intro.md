---
sidebar_label: '从这里开始'
sidebar_position: 1
---

# 从这入门
1. 不需看别的文件，只看 `/docs` 目录下的文件。
2. 使用 markdown 格式编写，即 `先码字` + `一点标记` =  `好看的词条`。
3.  [Markdown 快速标记指南](https://markdown.com.cn/basic-syntax/links.html) 快速上手。

:::tip
千万不要被「标记」、「语言」吓到，Markdown的语法十分简单，常用的标记符号不超过十个，用于日常写作记录绰绰有余，不到半小时就能完全掌握。

就是这十个不到的标记符号，却能让人优雅地沉浸式记录，专注内容而不是纠结排版，达到「心中无尘，码字入神」的境界。
:::

## 目录结构

``` title="你只需要关注/docs目录下的文件。"
根目录
├── docs
│   ├── 文件夹
        ├──文档.md
    ├──文档.md
    ├──......
```

## 命名规则

创建文件或文件夹需要遵守以下规则：
1. 文件名不等于百科页面显示的名字，显示的名字需要在文件内部进行编辑（如何编辑，请参看示例）。
2. 文件名使用英文小写，空格使用 - 代替，比如 `HelloMyFriend` 应写成 `hello-my-friend`。 
3. 设备的`.md`文件名称必须是设备的ID。`例：小米人体传感器 文件名应为“lumi.sensor_motion.v2.md”`

## 编辑器的使用

> 编辑器一览

![编辑器预览.jpeg](https://image.static.miot.wiki/2023/07/29/64c52412c21ae.jpeg)

> 目录操作菜单

![目录操作菜单.jpeg](https://image.static.miot.wiki/2023/07/29/64c524ef7cf0d.jpeg)

### 创建新目录
需要建立目录时，在 `/docs` 下创建文件夹并以英文名命名。  
当然你也可以创建多级目录，如： `/docs/lights/yeelight`。

#### 目录标题
在需要创建标题的目录下新建一个名为 `_category_.json` 的文件。

黏贴以下内容进行修改
```json title="_category_.json"
{
  "label": "目录标题",
  "position": 1, 
  "link": {
    "type": "generated-index",
    "description": "目录的介绍"
  }
}
```

### 创建新词条

> - 为什么要用英文路径？因为避免部分浏览器出错  
> - 务必遵循[命名规则](#命名规则)

在编辑器左侧你想要的目录上右击选择新建文件，创建一个命名以 `.md` 结束的文件，在文件顶部根据下方示例进行备注，就可以开始[编写你的词条](#编辑词条)了。

``` Markdown title="词条顶部例示"
---
sidebar_label: '词条标题'
sidebar_position: 1
---

```

### 编辑词条
编写内容主要包含两步：

1. 编写词条内容
2. 词条内容排版图片的插入

::: tip
这两步可以同时进行，也可以分开来做。
:::

#### 文本的排版

你可以直接使用在线编辑器进行编写。
Markdown 的使用方法，你可以参考 [Markdown 快速标记指南](https://markdown.com.cn/basic-syntax/links.html) 快速上手。

::: tip
不用担心，很简单Markdown的使用只需要记住十个标记符号。
:::

#### 图片的插入

[点击打开MIoTWiki图床](https://ima.miot.wiki/)，并注册一个账号。

### 提交更改

当你编辑/新建词条后：
> 可以是一个或多个词条

1. 在左侧工具栏选择 `SOURCE CONTROL（资源中心）` 。
2. 输入修改内容的简述。
> 例示： “修正了简介的错别字” 或 “新增了子擎Lite的详细介绍”。
3. 点击`Commit to ‘main’`提交

> 提交流程
![提交流程.jpeg](https://image.static.miot.wiki/2023/07/29/64c52690688e1.jpeg)


## 审核
为了确保大家编辑的内容不会被覆盖，也为了防止广告等无关内容的渗入，提交的拉取请求会由社区管理员进行审核，审核通过后内容会自动合并到MIoTWiki中。