export const info = [
  {
    title: '说明',
    description: '该功能为了减少前端在swagger的复制粘贴API信息的工作，使用爬虫获取页面中前端需要的信息。',
    details: [
      '可能执行时间会很长，请耐心等待。'
    ]
  },
  {
    title: '快速开始',
    description: '',
    details: [
      '请在输入框内输入swagger URL地址，如xxx.com。',
      '然后点击下载，等待信息获取完成后会自动下载一个压缩包文件。'
    ]
  },
  {
    title: '推荐',
    description: '在https://github.com/SouthLiu/react-spider-node下载源码在本地运行。',
    details: [
      '需要安装node，https://nodejs.org/zh-cn/自行安装。',
      '进入文件使用yarn安装，然后使用yarn start启动。',
      '启动成功后，在src/index.ts中的orginList常量添加本地前端的域名',
      '在前端调用http://localhost:5000.com/zip接口，传入url和fileName，url为swagger URL，fileName为文件下载的名称。'
    ]
  },
]