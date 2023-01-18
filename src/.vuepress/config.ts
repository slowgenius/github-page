import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Space of Slowgenius",
      description: "recording things of Slowgenius",
    }
  },

  theme,

  shouldPrefetch: false,
});
