import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "开始使用", icon: "discover", link: "/begin/" },
  { text: "物理", icon: "physics", link: "/physics/" },
  { text: "化学", icon: "heading", link: "/chemistry/" },
  { text: "生物", icon: "emmet", link: "/biology/" },
  {
    text: "服务状态",
    icon: "note",
    link: "https://status.ninefour.ml/",
  },
]);
