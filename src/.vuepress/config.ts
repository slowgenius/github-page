import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Space of Slowgenius",
      description: "recording things of Slowgenius",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "笨天才的个人空间",
      description: "记录一些日常",
    },
  },

  theme,

  shouldPrefetch: false,
});
