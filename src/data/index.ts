// // src/data/index.ts

// // Navigation Links
// export const navLinks = [
//     { name: 'About', href: '/#about' },
//     { name: 'Projects', href: '/#projects' },
//     { name: 'Experience', href: '/#experience' },
//     { name: 'Coursework', href: '/#coursework' },
//     { name: 'Contact', href: '/#contact' },
// ];

// // Social Links
// export const socialLinks = {
//     github: 'https://github.com/thistooshallpasss',
//     linkedin: 'https://www.linkedin.com/in/harshyadavdev/',
//     email: 'harsh.12925.software@gmail.com',
// };

// // Skills
// export const skills = [
//     'Python', 'C++', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
//     'Flask', 'FastAPI', 'PyTorch', 'LangChain', 'MySQL', 'MongoDB', 'Redis',
//     'Tailwind CSS', 'Git', 'Docker', 'Postman'
// ];

// // PROJECTS
// export const projects = [
//     // --- NEW PROJECT 1 (Top Priority) ---
//     {
//         title: 'Axiom Pulse (Token Intelligence)',
//         slug: 'axiom-pulse',
//         description: 'A master-level token trading dashboard featuring virtualized tables and real-time price visualization.',
//         image: '/images/Main_Dashboard.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/realtime-token-intelligence-platform',
//         technologies: ['Next.js 16', 'Redux Toolkit', 'TanStack Query', 'Recharts', 'Tailwind CSS'],
//         details: [
//             'Developed a high-performance trading dashboard capable of rendering thousands of rows efficiently using windowing/virtualization (TanStack Virtual).',
//             'Implemented complex state management using Redux Toolkit to handle sorting, filtering, and real-time data updates without performance regression.',
//             'Created custom interactive data visualizations, including sparklines for 7-day price history using Recharts and SVG optimizations.',
//             'Utilized Next.js 16 features and React 19 hooks for optimized rendering and improved application performance scores.'
//         ],
//         images: [
//             '/images/Token_Detail_Modal_2.png',
//             '/images/Token_Detail_Modal_1.png',
//             '/images/Status_Tooltip_0.png',
//             '/images/Sorting_Interaction_positive.png',
//             '/images/Sorting_Interaction_negative.png',
//             '/images/MobileView_2.jpeg',
//             '/images/MobileView_1.jpeg',
//             '/images/Main_Dashboard.png',
//             '/images/Lighthouse_Scores_3.png',
//             '/images/Lighthouse_Scores_2.png',
//             '/images/Lighthouse_Scores_1.png',
//             '/images/Hover_Popover.png',
//             '/images/Status_Tooltip_3.png',
//             '/images/Status_Tooltip_2.png',
//             '/images/Status_Tooltip_1.png'
//         ]
//     },

//     // --- NEW PROJECT 2 ---
//     {
//         title: 'MovieEngine Pro (Amazon-Grade Search)',
//         slug: 'movie-engine-pro',
//         description: 'A production-grade search engine featuring fuzzy search, autocomplete, and ML-based recommendations.',
//         image: '/images/search_main_page.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/movie-search-engine',
//         technologies: ['Elasticsearch', 'TypeScript', 'Redis', 'MongoDB', 'Python (ML)', 'Docker'],
//         details: [
//             'Built a high-availability search backend capable of sub-50ms query speeds using Elasticsearch for fuzzy matching and edge-N-gram tokenization for autocomplete.',
//             'Implemented a hybrid recommendation engine using Python (scikit-learn) to calculate TF-IDF and Cosine Similarity vectors, generating content-based movie suggestions.',
//             'Optimized performance by implementing a multi-layer caching strategy with Redis to intercept frequent queries, reducing load on the primary search index.',
//             'Automated the data ingestion pipeline using BullMQ to sync data between MongoDB and Elasticsearch asynchronously.'
//         ],
//         images: [
//             '/images/search_main_page.png',
//             '/images/search_pagination.png',
//             '/images/search_desription.png'
//         ]
//     },

//     // --- NEW PROJECT 3 ---
//     {
//         title: 'Real-Time Meme Coin Aggregator',
//         slug: 'meme-coin-aggregator',
//         description: 'A high-performance backend service aggregating real-time data from DEXs using Redis, BullMQ, and WebSockets.',
//         image: '/images/meme_coin_aggregator_2.png',
//         liveUrl: 'https://meme-aggregator-plum.vercel.app/',
//         githubUrl: 'https://github.com/thistooshallpasss/meme-aggregator',
//         technologies: ['Node.js', 'Fastify', 'Redis', 'BullMQ', 'Socket.io', 'Docker', 'React'],
//         details: [
//             'Designed a robust microservices architecture to aggregate and cache real-time cryptocurrency data from DEXs like DexScreener.',
//             'Implemented a decoupled worker pattern using BullMQ and Redis to handle heavy API fetching tasks asynchronously.',
//             'Built a real-time broadcasting system using Socket.io with a Redis adapter, enabling horizontal scaling.',
//             'Engineered a custom rate-limiting strategy using Bottleneck to adhere to strict third-party API limits.'
//         ],
//         images: [
//             '/images/meme_coin_aggregator.png',
//             '/images/meme_coin_aggregator_2.png'
//         ]
//     },



//     // ---------------- EXISTING PROJECTS (Unchanged) ----------------

//     {
//         title: 'FutureRank',
//         slug: 'future-rank',
//         description: 'A practical tool for prospective engineering students in India to predict college admission chances based on JEE ranks.',
//         image: '/images/project-futurerank.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/FutureRank',
//         technologies: ['Node.js', 'Express', 'EJS', 'MySQL', 'JavaScript'],
//         details: [
//             'FutureRank is a server-side rendered application built with Node.js, Express, and EJS templates.',
//             'It addresses a real-world problem for students by querying a MySQL database of historical admissions data.',
//             'This project showcases skills in back-end development and building practical, data-driven applications.'
//         ],
//         images: [
//             '/images/futurerank-gallery-1.png',
//             '/images/futurerank-gallery-2.png',
//             '/images/futurerank-gallery-3.png',
//             '/images/futurerank-gallery-4.png'
//         ]
//     },

//     {
//         title: 'TalkTrace',
//         slug: 'talk-trace',
//         description: 'A Python-based data analysis tool that ingests WhatsApp chat exports and generates insightful visualizations.',
//         image: '/images/project-talktrace.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/TalkTrace',
//         technologies: ['Python', 'Flask', 'Pandas', 'Matplotlib'],
//         details: [
//             'TalkTrace demonstrates proficiency in data manipulation and visualization using Python.',
//             'Uses a Flask server and Pandas for parsing and analyzing chat data.',
//             'Visualizes insights using Matplotlib with detailed activity charts.'
//         ],
//         images: [
//             '/images/talktrace-gallery-1.png',
//             '/images/talktrace-gallery-2.png',
//             '/images/talktrace-gallery-3.png'
//         ]
//     },

//     {
//         title: 'TypeRush',
//         slug: 'typerush',
//         description: 'An interactive typing speed test app with WPM and accuracy visualized using Recharts.',
//         image: '/images/project-typerush.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/TypeRush',
//         technologies: ['React', 'Recharts', 'Tailwind CSS', 'JavaScript'],
//         details: [
//             'Provides real-time speed and accuracy calculations.',
//             'Features a historical performance chart built with Recharts.'
//         ],
//         images: [
//             '/images/typerush-gallery-1.png',
//             '/images/typerush-gallery-2.png',
//             '/images/typerush-gallery-4.png',
//             '/images/typerush-gallery-5.png',
//             '/images/typerush-gallery-6.png',
//             '/images/typerush-gallery-7.png',
//             '/images/typerush-gallery-8.png',
//             '/images/typerush-gallery-9.png'
//         ]
//     },

//     {
//         title: 'SmartSummarizer',
//         slug: 'smart-summarizer',
//         description: 'A MERN app using OpenAI API to generate intelligent text summaries.',
//         image: '/images/project-smartsummarizer.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/SmartSummarizer',
//         technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
//         details: [
//             'Full-stack app with React frontend and Express backend.',
//             'Backend securely proxies requests to OpenAI.',
//         ],
//         images: [
//             '/images/smartsummarizer-gallery-1.png',
//             '/images/smartsummarizer-gallery-2.png',
//             '/images/smartsummarizer-gallery-3.png'
//         ]
//     },

//     {
//         title: 'Clarity.ai',
//         slug: 'clarity-ai',
//         description: 'An AI-powered summarizer built with Next.js 14.',
//         image: '/images/project-clarity-ai.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/Clarity.ai',
//         technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Rapid API'],
//         details: [
//             'Reduces long articles into concise summaries.',
//             'Uses Redux Toolkit for optimized state management.',
//         ],
//         images: [
//             '/images/clarity-ai-gallery-1.png',
//             '/images/clarity-ai-gallery-2.png'
//         ]
//     },

//     {
//         title: 'House Price Predictor',
//         slug: 'house-price-predictor',
//         description: 'A machine learning project predicting house prices using Linear Regression.',
//         image: '/images/project-houseprice.png',
//         liveUrl: null,
//         githubUrl: 'https://github.com/thistooshallpasss/House_Price_Prediction',
//         technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
//         details: [
//             'End-to-end ML workflow using Pandas and Scikit-learn.',
//             'Includes data cleaning, EDA, and regression modeling.',
//         ],
//         images: [
//             '/images/houseprice-gallery-1.png',
//             '/images/houseprice-gallery-2.png'
//         ]
//     },
// ];

// // Experience
// export const experiences = [
//     {
//         company: 'IIIT Allahabad',
//         role: 'AI Research Intern',
//         period: 'Summer 2024',
//         description: [
//             'Worked on Deep Learning model attribution and intellectual property protection.',
//             'Implemented SHAP for PyTorch models.',
//         ],
//     },
// ];

// // Coursework
// export const coursework = [
//     'Data Structures & Algorithms',
//     'Object-Oriented Programming',
//     'Database Management Systems',
//     'Operating Systems',
//     'Computer Networks',
//     'Probabilistic Machine Learning and Graphical Model',
//     'Artificial Intelligence',
//     'Deep Learning',
//     'Network And Cyber Security',
// ];



// src/data/index.ts

// Navigation Links
export const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Coursework', href: '/#coursework' },
    { name: 'Contact', href: `mailto:harsh.12925.software@gmail.com` },
];

// Social Links
export const socialLinks = {
    github: 'https://github.com/thistooshallpasss',
    linkedin: 'https://www.linkedin.com/in/harshyadavdev/',
    email: 'harsh.12925.software@gmail.com',
};

// Skills (updated)
export const skills = [
    'Python', 'C++', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Flask', 'FastAPI', 'PyTorch', 'LangChain', 'MySQL', 'MongoDB', 'Redis',
    'Elasticsearch', 'Docker', 'Kubernetes', 'WebSockets'
];

// Coursework (updated)
export const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'DBMS & SQL',
    'Operating Systems',
    'Computer Networks',
    'Machine Learning & Deep Learning (PyTorch)',
    'Probabilistic ML & Graphical Models',
    'Cyber Security & Cryptography',
    'Parallel and Distribution Computing',
];

// Default Video URL
const DEFAULT_VIDEO_URL = "https://www.youtube.com/embed/n3mR_y6Ww8E";


// ---------------------------------------------------------
// PROJECTS (MERGED & FIXED) — *FIRST 3 PROJECTS PRESERVED*
// ---------------------------------------------------------

export const projects = [

    // -----------------------------------------------------
    // PROJECT 1 — Axiom Pulse
    // Preserve ORIGINAL image list + ORIGINAL GitHub link
    // -----------------------------------------------------
    {
        title: 'Axiom Pulse (Token Intelligence)',
        slug: 'axiom-pulse',
        description: 'A master-level token trading dashboard featuring virtualized tables and real-time price visualization.',
        image: '/images/Main_Dashboard.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/realtime-token-intelligence-platform', // ORIGINAL
        technologies: ['Next.js 16', 'Redux Toolkit', 'TanStack Query', 'Recharts', 'Tailwind CSS'],
        details: [
            'Developed a high-performance trading dashboard capable of rendering thousands of rows efficiently using windowing/virtualization (TanStack Virtual).',
            'Implemented complex state management using Redux Toolkit to handle sorting, filtering, and real-time data updates without performance regression.',
            'Created custom interactive data visualizations, including sparklines for 7-day price history using Recharts and SVG optimizations.',
            'Utilized Next.js 16 features and React 19 hooks for optimized rendering and improved application performance scores.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: [
            '/images/Token_Detail_Modal_2.png',
            '/images/Token_Detail_Modal_1.png',
            '/images/Status_Tooltip_0.png',
            '/images/Sorting_Interaction_positive.png',
            '/images/Sorting_Interaction_negative.png',
            '/images/MobileView_2.jpeg',
            '/images/MobileView_1.jpeg',
            '/images/Main_Dashboard.png',
            '/images/Lighthouse_Scores_3.png',
            '/images/Lighthouse_Scores_2.png',
            '/images/Lighthouse_Scores_1.png',
            '/images/Hover_Popover.png',
            '/images/Status_Tooltip_3.png',
            '/images/Status_Tooltip_2.png',
            '/images/Status_Tooltip_1.png'
        ]
    },

    // -----------------------------------------------------
    // PROJECT 2 — MovieEngine Pro
    // Keep ORIGINAL images + ORIGINAL GitHub link
    // -----------------------------------------------------
    {
        title: 'MovieEngine Pro (Amazon-Grade Search)',
        slug: 'movie-engine-pro',
        description: 'A production-grade search engine featuring fuzzy search, autocomplete, and ML-based recommendations.',
        image: '/images/search_main_page.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/movie-search-engine', // ORIGINAL
        technologies: ['Elasticsearch', 'TypeScript', 'Redis', 'MongoDB', 'Python (ML)', 'Docker'],
        details: [
            'Built a high-availability search backend capable of sub-50ms query speeds using Elasticsearch for fuzzy matching and edge-N-gram tokenization for autocomplete.',
            'Implemented a hybrid recommendation engine using Python (scikit-learn) to calculate TF-IDF and Cosine Similarity vectors.',
            'Optimized performance via multi-layer Redis caching, reducing load on Elasticsearch.',
            'Automated ingestion using BullMQ for async MongoDB → Elasticsearch syncing.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: [
            '/images/search_main_page.png',
            '/images/search_pagination.png',
            '/images/search_desription.png'
        ]
    },

    // -----------------------------------------------------
    // PROJECT 3 — Meme Coin Aggregator
    // Keep ORIGINAL images + ORIGINAL GitHub
    // -----------------------------------------------------
    {
        title: 'Real-Time Meme Coin Aggregator',
        slug: 'meme-coin-aggregator',
        description: 'A high-performance backend service aggregating real-time data from DEXs using Redis, BullMQ, and WebSockets.',
        image: '/images/meme_coin_aggregator_2.png',
        liveUrl: 'https://meme-aggregator-plum.vercel.app/',
        githubUrl: 'https://github.com/thistooshallpasss/meme-aggregator', // ORIGINAL
        technologies: ['Node.js', 'Fastify', 'Redis', 'BullMQ', 'Socket.io', 'Docker', 'React'],
        details: [
            'Designed a robust microservices architecture to aggregate and cache real-time cryptocurrency data from DEXs like DexScreener.',
            'Implemented a decoupled worker pattern using BullMQ and Redis to handle heavy API fetching tasks asynchronously.',
            'Built a real-time broadcasting system using Socket.io with a Redis adapter, enabling horizontal scaling.',
            'Engineered a custom rate-limiting strategy using Bottleneck to adhere to strict API limits.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: [
            '/images/meme_coin_aggregator.png',
            '/images/meme_coin_aggregator_2.png'
        ]
    },

    // -----------------------------------------------------
    // FROM HERE ONWARD → Use NEW UPDATED PROJECTS
    // -----------------------------------------------------

    {
        title: 'AI-Powered Assistant for Visually Impaired',
        slug: 'ai-visual-assistant',
        description: 'A Python-based assistant using Google GenAI APIs for camera-based object localization and text-to-speech.',
        image: '/images/project-ai-assistant.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/AI-Visual-Assistant',
        technologies: ['Python', 'LLMs', 'Google GenAI API', 'Raspberry Pi', 'CV'],
        details: [
            'Integrated LLMs + Google GenAI APIs for real-time TTS and object localization.',
            'Deployed on Raspberry Pi with optimized pipelines for edge usage.',
            'Reduced navigation/identification errors by 35% in real tests.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: ['/images/ai-assistant-1.png', '/images/ai-assistant-2.png']
    },

    {
        title: 'FutureRank (JEE Prediction Portal)',
        slug: 'future-rank',
        description: 'A full-stack portal predicting college admissions based on JEE ranks.',
        image: '/images/project-futurerank.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/FutureRank',
        technologies: ['Node.js', 'Express', 'MySQL', 'Python', 'React.js'],
        details: [
            'Optimized backend APIs and MySQL schema, reducing query latency by 40%.',
            'Enhanced prediction accuracy via synthetic data pipelines.',
            'Built full responsive UI + DB schema.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: ['/images/futurerank-gallery-1.png', '/images/futurerank-gallery-2.png']
    },

    {
        title: 'TalkTrace',
        slug: 'talk-trace',
        description: 'A Python/Flask chat analytics dashboard built with React.js.',
        image: '/images/project-talktrace.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/TalkTrace',
        technologies: ['Python', 'Flask', 'Pandas', 'Recharts', 'React.js'],
        details: [
            'Processed chat exports using Pandas.',
            'Integrated Recharts for dynamic visualization.',
            'Added sentiment analysis and heatmaps.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: ['/images/talktrace-gallery-1.png', '/images/talktrace-gallery-2.png']
    },

    {
        title: 'SmartSummarizer',
        slug: 'smart-summarizer',
        description: 'A MERN app using OpenAI API to generate summaries.',
        image: '/images/project-smartsummarizer.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/SmartSummarizer',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
        details: [
            'React frontend + secure Express backend.',
            'OpenAI proxy layer integrated.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: ['/images/smartsummarizer-gallery-1.png', '/images/smartsummarizer-gallery-2.png']
    },

    {
        title: 'House Price Predictor',
        slug: 'house-price-predictor',
        description: 'A machine learning project predicting house prices using Linear Regression.',
        image: '/images/project-houseprice.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/House_Price_Prediction',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
        details: [
            'Full workflow with data cleaning, EDA, regression.',
            'Model evaluation and visualization included.'
        ],
        videoUrl: DEFAULT_VIDEO_URL,
        images: ['/images/houseprice-gallery-1.png', '/images/houseprice-gallery-2.png']
    },
];


// EXPERIENCE (unchanged)
export const experiences = [
    {
        company: 'IIIT Allahabad',
        role: 'AI Research Intern',
        period: 'Summer 2024',
        description: [
            'Worked on Deep Learning model attribution and intellectual property protection.',
            'Implemented SHAP for PyTorch models.',
        ],
    },
];
