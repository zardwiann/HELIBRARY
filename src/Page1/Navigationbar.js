
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Page1/css/navigationbar.css';

const NavigationvBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsNavOpen(false);
    }, [location.pathname]);

    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <main>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">

                    {/* Brand */}
                    <Link
                        className="navbar-brand"
                        to="/"
                        onClick={closeNav}
                    >
                        <i className="navbar-brand-icon bi bi-book me-2"></i>
                        <span>J E-Library</span>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNav}
                        aria-controls="navbarNav"
                        aria-expanded={isNavOpen}
                        aria-label={
                            isNavOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation */}
                    <div
                        className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''
                            }`}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ms-lg-auto">

                            {/* Home */}
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/home'
                                            ? 'active'
                                            : ''
                                        }`}
                                    to="/home"
                                    onClick={closeNav}
                                >
                                    <i className="bi bi-house me-1"></i>
                                    Home
                                </Link>
                            </li>

                            {/* e-Book */}
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/library'
                                            ? 'active'
                                            : ''
                                        }`}
                                    to="/library"
                                    onClick={closeNav}
                                >
                                    <i className="bi bi-book me-1"></i>
                                    e-Book
                                </Link>
                            </li>

                            {/* Tutorial */}
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/tutorial'
                                            ? 'active'
                                            : ''
                                        }`}
                                    to="/tutorial"
                                    onClick={closeNav}
                                >
                                    <i className="bi bi-play-circle me-1"></i>
                                    Tutorial
                                </Link>
                            </li>

                            {/* About */}
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/about'
                                            ? 'active'
                                            : ''
                                        }`}
                                    to="/about"
                                    onClick={closeNav}
                                >
                                    <i className="bi bi-info-circle me-1"></i>
                                    About
                                </Link>
                            </li>

                            {/* Facebook */}
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.facebook.com/profile.php?id=61551929171960"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeNav}
                                >
                                    <i className="bi bi-facebook me-1"></i>
                                    Helping Hands College E-Library
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default NavigationvBar;
