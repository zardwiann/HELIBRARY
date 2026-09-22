import React from 'react';
import './tutorial.css';

const tutorials = [
    {
        title: 'Computer Fundamentals',
        category: 'Computer Basics',
        description: 'Introduction to computers, hardware, software, operating systems, and basic computer concepts.',
        video: 'Cu3R5it4cQs'
    },
    {
        title: 'HTML Full Course',
        category: 'Web Development',
        description: 'Learn HTML elements, structure, forms, links, images, tables, and semantic markup.',
        video: 'pQN-pnXPaVg'
    },
    {
        title: 'CSS Full Course',
        category: 'Web Development',
        description: 'Learn CSS styling, selectors, layouts, Flexbox, Grid, responsive design, and animations.',
        video: '1Rs2ND1ryYc'
    },
    {
        title: 'JavaScript for Beginners',
        category: 'Programming',
        description: 'Learn JavaScript variables, functions, conditions, loops, objects, arrays, and DOM manipulation.',
        video: 'PkZNo7MFNFg'
    },
    {
        title: 'SQL for Beginners',
        category: 'Database',
        description: 'Learn databases, tables, SELECT statements, INSERT, UPDATE, DELETE, and SQL queries.',
        video: 'HXV3zeQKqGY'
    },
    {
        title: 'OSI Model',
        category: 'Networking',
        description: 'Understand the seven layers of the OSI model and how network communication works.',
        video: 'AYgXr1dynKU'
    },
    {
        title: 'IP Addressing',
        category: 'Networking',
        description: 'Learn IPv4 addressing, network addresses, host addresses, private addresses, and subnetting concepts.',
        video: 'JNNcyZ_VE2A'
    },
    {
        title: 'Introduction to Business Information Systems',
        category: 'Business Information Systems',
        description: 'Learn how information systems support business operations, management, communication, and decision-making.',
        video: 'VIDEO_ID_HERE'
    },
    {
        title: 'Digital Business Fundamentals',
        category: 'Digital Business',
        description: 'Understand digital business models, digital transformation, online services, and technology-driven business processes.',
        video: 'VIDEO_ID_HERE'
    },
    {
        title: 'E-Commerce Fundamentals',
        category: 'Digital Business',
        description: 'Learn the fundamentals of e-commerce, online transactions, digital platforms, customers, and electronic payment systems.',
        video: 'VIDEO_ID_HERE'
    },
    {
        title: 'Business Process Management',
        category: 'Business Information Systems',
        description: 'Learn how organizations analyze, design, improve, and manage business processes using information systems.',
        video: 'VIDEO_ID_HERE'
    },
    {
        title: 'UI/UX Design Fundamentals',
        category: 'UI/UX Design',
        description: 'Learn the basic principles of user interface and user experience design, including layout, usability, and visual design.',
        video: 'c9Wg6Cb_YlU'
    },
    {
        title: 'UI/UX Wireframing and Prototyping',
        category: 'UI/UX Design',
        description: 'Learn how to create wireframes, prototypes, mockups, and user-centered website designs.',
        video: 'c9Wg6Cb_YlU'
    },
    {
        title: 'Data Mining Fundamentals',
        category: 'Data Mining',
        description: 'Learn the basic concepts of data mining, big data, data analysis, patterns, and practical applications.',
        video: 'bz0N-WP2FQE'
    },
    {
        title: 'Data Mining Applications',
        category: 'Data Mining',
        description: 'Explore how data mining techniques are applied to business intelligence, analytics, customer data, and decision-making.',
        video: 'bz0N-WP2FQE'
    },
    {
        title: 'Business Intelligence Fundamentals',
        category: 'Business Intelligence',
        description: 'Learn how organizations use data, reports, dashboards, and analytics to support business decisions.',
        video: 'VIDEO_ID_HERE'
    },
    {
        title: 'Information Systems Analysis',
        category: 'Information Systems',
        description: 'Learn the fundamentals of analyzing business requirements, processes, users, and information system solutions.',
        video: 'VIDEO_ID_HERE'
    },
    {
        id: "1",
        name: "Introduction to Computing",
        search: "INTRODUCTION TO COMPUTING",
        video: "Cu3R5it4cQs"
    },
    {
        id: "2",
        name: "Computer Programming",
        search: "COMPUTER PROGRAMMING",
        video: "PkZNo7MFNFg"
    },
    {
        id: "3",
        name: "Data Structures",
        search: "DATA STRUCTURES AND ALGORITHMS",
        video: "YWnBbNj_G-U"
    },
    {
        id: "4",
        name: "Networking",
        search: "NETWORKING ADMINISTRATION",
        video: "AYgXr1dynKU"
    },
    {
        id: "5",
        name: "Professional Issues",
        search: "PROFESSIONAL ISSUES IN COMPUTING",
        video: ""
    },
    {
        id: "6",
        name: "Information Management",
        search: "INFORMATION MANAGEMENT",
        video: ""
    },
    {
        id: "9",
        name: "Organization Management",
        search: "ORGANIZATION AND MANAGEMENT",
        video: ""
    },
    {
        id: "11",
        name: "Business Process Management",
        search: "BUSINESS PROCESS MANAGEMENT",
        video: ""
    },
    {
        id: "14",
        name: "Customer Relationship Management",
        search: "CUSTOMER RELATIONSHIP MANAGEMENT",
        video: "SlhESAKF1Tk"
    },
    {
        id: "15",
        name: "Enterprise Resource Planning",
        search: "ENTERPRISE RESOURCE PLANNING",
        video: ""
    },
    {
        id: "16",
        name: "Data Mining",
        search: "DATA MINING",
        video: "bz0N-WP2FQE"
    },
    {
        id: "21",
        name: "UI/UX Design",
        search: "UI/UX DESIGNING AND PROTOTYPING",
        video: "c9Wg6Cb_YlU"
    }
];

const Tutorial = () => {
    return (
        <div className="tutorial-page">
            <div className="container">

                <div className="tutorial-header">
                    <h1>
                        <i className="bi bi-play-circle me-2"></i>
                        Computer & IT Tutorials
                    </h1>

                    <p>
                        Explore our collection of computer and information
                        technology tutorials covering fundamental concepts,
                        productivity tools, programming, web development,
                        databases, networking, and cybersecurity.
                    </p>
                </div>

                <div className="tutorial-grid">
                    {tutorials.map((tutorial, index) => (
                        <div className="tutorial-card" key={tutorial.video}>

                            <div className="video-container">
                                <iframe
                                    src={`https://www.youtube.com/embed/${tutorial.video}?rel=0`}
                                    title={tutorial.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="tutorial-info">

                                <div className="tutorial-meta">
                                    <span className="tutorial-number">
                                        Tutorial {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <span className="tutorial-category">
                                        {tutorial.category}
                                    </span>
                                </div>

                                <h3>
                                    {tutorial.title}
                                </h3>

                                <p>
                                    {tutorial.description}
                                </p>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Tutorial;