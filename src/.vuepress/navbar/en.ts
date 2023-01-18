import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/",
    {text: "Demo", icon: "discover", link: "/demo/"},
    {
        text: "IDEA Plugin",
        icon: "edit",
        prefix: "/idea_plugin/",
        children: [
            {
                text: "doc",
                icon: "edit",
                prefix: "doc/",
                children: [
                    {text: "1111", icon: "edit", link: "1"}
                ],
            },
            {text: "Cherry", icon: "edit", link: "cherry"}
        ],
    },
    {
        text: "Guitar",
        icon: "edit",
        prefix: "/guitar",
        children: [
            {
                text: "",
                icon: "edit",
                prefix: "/",
                children: [
                    {text: "Flower dance", icon: "edit", link: "flower-dance"}
                ],
            }]
    },
    {
        text: "V2 Docs",
        icon: "note",
        link: "https://theme-hope.vuejs.vuepress/",
    },
]);
