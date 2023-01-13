import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "edit", link: "1" },
          { text: "Apple2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "edit", link: "cherry" },
      { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "Guitar",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "",
        icon: "edit",
        prefix: "guitar/",
        children: [
          { text: "Flower dance", icon: "edit", link: "flower-dance" }
        ],
      }]
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.vuepress/",
  },
]);
