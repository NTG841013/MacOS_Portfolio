const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://www.geeksforgeeks.org/typescript/typescript-tutorial/",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://threejsresources.com/learn?utm_source=chatgpt.com",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://dev.to/aerospace-prog/the-ultimate-guide-to-mastering-gsap-animations-43kh?utm_source=chatgpt.com",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/NTG841013",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://platform.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/nhlanhla-khumalo-n-0946bb35/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/nk.jpg",
    },
    {
        id: 2,
        img: "/images/h.jpg",
    },
    {
        id: 3,
        img: "/images/c.png",
    },
    {
        id: 4,
        img: "/images/k.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "IDiski Predict Soccer Prediction Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-10", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "IDiski Predict Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Idiski Predict website is a powerful and intuitive platform designed for football fans who want data-driven match predictions and insights.",
                        "Instead of simply displaying predictions, it delivers an engaging experience with detailed analytics, performance statistics, and easy-to-understand forecasting tools.",
                        "Think of it like having a professional football analyst in your pocket—helping you make more informed decisions before every match.",
                        "It's built with modern web technologies, ensuring fast performance, seamless navigation, and a responsive experience across all devices.",
                    ],
                },
                {
                    id: 2,
                    name: "idiski.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://idiskipredict.vercel.app/",
                    position: "top-10 left-80",
                },
                {
                    id: 4,
                    name: "idiski.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-10",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-52 left-80",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Inkomba Stock Tracker",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Inkomba Stock Tracker Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Inkomba Stock Tracker website is a powerful and user-friendly platform designed for monitoring stock prices from some of the world's largest companies.",
                        "Instead of jumping between multiple financial tools, it brings together real-time market tracking, customizable price alerts, and the latest financial news in one seamless experience.",
                        "Think of it like having your own personal market dashboard—keeping you informed and connected to the stock market wherever you are.",
                        "It's built with modern web technologies, ensuring fast performance, intuitive navigation, and a responsive experience across desktop and mobile devices.",
                    ],
                },
                {
                    id: 2,
                    name: "inkomba.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://inkombastocktracker.vercel.app/sign-in",
                    position: "top-10 left-80",
                },
                {
                    id: 4,
                    name: "inkomba-stock-tracker.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-10",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-52 left-80",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Bright AI App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-10",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Bright AI App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Bright AI website is an intelligent collaborative platform designed to transform ideas into complete system architectures using the power of AI.",
                        "Instead of manually creating diagrams and documentation, it generates interactive system designs on a visual canvas, enabling teams to collaborate in real time from different devices and locations.",
                        "Think of it like having an AI-powered solution architect and product team working alongside you—turning concepts into structured, build-ready designs within minutes.",
                        "It's built with modern web technologies and advanced AI capabilities, delivering seamless collaboration, responsive performance, and automated markdown specifications that can be used directly with LLMs to accelerate application development.",
                    ],
                },
                {
                    id: 2,
                    name: "bright-ai.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://bright-ai-seven.vercel.app/sign-in",
                    position: "top-10 left-80",
                },
                {
                    id: 4,
                    name: "bright-ai-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-10",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-52 left-80",
                },
            ],
        },
        // ▶ Project 4
        {
            id: 8,
            name: "Margin Chat App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-80",
            windowPosition: "top-[46vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Margin Chat App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Margin Chat website is an innovative AI-powered platform designed to help readers engage with books in a more interactive and meaningful way.",
                        "Instead of simply reading through pages, it allows you to upload a PDF version of a book and have natural voice conversations about its themes, characters, ideas, and key concepts.",
                        "Think of it like sitting down with the book itself—asking questions, exploring different perspectives, and uncovering deeper insights whenever curiosity strikes.",
                        "It's built with advanced AI and modern web technologies, delivering seamless voice interactions, intelligent contextual understanding, and an immersive learning experience that brings every book to life.",
                    ],
                },
                {
                    id: 2,
                    name: "margin-chat.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://margin-chat.vercel.app/",
                    position: "top-10 left-80",
                },
                {
                    id: 4,
                    name: "margin-chat-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-10",
                    imageUrl: "/images/project-4.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-52 left-80",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/nk.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/k.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/kn.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the man himself",
            image: "/images/kk.png",
            description: [
                "Hey! I’m Nhlanhla 👋. I love creating things, solving interesting problems, and learning something new every single day.",

                "I’m naturally drawn to technology, innovation, and big ideas. Whether it’s AI, digital products, or the next exciting trend, I enjoy exploring how things work and how they can make life a little better.",

                "Curiosity drives a lot of what I do. I’m constantly experimenting, learning, and finding new ways to turn concepts into real-world solutions.",

                "Most of the time, you'll find me planning my next project, researching something that caught my attention, or chasing an idea that starts small and somehow grows into a full-blown obsession 😄.",
,
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };