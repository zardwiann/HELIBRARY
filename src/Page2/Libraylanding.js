
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './library.css';
import categoriesData from '../data/catergoriesdata';

const LandingPageCategory = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = 4;

    const maxIndex = Math.max(
        categoriesData.length - visibleCards,
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
        if (categoriesData.length <= visibleCards) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev >= maxIndex ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [maxIndex]);

    return (
        <div>
          
            <div className="hero-banner1">
                <div className="floating-elements">
                    <i className="fas fa-book floating-book"></i>
                    <i className="fas fa-graduation-cap floating-book"></i>
                    <i className="fas fa-laptop-code floating-book"></i>
                    <i className="fas fa-lightbulb floating-book"></i>
                </div>

                <div className="particles" id="particles"></div>

                <div className="container-fluid">
                    <div className="categories-carousel">

                        <div className="carousel-wrapper">
                            <div
                                className="categories-track"
                                style={{
                                    transform: `translateX(-${currentIndex * 25}%)`
                                }}
                            >
                                {categoriesData.map((cat, index) => (
                                    <div
                                        className="category-slide"
                                        key={cat.id || index}
                                    >
                                        <Link
                                            to={cat.link}
                                            className="text-decoration-none"
                                        >
                                            <div className="hero-image animate-fade-in">
                                                <div className="book-mockup">
                                                    <div className="book-cover">

                                                        <i
                                                            className={`fas ${cat.icon || 'fa-book'} book-icon`}
                                                        ></i>

                                                        <div className="book-title">
                                                            {cat.title}
                                                            <br />
                                                            Ebook Collection
                                                        </div>

                                                        <div className="book-title">
                                                            <br />
                                                            <span>
                                                                Get Started
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {categoriesData.length > visibleCards && (
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
                                    {categoriesData.map((_, index) =>
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
                </div>
            </div>
        </div>
    );
};

export default LandingPageCategory;
