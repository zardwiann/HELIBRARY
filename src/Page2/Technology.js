
import { useState } from 'react';
import pdfFiles from '../data/pdfFiles';
import '../Page2/css/technology.css'
import technologylisttopic from '../data/technologylistnavigation';

export default function Technology() {
    const [filteredBooks, setFilteredBooks] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("");
    return (
        <section className="ebook-section ">
            <div className="container-fluid px-3 px-md-5 py-4 py-md-5 position-relative shadow-lg rounded-4 mt-3 mt-md-5 card border-0" id="WEB">
                <hr className='text-success'></hr>
                <div className="searchbar mt-5" >
                    <div className="input-group  " style={{ maxWidth: '800px' }}>
                        <select
                            className="form-select search-input border border-success"
                            defaultValue=""
                            style={{
                                padding: "0.5rem 1rem",
                                borderRadius: "0.5rem",
                                fontSize: "1rem",
                            }}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option value="" disabled hidden>
                                Select Technology Topic ...
                            </option>
                            {technologylisttopic.map((file) => (
                                <option key={file.search} value={file.search}>
                                    {file.name}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            className="form-control search-input border border-success"
                            placeholder="Search categories or books..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn search-btn" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <h1 className='mb-2 mt-3 mt-md-5 text-center text-md-start'>
                    Technology
                </h1>
                <hr className='text-success'></hr>
                <div className="row g-2 g-md-3 p-2 p-md-5 justify-content-center justify-content-md-start  mt-3 bookslist" style={{ maxHeight: "900px", overflowY: "auto" }}>
                    {pdfFiles
                        .filter((file) => {
                            const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
                            const matchesType = selectedType === "" || file.type === selectedType;
                            return matchesSearch && matchesType;
                        })
                        .map((file) => (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={file.id}>
                                <div className="card h-100 border border-success shadow-sm rounded-3 cardbooks">
                                    <img
                                        src={file.image}
                                        className="card-img-top rounded-top-3"
                                        style={{
                                            height: '120px',
                                            objectFit: 'cover'
                                        }}
                                        alt={file.name}
                                    />
                                    <div className="card-body px-2 py-2 d-flex flex-column">
                                        <div className="mb-1 text-warning" style={{ fontSize: '0.7rem' }}>
                                            ★★★★☆
                                        </div>
                                        <h6
                                            className="card-title fw-semibold mb-2 flex-grow-1"
                                            title={file.name}
                                            style={{
                                                fontSize: '0.75rem',
                                                lineHeight: '1.2',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {file.name}
                                        </h6>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 text-center py-2 mt-auto">
                                        <a
                                            href={`https://drive.google.com/file/d/${file.id}/preview`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-success w-100 rounded-pill"
                                            style={{ fontSize: '0.7rem' }}
                                        >
                                            View PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </section>
    )
}