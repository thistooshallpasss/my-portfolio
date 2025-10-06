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
    email: 'harsh.12925.software@gmail.com', // Your email
};



// Skills
export const skills = [
    'Python', 'C++', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Flask', 'FastAPI', 'PyTorch', 'LangChain', 'MySQL', 'MongoDB', 'Redis',
    'Tailwind CSS', 'Git', 'Docker', 'Postman'
];


export const projects = [
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
            'It addresses a real-world problem for students by querying a MySQL database of historical admissions data to provide relevant predictions.',
            'This project showcases skills in back-end development, database management, and building practical, data-driven web applications.',
        ],
        images: [
            '/images/futurerank-gallery-1.png',
            '/images/futurerank-gallery-2.png',
            '/images/futurerank-gallery-3.png',
            '/images/futurerank-gallery-4.png',
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
            'TalkTrace demonstrates proficiency in data manipulation and visualization using Python\'s powerful data science libraries.',
            'The application uses a Flask web server to provide a simple UI for file uploads. The back-end then uses the Pandas library to parse, clean, and analyze the chat data.',
            'Insights such as the most active users, message counts, and common words are visualized using Matplotlib and presented back to the user.',
        ],
        images: [
            '/images/talktrace-gallery-1.png',
            '/images/talktrace-gallery-2.png',
            '/images/talktrace-gallery-3.png',
        ]
    },
    {
        title: 'TypeRush',
        slug: 'typerush',
        description: 'An interactive typing speed test application that measures WPM and accuracy, with results visualized using Recharts.',
        image: '/images/project-typerush.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/TypeRush',
        technologies: ['React', 'Recharts', 'Tailwind CSS', 'JavaScript'],
        details: [
            'TypeRush provides a real-time, engaging experience for users looking to improve their typing speed and accuracy.',
            'It calculates Words Per Minute (WPM) and accuracy on the fly, giving instant feedback.',
            'A key feature is the historical performance chart, built with Recharts, which visualizes the user\'s progress over their last 10 attempts, encouraging improvement.',
        ],
        images: [
            '/images/typerush-gallery-1.png',
            '/images/typerush-gallery-2.png',
            // '/images/typerush-gallery-3.png',
            '/images/typerush-gallery-4.png',
            '/images/typerush-gallery-5.png',
            '/images/typerush-gallery-6.png',
            '/images/typerush-gallery-7.png',
            '/images/typerush-gallery-8.png',
            '/images/typerush-gallery-9.png',
        ]
    },

    {
        title: 'SmartSummarizer',
        slug: 'smart-summarizer',
        description: 'A full-stack MERN application that uses the OpenAI API to generate summaries of user-provided text.',
        image: '/images/project-smartsummarizer.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/SmartSummarizer',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
        details: [
            'This project demonstrates a full-stack architecture, with a React front-end for user interaction and a Node.js/Express back-end to handle business logic.',
            'The back-end serves as a secure proxy to the OpenAI API, protecting API keys and managing requests.',
            'While currently focused on summarization, its MERN stack foundation with MongoDB allows for future scalability, such as user accounts and saved history.',
        ],
        images: [
            '/images/smartsummarizer-gallery-1.png',
            '/images/smartsummarizer-gallery-2.png',
            '/images/smartsummarizer-gallery-3.png',
        ]
    },

    {
        title: 'Clarity.ai',
        slug: 'clarity-ai',
        description: 'An AI-powered text summarization tool built with Next.js 14, leveraging NLP to condense long articles.',
        image: '/images/project-clarity-ai.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/Clarity.ai',
        technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Rapid API'],
        details: [
            'Clarity.ai was developed to solve the problem of information overload by providing quick, concise summaries of lengthy text.',
            'The application features a clean, intuitive user interface built with modern front-end practices. State management is handled efficiently by Redux Toolkit, ensuring a responsive and seamless user experience.',
            'The core summarization logic is powered by an external NLP API, integrated securely on the back-end to handle text processing.',
        ],
        images: [
            '/images/clarity-ai-gallery-1.png',
            '/images/clarity-ai-gallery-2.png',
        ]
    },



    {
        title: 'House Price Predictor',
        slug: 'house-price-predictor',
        description: 'A foundational machine learning project that predicts house prices using a Linear Regression model.',
        image: '/images/project-houseprice.png',
        liveUrl: null,
        githubUrl: 'https://github.com/thistooshallpasss/House_Price_Prediction',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
        details: [
            'This project covers the end-to-end workflow of a typical data science task, all documented within a Jupyter Notebook.',
            'It involves loading a dataset with Pandas, performing exploratory data analysis, cleaning and preparing the data for modeling.',
            'A Linear Regression model is trained using Scikit-learn, and its performance is evaluated, showcasing a fundamental understanding of machine learning principles.',
        ],
        images: [
            '/images/houseprice-gallery-1.png',
            '/images/houseprice-gallery-2.png',
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
            'Contributed to research on protecting Intellectual Property Rights for Deep Learning models.',
            'Implemented and analyzed attribution techniques like SHAP on PyTorch models.',
            'Collaborated with a team to publish findings and document the research process.',
        ],
    },
];


// Add Coursework data
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