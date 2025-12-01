// Personal Information
export const PERSONAL_INFO = {
  name: "Sammuel Apa",
  title: "Full Stack JavaScript Developer",
  subtitle: "AI Integration Specialist | Real-Time Application Expert",
  email: "awesammcoder@gmail.com",
  phone: "+63-916-650-1154",
  location: "San Rafael, Macabebe, Pampanga, Philippines",
  profileImage: require("../assets/images/personal/awesammcoder.jpg"),
  yearsOfExperience: 8,
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: {
    username: "awesammcoder",
    url: "https://github.com/awesammcoder",
  },
  linkedin: {
    username: "sammuelapa",
    url: "https://www.linkedin.com/in/sammuelapa/",
  },
};

// Website Information
export const WEBSITE_INFO = {
  title: "Sammuel Apa - Full Stack JavaScript Developer | React, Next.js, Node.js Expert",
  description: "Full Stack JavaScript Developer with 8+ years experience. Expert in React, Next.js, Vue.js, Node.js, AI integration (Claude API, ChatGPT), and real-time applications. Available for hire.",
  keywords: "full stack developer, javascript developer, react developer, nextjs developer, nodejs developer, AI integration, WebRTC, remote developer philippines, sammuel apa",
  url: "https://awesammcoder.github.io/",
  ogImage: "https://awesammcoder.github.io/images/personal/awesammcoder.jpg",
};

// Resume/CV
export const RESUME = {
  downloadUrl: "/resume.pdf",
  fileName: "Sammuel_Apa_Resume",
};

// Calendly Booking
export const CALENDLY = {
  url: "https://calendly.com/awesammcoder/work-opportunities",
};

// Contact Form
export const CONTACT_FORM = {
  formspreeEndpoint: "https://formspree.io/f/xdkypwzj",
};

// Work Experience
export const WORK_EXPERIENCE = [
  {
    year: "2024",
    date: "April 2024 - Present",
    title: "Full Stack JavaScript Developer",
    company: "Studio Corsair",
    location: "San Francisco, CA (Remote)",
    website: "https://studiocorsair.com",
    description: "React, Next.js, Node.js, AI Integration (Claude, ChatGPT), WebSockets, BullMQ, GitHub Actions CI/CD",
    highlights: [
      "Reduced deployment time by 40% through GitHub Actions CI/CD implementation",
      "Integrated Claude and ChatGPT APIs to build AI-powered features",
      "Built real-time communication features using WebSockets and Socket.IO",
      "Managed task queues processing 10,000+ daily tasks using BullMQ and TaskForce",
      "Collaborated with cross-functional teams using ReactJS, ExpressJS, Node.js, and TypeScript",
    ],
  },
  {
    year: "2023",
    date: "October 2023 - April 2024",
    title: "IT Manager/Fullstack Developer",
    company: "1001 Technology Solutions",
    location: "Chiang Mai, Thailand",
    description: "Team Leadership, Full Stack Development, Vue.js, React Native, Laravel, DevOps Implementation",
    highlights: [
      "Aligned technology strategy with business goals to drive operational efficiency",
      "Led end-to-end development of scalable full-stack solutions",
      "Managed development team and project timelines",
      "Built web and mobile applications using ExpressJS, NodeJS, VueJS, React Native, Expo, Laravel, and WordPress",
      "Implemented DevOps practices and deployment strategies",
    ],
  },
  {
    year: "2019",
    date: "May 2019 - October 2023",
    title: "Asst. IT Manager/Full Stack Developer",
    company: "Lihao International Ltd. Co",
    location: "Sihanoukville, Cambodia",
    description: "Infrastructure Management, Full Stack Development, Machine Learning (TensorFlow, PyTorch), Server Administration",
    highlights: [
      "Led development team creating in-house full stack applications for web and mobile",
      "Set up and managed server infrastructure (cloud and on-premise) including LoadBalancer, Apache, Nginx, and Reverse Proxy",
      "Built applications using ExpressJS, NodeJS, VueJS, ReactJS, C#, Laravel, and CodeIgniter",
      "Incorporated Machine Learning features using TensorFlow and PyTorch",
      "Ensured system integrity and smooth data operations",
    ],
  },
  {
    year: "2018",
    date: "November 2018 - May 2019",
    title: "Software Developer",
    company: "Saver6.com Inc.",
    location: "Olongapo City, Philippines",
    description: "Mobile App Development (React Native, Expo, Cordova, Ionic), Laravel, React.js",
    highlights: [
      "Designed and developed new full stack applications from scratch",
      "Upgraded legacy mobile apps using Expo.io, React Native, Cordova, and Ionic",
      "Built web applications using Laravel and ReactJS",
      "Implemented modern technologies to enhance functionality and user experience",
    ],
  },
  {
    year: "2018",
    date: "February 2018 - November 2018",
    title: "Software Engineer II",
    company: "Cloudstaff Inc. & VAMP",
    location: "Pasig City, Philippines",
    description: "Elixir (Phoenix Framework), EmberJS, Instagram API Integration, Influencer Marketing Platform",
    highlights: [
      "Developed an influencer marketing platform connecting brands with social media influencers",
      "Built full stack application using Elixir (Phoenix Framework) and EmberJS",
      "Integrated Instagram API for seamless data synchronization",
      "Created seamless user experience for both brands and influencers",
    ],
  },
  {
    year: "2017",
    date: "May 2017 - February 2018",
    title: "Full Stack PHP Developer",
    company: "iFormatLogic IT Solutions",
    location: "Olongapo City, Philippines",
    description: "WordPress, CodeIgniter, Laravel, Magento, CSZCMS, Client Solutions",
    highlights: [
      "Developed and maintained full stack web applications for diverse clients",
      "Built custom solutions using WordPress, CodeIgniter, Magento, Laravel, and CSZCMS",
      "Collaborated with cross-functional teams to deliver IT solutions",
      "Enhanced system functionality and improved user experience",
    ],
  },
];

// Projects with multiple images
export const PROJECTS = [
  {
    id: "parakeet",
    title: "Parakeet - Communication Platform for the Incarcerated",
    description: "A compassionate communication platform designed to help incarcerated individuals stay connected with their loved ones. It offers real-time messaging and select AI-powered features to support meaningful conversations and emotional connection. The system emphasizes accessibility, privacy, and ease of use—bridging the gap between confinement and the outside world through thoughtful design and scalable architecture.",
    images: [
      require("../assets/images/projects/parakeet.png"),
    ],
    technologies: ["React", "Next.js", "Claude API", "WebSockets"],
    link: "",
  },
  {
    id: "aifilter",
    title: "AIFilter – Semantic Email Filtering with AI",
    description: "A next-generation email filtering system that replaces rigid syntax rules with semantic intelligence. It understands the meaning behind messages to classify and route emails more accurately. Whether it's payment notifications or nuanced alerts, AIFilter adapts to context, sender variation, and phrasing—offering smarter automation for modern inboxes. Built for scalability and clarity, it showcases how AI can transform traditional workflows into intelligent systems.",
    images: [
      require("../assets/images/projects/aifilter.png"),
    ],
    technologies: ["ExpressJS", "React", "TailwindCSS", "TypeScript", "ChatGPT","Webhooks"],
    link: "https://aifilter.email",
  },
  {
    id: "jabberwokcy",
    title: "Jabberwocky – Real-Time Multilingual ChatBot for Twitch",
    description: "A real-time AI-powered chatbot designed to bridge language barriers in live Twitch streams. It listens to chat events, translates messages on the fly, and responds with natural, localized replies—enhancing accessibility and engagement for global audiences. The bot provides contextual understanding for accurate multilingual output, making streams more inclusive for international viewers.",
    images: [
      require("../assets/images/projects/jabberwocky.png"),
    ],
    technologies: ["ExpressJS", "OpenAI - ChatGPT", "Webhooks", "Google TranslateAPI", "Twitch API"],
    link: "",
  },
  {
    id: "vamp",
    title: "VAMP - Influencer Marketing Platform",
    description: "Full stack influencer marketing platform connecting brands with social media influencers. Features seamless data synchronization with social media platforms, campaign management, and analytics for both brands and content creators.",
    images: [
      require("../assets/images/projects/vamp.png"),
    ],
    technologies: ["Elixir", "Phoenix", "EmberJS", "Instagram API"],
    link: "https://vamp.com",
  },
  {
    id: "pickgoals",
    title: "Pickgoals - Goal Tracking Application",
    description: "Comprehensive goal tracking and management application. Features progress tracking, analytics, and social sharing capabilities to help users stay motivated and achieve their personal and professional objectives.",
    images: [
      require("../assets/images/projects/pg-1.png"),
      require("../assets/images/projects/pg-2.png")
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "",
  },
  {
    id: "cms",
    title: "Casino Management System",
    description: "Full-featured content management system for casino operations. Includes rich text editing, media management, user roles, and SEO optimization tools. Designed for efficiency and scalability in managing complex casino workflows.",
    images: [
      require("../assets/images/projects/cms-2.png"),
      require("../assets/images/projects/cms-1.png"),
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    link: "",
  },
  {
    id: "wallet-app",
    title: "Wallet App - Digital Wallet Solution",
    description: "Modern digital wallet application for secure financial transactions. Integrated with payment gateways for seamless user experience, featuring transaction history, balance management, and secure authentication.",
    images: [
      require("../assets/images/projects/wallet-app.png")
    ],
    technologies: ["React Native", "Expo", "Payment Gateway"],
    link: "",
  },
  {
    id: "expenses",
    title: "Expense Tracker",
    description: "Personal finance management application for tracking expenses and budgets. Features data visualization and export capabilities to help users understand their spending patterns and make informed financial decisions.",
    images: [
      require("../assets/images/projects/expenses.png")
    ],
    technologies: ["React", "Express.js", "Chart.js"],
    link: "",
  },
  {
    id: "freight-calculator",
    title: "Freight Calculator",
    description: "Logistics calculation tool for freight and shipping costs. Integrates multiple carrier APIs for real-time pricing, enabling users to compare rates and choose the most cost-effective shipping options.",
    images: [
      require("../assets/images/projects/freight-calculator.png"),
    ],
    technologies: ["Vue.js", "Laravel", "Carrier APIs"],
    link: "",
  },
];

// Technology Stack
export const TECH_STACK = {
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "Svelte",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Laravel",
    "Phoenix (Elixir)",
  ],
  mobile: [
    "React Native",
    "Expo",
    "Cordova",
    "Ionic",
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "AWS",
    "DigitalOcean",
    "Vercel",
    "GitHub Actions",
    "CircleCI",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
  ],
  aiAndRealtime: [
    "Claude API",
    "ChatGPT",
    "Gemini AI",
    "n8n",
    "Zapier",
    "Socket.IO",
    "WebRTC",
    "WebSockets",
    "BullMQ",
  ],
};

// Testimonials
export const TESTIMONIALS = [
  {
    id: "studio-corsair",
    name: "Jordan Rejaud",
    company: "Studio Corsair's CEO",
    videoUrl: "/videos/jordan-rejaud.mp4",
    thumbnail: "", // Optional: Path to video thumbnail
    quote: "Sam is among the best programmers I’ve hired—any team would be lucky to have him.",
  },
  // Add more testimonials here as they become available
];
