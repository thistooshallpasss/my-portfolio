// src/data/index.ts

// Navigation Links
export const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Coursework', href: '/#coursework' },
    { name: 'Contact', href: '/#contact' },
];

// Social Links
export const socialLinks = {
    github: 'https://github.com/thistooshallpasss',
    linkedin: 'https://www.linkedin.com/in/harshyadavdev/',
    email: 'harsh.12925.software@gmail.com',
};

// Skills
export const skills = [
    'Python', 'C++', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Flask', 'FastAPI', 'PyTorch', 'LangChain', 'MySQL', 'MongoDB', 'Redis',
    'Tailwind CSS', 'Git', 'Docker', 'Postman'
];

// PROJECTS
export const projects = [
    // --- NEW PROJECT 1 (Top Priority) ---
    {
        title: 'Axiom Pulse (Token Intelligence)',
        slug: 'axiom-pulse',
        description: 'A master-level token trading dashboard featuring virtualized tables and real-time price visualization.',
        image: '/images/Main_Dashboard.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/realtime-token-intelligence-platform',
        technologies: ['Next.js 16', 'Redux Toolkit', 'TanStack Query', 'Recharts', 'Tailwind CSS'],
        details: [
            'Developed a high-performance trading dashboard capable of rendering thousands of rows efficiently using windowing/virtualization (TanStack Virtual).',
            'Implemented complex state management using Redux Toolkit to handle sorting, filtering, and real-time data updates without performance regression.',
            'Created custom interactive data visualizations, including sparklines for 7-day price history using Recharts and SVG optimizations.',
            'Utilized Next.js 16 features and React 19 hooks for optimized rendering and improved application performance scores.'
        ],
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

    // --- NEW PROJECT 2 ---
    {
        title: 'MovieEngine Pro (Amazon-Grade Search)',
        slug: 'movie-engine-pro',
        description: 'A production-grade search engine featuring fuzzy search, autocomplete, and ML-based recommendations.',
        image: '/images/search_pagination.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/movie-search-engine',
        technologies: ['Elasticsearch', 'TypeScript', 'Redis', 'MongoDB', 'Python (ML)', 'Docker'],
        details: [
            'Built a high-availability search backend capable of sub-50ms query speeds using Elasticsearch for fuzzy matching and edge-N-gram tokenization for autocomplete.',
            'Implemented a hybrid recommendation engine using Python (scikit-learn) to calculate TF-IDF and Cosine Similarity vectors, generating content-based movie suggestions.',
            'Optimized performance by implementing a multi-layer caching strategy with Redis to intercept frequent queries, reducing load on the primary search index.',
            'Automated the data ingestion pipeline using BullMQ to sync data between MongoDB and Elasticsearch asynchronously.'
        ],
        images: [
            '/images/search_main_page.png',
            '/images/search_pagination.png',
            '/images/search_desription.png'
        ]
    },

    // --- NEW PROJECT 3 ---
    {
        title: 'Real-Time Meme Coin Aggregator',
        slug: 'meme-coin-aggregator',
        description: 'A high-performance backend service aggregating real-time data from DEXs using Redis, BullMQ, and WebSockets.',
        image: '/images/meme_coin_aggregator_2.png',
        liveUrl: 'https://meme-aggregator-plum.vercel.app/',
        githubUrl: 'https://github.com/thistooshallpasss/meme-aggregator',
        technologies: ['Node.js', 'Fastify', 'Redis', 'BullMQ', 'Socket.io', 'Docker', 'React'],
        details: [
            'Designed a robust microservices architecture to aggregate and cache real-time cryptocurrency data from DEXs like DexScreener.',
            'Implemented a decoupled worker pattern using BullMQ and Redis to handle heavy API fetching tasks asynchronously.',
            'Built a real-time broadcasting system using Socket.io with a Redis adapter, enabling horizontal scaling.',
            'Engineered a custom rate-limiting strategy using Bottleneck to adhere to strict third-party API limits.'
        ],
        images: [
            '/images/meme_coin_aggregator.png',
            '/images/meme_coin_aggregator_2.png'
        ]
    },



    // ---------------- EXISTING PROJECTS (Unchanged) ----------------

    {
        title: 'FutureRank',
        slug: 'future-rank',
        description: 'A practical tool for prospective engineering students in India to predict college admission chances based on JEE ranks.',
        image: '/images/project-futurerank.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/FutureRank',
        technologies: ['Node.js', 'Express', 'EJS', 'MySQL', 'JavaScript'],
        details: [
            'FutureRank is a server-side rendered application built with Node.js, Express, and EJS templates.',
            'It addresses a real-world problem for students by querying a MySQL database of historical admissions data.',
            'This project showcases skills in back-end development and building practical, data-driven applications.'
        ],
        images: [
            '/images/futurerank-gallery-1.png',
            '/images/futurerank-gallery-2.png',
            '/images/futurerank-gallery-3.png',
            '/images/futurerank-gallery-4.png'
        ]
    },

    {
        title: 'TalkTrace',
        slug: 'talk-trace',
        description: 'A Python-based data analysis tool that ingests WhatsApp chat exports and generates insightful visualizations.',
        image: '/images/project-talktrace.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/TalkTrace',
        technologies: ['Python', 'Flask', 'Pandas', 'Matplotlib'],
        details: [
            'TalkTrace demonstrates proficiency in data manipulation and visualization using Python.',
            'Uses a Flask server and Pandas for parsing and analyzing chat data.',
            'Visualizes insights using Matplotlib with detailed activity charts.'
        ],
        images: [
            '/images/talktrace-gallery-1.png',
            '/images/talktrace-gallery-2.png',
            '/images/talktrace-gallery-3.png'
        ]
    },

    {
        title: 'TypeRush',
        slug: 'typerush',
        description: 'An interactive typing speed test app with WPM and accuracy visualized using Recharts.',
        image: '/images/project-typerush.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/TypeRush',
        technologies: ['React', 'Recharts', 'Tailwind CSS', 'JavaScript'],
        details: [
            'Provides real-time speed and accuracy calculations.',
            'Features a historical performance chart built with Recharts.'
        ],
        images: [
            '/images/typerush-gallery-1.png',
            '/images/typerush-gallery-2.png',
            '/images/typerush-gallery-4.png',
            '/images/typerush-gallery-5.png',
            '/images/typerush-gallery-6.png',
            '/images/typerush-gallery-7.png',
            '/images/typerush-gallery-8.png',
            '/images/typerush-gallery-9.png'
        ]
    },

    {
        title: 'SmartSummarizer',
        slug: 'smart-summarizer',
        description: 'A MERN app using OpenAI API to generate intelligent text summaries.',
        image: '/images/project-smartsummarizer.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/SmartSummarizer',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
        details: [
            'Full-stack app with React frontend and Express backend.',
            'Backend securely proxies requests to OpenAI.',
        ],
        images: [
            '/images/smartsummarizer-gallery-1.png',
            '/images/smartsummarizer-gallery-2.png',
            '/images/smartsummarizer-gallery-3.png'
        ]
    },

    {
        title: 'Clarity.ai',
        slug: 'clarity-ai',
        description: 'An AI-powered summarizer built with Next.js 14.',
        image: '/images/project-clarity-ai.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/Clarity.ai',
        technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Rapid API'],
        details: [
            'Reduces long articles into concise summaries.',
            'Uses Redux Toolkit for optimized state management.',
        ],
        images: [
            '/images/clarity-ai-gallery-1.png',
            '/images/clarity-ai-gallery-2.png'
        ]
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
            'End-to-end ML workflow using Pandas and Scikit-learn.',
            'Includes data cleaning, EDA, and regression modeling.',
        ],
        images: [
            '/images/houseprice-gallery-1.png',
            '/images/houseprice-gallery-2.png'
        ]
    },
];

// Experience
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

// Coursework
export const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Probabilistic Machine Learning and Graphical Model',
    'Artificial Intelligence',
    'Deep Learning',
    'Network And Cyber Security',
];
