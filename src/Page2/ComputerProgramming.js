import React from 'react';
import './subject.css';
 
import pdficon from '../THUMBNAIL/pdficon.gif';
import pdfFiles from '../data/pdfFiles';

const ComputerProgramming = () => {

   
    const books = pdfFiles.filter(
        (book) => book.type === 'COMPUTER PROGRAMMING'
    );

    return (
        <div className="bis-page">

            <div className="container">

                <div className="bis-content">

                    {/* ICON */}
                    <div className="bis-icon">
                        <i className="bi bi-cpu"></i>
                    </div>

                    {/* TITLE */}
                    <h1>Computer Programming</h1>

                    <p>
                        Explore the available e-books and learning
                        resources for Computer Programming.
                    </p>

                    <div className="bis-divider"></div>

                    {/* INFORMATION CARDS */}
                    <div className="bis-info">

                        <div className="bis-info-card">
                            <i className="bi bi-book"></i>

                            <h3>E-Books</h3>

                            <p>
                                Browse digital books and references
                                related to computer programming.
                            </p>
                        </div>

                        <div className="bis-info-card">
                            <i className="bi bi-laptop"></i>

                            <h3>Learning Resources</h3>

                            <p>
                                Access useful programming materials
                                for your studies and projects.
                            </p>
                        </div>

                        <div className="bis-info-card">
                            <i className="bi bi-code-slash"></i>

                            <h3>Programming</h3>

                            <p>
                                Learn programming concepts, languages,
                                frameworks, and development techniques.
                            </p>
                        </div>

                    </div>

                    {/* BOOKS */}
                    <div className="books-section">

                        <h2>Available E-Books</h2>

                        <p className="book-count">
                            {books.length} book(s) available
                        </p>

                        {books.length > 0 ? (

                            <div className="row g-4">

                                {books.map((book) => (

                                    <div
                                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                                        key={book.id}
                                    >

                                        <div className="card h-100 shadow-sm">

                                            {/* BOOK IMAGE */}
                                            <img
                                                src={book.image || pdficon}
                                                className="card-img-top p-4"
                                                alt={book.name}
                                                style={{
                                                    height: '180px',
                                                    objectFit: 'contain'
                                                }}
                                            />

                                            {/* BOOK DETAILS */}
                                            <div className="card-body d-flex flex-column">

                                                <h5 className="card-title">
                                                    {book.name}
                                                </h5>

                                                <p className="text-muted small">
                                                    Computer Programming
                                                </p>

                                                {/* READ BOOK */}
                                                <a
                                                    href={
                                                        book.id.startsWith('http')
                                                            ? book.id
                                                            : `https://drive.google.com/file/d/${book.id}/view`
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-success mt-auto"
                                                >
                                                    <i className="bi bi-book me-2"></i>
                                                    Read Book
                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        ) : (

                            /* NO BOOKS */
                            <div className="text-center py-5">

                                <i className="bi bi-book fa-3x mb-3"></i>

                                <h4>
                                    No Books Available
                                </h4>

                                <p className="text-muted">
                                    There are currently no books in
                                    this category.
                                </p>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ComputerProgramming;