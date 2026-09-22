import React from 'react';
import { useLocation } from 'react-router-dom';
import './books.css';
import categoriesData from '../data/catergoriesdata';
import pdficon from '../THUMBNAIL/pdficon.gif';
import pdfFiles from './pdfFiles';
 
const CategoryBooks = () => {
    const location = useLocation();

    const currentCategory = categoriesData.find(
        category => category.link === location.pathname
    );

    const books = currentCategory
        ? pdfFiles.filter(
            book =>
                book.type?.trim().toUpperCase() ===
                currentCategory.count?.trim().toUpperCase()
        )
        : [];

    return (
        <div className="category-books-page">
            <div className="container py-5">

                {/* CATEGORY HEADER */}
                <div className="category-header mb-4">
                    <h2>
                        {currentCategory?.title || 'Category'}
                    </h2>

                    <p className="text-muted">
                        {books.length} book(s) available
                    </p>
                </div>

                {/* BOOK LIST */}
                {books.length > 0 ? (
                    <div className="books-scroll-container">
                        <div className="row g-4">

                            {books.map((book) => (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                                    key={book.id}
                                >
                                    <div className="card book-card h-100 shadow-sm">

                                        <img
                                            src={book.image || pdficon}
                                            className="card-img-top book-image p-4"
                                            alt={book.name}
                                        />

                                        <div className="card-body d-flex flex-column">

                                            <h5 className="card-title book-title">
                                                {book.name}
                                            </h5>

                                            <p className="text-muted small book-type">
                                                {book.type}
                                            </p>

                                            <a
                                                href={
                                                    book.id.startsWith('http')
                                                        ? book.id
                                                        : `https://drive.google.com/file/d/${book.id}/view`
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-success w-100 mt-auto"
                                            >
                                                <i className="fas fa-book me-2"></i>
                                                Read Book
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5">

                        <i className="fas fa-book fa-3x mb-3"></i>

                        <h4>No Books Available</h4>

                        <p className="text-muted">
                            There are currently no books in this category.
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
};

export default CategoryBooks;