
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Page1/css/categories.css';
import categoriesData from '../data/catergoriesdata';

const Categories = () => {
    const [filter, setFilter] = useState('all');
    const [search] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = 4;

    const filteredCategories = categoriesData.filter(category =>
        (filter === 'all' || category.tags.includes(filter)) &&
        category.title.toLowerCase().includes(search.toLowerCase())
    );

    const maxIndex = Math.max(
        filteredCategories.length - visibleCards,
        0
    );

    const nextSlide = () => {
        setCurrentIndex(prev =>
            prev >= maxIndex ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prev =>
            prev <= 0 ? maxIndex : prev - 1
        );
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [filter, search]);

    useEffect(() => {
        if (filteredCategories.length <= visibleCards) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev >= maxIndex ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [filteredCategories.length, maxIndex]);

    return (
        <div className="container py-4" id="category">

             

            <div className="header-section text-center">
                <h1 className="display-4 fw-bold mb-3 text-success">
                    <i className="fas fa-book-open me-3 text-success"></i>
                    JENTRA E-Library Categories
                </h1>
            </div>

            <ul className="nav nav-pills justify-content-center flex-wrap filter-tabs">
                {['all'].map(tag => (
                    <li className="nav-item" key={tag}>
                        <button
                            type="button"
                            className={`nav-link ${filter === tag ? 'active' : ''
                                }`}
                            onClick={() => setFilter(tag)}
                        >
                            {tag === 'all'
                                ? 'All Categories'
                                : tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>

            {filteredCategories.length > 0 ? (
                <div className="categories-carousel">

                    <div className="carousel-wrapper">

                        <div
                            className="categories-track"
                            style={{
                                transform: `translateX(-${currentIndex * 25}%)`
                            }}
                        >
                            {filteredCategories.map((cat, index) => (
                                <div
                                    key={cat.id || index}
                                    className="category-slide"
                                >
                                    <Link
                                        to={cat.link}
                                        className="text-decoration-none"
                                    >
                                        <div className="card category-card text-center p-4 h-100 position-relative">

                                            {(cat.tags.includes('new') ||
                                                cat.tags.includes('popular')) && (
                                                    <span className="badge badge-new">
                                                        {cat.tags.includes('new')
                                                            ? 'New'
                                                            : 'Popular'}
                                                    </span>
                                                )}

                                            <div className="category-icon">
                                                <i className={`fas ${cat.icon}`}></i>
                                            </div>

                                            <h5 className="category-title">
                                                {cat.title}
                                            </h5>

                                            <p className="category-count">
                                                {cat.count}
                                            </p>

                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                    </div>

                    {filteredCategories.length > visibleCards && (
                        <div className="carousel-controls">

                            <button
                                type="button"
                                className="carousel-btn"
                                onClick={prevSlide}
                                aria-label="Previous category"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>

                            <div className="carousel-indicators">
                                {filteredCategories.map((_, index) =>
                                    index <= maxIndex ? (
                                        <button
                                            key={index}
                                            type="button"
                                            className={
                                                currentIndex === index
                                                    ? 'indicator active'
                                                    : 'indicator'
                                            }
                                            onClick={() =>
                                                setCurrentIndex(index)
                                            }
                                            aria-label={`Show category ${index + 1}`}
                                        />
                                    ) : null
                                )}
                            </div>

                            <button
                                type="button"
                                className="carousel-btn"
                                onClick={nextSlide}
                                aria-label="Next category"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>

                        </div>
                    )}

                </div>
            ) : (
                <div className="text-center py-5">
                    <i className="fas fa-search fa-2x text-muted mb-3"></i>
                    <h3 className="h5 fw-semibold">
                        No Categories Found
                    </h3>
                    <p className="text-muted mb-0">
                        No library categories match your search criteria.
                    </p>
                </div>
            )}

        </div>
    );
};

export default Categories;

