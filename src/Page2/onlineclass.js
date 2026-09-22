import React, { useState } from 'react';
import '../Page2/css/online.css'
import classData from '../data/classscheduledata';

const ClassCard = ({ cls, joinClass }) => (

    <div className="class-card ">
        <h3 className="class-title">{cls.title}</h3>
        <p className="class-instructor">Instructor: {cls.instructor}</p>
        <div className="class-details mt-">
            <div className="detail-item fw-bold">Time: {cls.time}</div>
        </div>
        <button className="join-button" onClick={() => joinClass(cls.link, cls.title)}>Join Class</button>
    </div>
);

export default function OnlineClass() {
    const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
    const [filteredClasses, setFilteredClasses] = useState(classData);

    const joinClass = (link, className) => {
        if (window.confirm(`Join "${className}"?\n\nThis will open the class link in a new window.`)) {
            window.open(link, '_blank');
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = classData.filter(cls =>
            cls.title.toLowerCase().includes(searchTerm) ||
            cls.instructor.toLowerCase().includes(searchTerm) ||
            cls.category.toLowerCase().includes(searchTerm) ||
            cls.description.toLowerCase().includes(searchTerm)
        );
        setFilteredClasses(filtered);
    };

    return (
        <div className='container-schedule card'>
            <input type="text" className=' mt-5 mx-auto form-control search-input border border-success' placeholder="Search classes..." onChange={handleSearch} />
            <div className="classes-grid mt-3">
                {filteredClasses.map(cls => (
                    <ClassCard key={cls.id} cls={cls} joinClass={joinClass} />
                ))}
            </div>
        </div>
    );
}