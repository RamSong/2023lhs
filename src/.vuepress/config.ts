import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "理化生",
      description: "2023河南理化生实验演示视频",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
