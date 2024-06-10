import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FairyLand Wiki',
  tagline: 'FairyLand 服务器的 Wiki',
  favicon: 'img/favicon.ico',

  url: 'https://wiki.fairyland.zehuajun.top/',
  baseUrl: '/',

  organizationName: 'zehuajun',
  projectName: 'FairyLand_Wiki',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/zehuajun/FairyLand_Wiki/tree/dev/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/zehuajun/FairyLand_Wiki/tree/dev/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FairyLand Wiki',
      logo: {
        alt: 'FairyLand Wiki 的图标,
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {to: '/blog', label: '博客', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社区',
          items: [
            {
              label: 'QQ 群',
              href: 'https://qm.qq.com/q/z3NMBZO58s',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/FairyLand-Team/FairyLand_Wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FairyLand Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
