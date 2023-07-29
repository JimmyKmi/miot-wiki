// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '米家全书',
  tagline: '比米家百科多那么一点点内容的小米智能家居参考书（由米家玩家用爱发电提供）',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://miot.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'miot', // Usually your GitHub org/user name.
  projectName: 'miot-opendoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitlab.com/-/ide/project/jimmykmi/miot-wiki/edit/main/-/',
        },
        blog: {
          blogSidebarTitle: 'BLOG.',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://gitee.com/-/ide/project/jimmykmi/miot-wiki/edit/main/-/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '米家全书',
        logo: {
          alt: '米家全书的Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'MIoT百科',
          },
          {
            to: '/blog',
            label: '关于米家全书',
            position: 'left'
          },
          {
            // href: '/blog/contributing',
            href:'/blog/contributing',
            label: '加入我们',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '链接',
            items: [
              {
                label: '米家',
                to: 'https://home.mi.com/',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '暂时还没有群聊',
                href: '#',
              },
            ],
          },
          {
            title: '参与百科',
            items: [
              {
                label: '关于米家全书',
                to: '/blog',
              },
              {
                label: '参与指南',
                to: '/blog/contributing',
              },
              {
                label: '项目仓库',
                href: 'https://gitlab.com/jimmykmi/miot-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 内容发布者保留所有权利.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
