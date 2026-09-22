import React from 'react';
import './subject.css';
 
import pdficon from '../THUMBNAIL/pdficon.gif';
import pdfFiles from '../data/pdfFiles';

const InformationManagement = () => {
    const books = pdfFiles.filter(
        (book) => book.type === 'INFORMATION MANAGEMENT'
    );

    return (
        <div className="bis-page">
            <div className="container">
                <div className="bis-content">

                    <div className="bis-icon">
                        <i className="bi bi-database"></i>
                    </div>

                    <h1>Information Management</h1>

                    <p>
                        Explore the available e-books and learning
                        resources for Information Management.
                    </p>

                    <div className="bis-divider"></div>

                    <div className="bis-info">

                        <div className="bis-info-card">
                            <i className="bi bi-book"></i>
                            <h3>E-Books</h3>
                            <p>
                                Browse digital books and references
                                related to information and database management.
                            </p>
                        </div>

                        <div className="bis-info-card">
                            <i className="bi bi-database"></i>
                            <h3>Database Management</h3>
                            <p>
                                Access learning resources about databases,
                                database systems, SQL, and data management.
                            </p>
                        </div>

                        <div className="bis-info-card">
                            <i className="bi bi-server"></i>
                            <h3>Information Systems</h3>
                            <p>
                                Learn concepts, technologies, and practices
                                used to manage organizational information systems.
                            </p>
                        </div>

                    </div>

                    <div className="books-section">

                        <h2>Available E-Books</h2>

                        <p className="book-count">
                            {books.length} book(s) available
                        </p>

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
                                                        <i className="bi bi-book me-2"></i>
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

                                <i className="bi bi-book fa-3x mb-3"></i>

                                <h4>No Books Available</h4>

                                <p className="text-muted">
                                    There are currently no books in this category.
                                </p>

                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default InformationManagement;