import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "开始使用",
      icon: "note",
      prefix: "begin/",
      children: "structure",
    },
    {
      icon: "physics",
      text: "物理",
      prefix: "physics/",
      link: "physics/",
      children: "structure",
    },
    {
      icon: "heading",
      text: "化学",
      prefix: "chemistry/",
      link: "chemistry/",
      children: "structure",
    },
    {
      icon: "emmet",
      text: "生物",
      prefix: "biology/",
      link: "biology/",
      children: "structure",
    },
  ],
});
