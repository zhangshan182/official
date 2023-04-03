// 项目基础配置
import { defineConfig } from '@umijs/max';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  title: '映造虚拟人',
  inlineLimit:100,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '虚拟人',
      path: '/virtualHuman',
      component: './VirtualHuman',
    },
    {
      name: '应用场景',
      path: '/applicationScenario',
      component: './ApplicationScenario',
    },
    {
      name: '虚拟人定制',
      path: '/customized',
      component: './ProductCenter/Customized',
    },
    {
      name: '虚拟人直播解决方案',
      path: '/live',
      component: './ProductCenter/Live',
    },
    {
      name: '虚拟人及内容生成SAAS平台',
      path: '/saas',
      component: './ProductCenter/Saas',
    },
    {
      name: '元宇宙基建UGC平台',
      path: '/metaverse',
      component: './ProductCenter/Metaverse',
    },
    {
      name: '核心技术',
      path: '/coreTechnology',
      component: './CoreTechnology',
    },
    {
      name: '关于我们',
      path: '/aboutUs',
      component: './AboutUs',
    },
  ],
  npmClient: 'pnpm',
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
  },

});

