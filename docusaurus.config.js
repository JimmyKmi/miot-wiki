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
  titleDelimiter: '-',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'miot', // Usually your GitHub org/user name.
  projectName: 'miot-opendoc', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      // 'classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      // ({
      //   docs: {
      //     sidebarPath: require.resolve('./sidebars.js'),
      //     // Please change this to your repo.
      //     // Remove this to remove the "edit this page" links.
      //     editUrl: 'https://gitlab.com/-/ide/project/jimmykmi/miot-wiki/edit/main/-/',

      //     // //自定义告示框
      //     // admonitions: {
      //     //   keywords: ['event','condition'],
      //     //   // extendDefaults: true,
      //     //   },
      //   },
      //   blog: {
      //     blogSidebarTitle: '关于米家全书.',
      //     blogSidebarCount: 'ALL',
      //     showReadingTime: true,
      //   },
      //   theme: {
      //     customCss: require.resolve('./src/css/custom.css'),
      //   },
      // }),

      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://gitlab.com/-/ide/project/jimmykmi/miot-wiki/edit/main/-/',

          //自定义告示框
          admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'event', 'condition'],
            // extendDefaults: true,
          },
        },
        blog: {
          blogSidebarTitle: '关于米家全书.',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      algolia: {
        appId: 'NE9TC2DN83',
        apiKey: '15eaff6f3511cf716a926c2e1890dc00',
        indexName: 'MIOT-WIKI',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '米家全书',
        logo: {
          alt: '米家全书的Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'devicesSidebar',
            position: 'left',
            label: '设备百科',
          },
          {
            type: 'docSidebar',
            sidebarId: 'automationSidebar',
            position: 'left',
            label: '联动设置',
          },
          {
            type: 'docSidebar',
            sidebarId: 'extendSidebar',
            position: 'left',
            label: '进阶教程',
          },
          {
            to: '/blog/readme',
            label: '社区',
            position: 'left'
          },
          {
            href: '/blog/contributing',
            label: '参与编辑',
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
                to: '/blog/readme',
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
