import { Bell, CalendarCheck, Newspaper } from "lucide-react";

export const NAV_ITEMS = [
    {
        title: "R-LINE",
        path: "/r-line",

        submenu: true,
        subMenuItems: [
            { title: "Premier R4", path: "/r-line/r4" },
            { title: "Premier R6", path: "/r-line/r6" },
            { title: "Premier R8", path: "/r-line/r8" },
        ],
    },
    {
        title: "S-LINE",
        path: "/s-line",

        submenu: true,
        subMenuItems: [
            { title: "Premier S4", path: "/s-line/s4" },
            { title: "Premier S6", path: "/s-line/s6" },
            { title: "Premier S8", path: "/s-line/s8" },
        ],
    },
    {
        title: "T-LINE",
        path: "/t-line",

        submenu: true,
        subMenuItems: [
            { title: "Premier T4", path: "/t-line/t4" },
            { title: "Premier T6", path: "/t-line/t6" },
            { title: "Premier T8", path: "/t-line/t8" },
        ],
    },
    {
        title: "SBG",
        path: "/sbg",

        submenu: true,
        subMenuItems: [
            { title: "SBG1", path: "/sbg/sbg1" },
            { title: "SBG2", path: "/sbg/sbg2" },
            { title: "SBG3", path: "/sbg/sbg3" },
        ],
    },
    {
        title: "News & Events",
        path: "/news-events",

    },
    {
        title: "About Us",
        path: "/about-us",

    },
    {
        title: "Contact Us",
        path: "/contact-us",

    },
    {
        title: "EN",
        path: "/lang",

        submenu: true,
        lang: true,
        subMenuItems: [
            { title: "EN", path: "/en" },
            { title: "BG", path: "/bg" },
            { title: "FR", path: "/fr" },
        ],
    },
];

export const IMAGES = [
    { id: "29140209-e637-4386-9023-3a26e9657a90", src: "/img/pic_01.jpg", alt: "pic_01" },
    { id: "3687d729-df69-41b0-8ec1-fba9d29451f7", src: "https://picsum.photos/1980/700", alt: "pic_01" },
    { id: "73f8bd5e-d768-4f24-a3f4-c35c16864766", src: "https://picsum.photos/1979/700", alt: "pic_01" },
];

export const CARDS = [
    {
        title: "EGT is expecting FADJA Colombia 2017",
        date: "April 4, 2017",
        description:
            "We're expecting FADJA Colombia 2017 to continue our success from the 2016's event.",
        image: "https://picsum.photos/300/170",
        icon:
            <Bell width={30} height={30} color="rgb(213 34 40)" />,
        iconTitle: "News",
        alt: "content",
        width: 300,
        height: 170,
    },
    {
        title: "Indian Gaming Show",
        date: "April 10-13, 2017",
        description:
            "Euro Games technologies has been awarded the True Leader 2015 Accolade. The company",
        image: "https://picsum.photos/300/170",
        icon: <CalendarCheck idth={30} height={30} color="rgb(213 34 40)" />,
        iconTitle: "Events",
        alt: "content",
        width: 300,
        height: 170,
    },
    {
        title: "True Leader accolade for Bulgarian firm",
        date: "February 28, 2017",
        description:
            "Euro Games technologies has been awarded the True Leader 2015 Accolade. The company",
        image: "https://picsum.photos/300/170",
        icon: <CalendarCheck idth={30} height={30} color="rgb(213 34 40)" />,
        iconTitle: "Press Releases",
        alt: "content",
        width: 300,
        height: 170,
    },
];
