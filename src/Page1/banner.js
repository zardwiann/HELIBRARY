import { Link } from 'react-router-dom';
import '../Page1/css/banner.css';
import Categories from './categories';
import Footer from './footer';

function Banner() {
    return (
        <section>
            <div class="hero-banner1">
                <div class="floating-elements">
                    <i class="fas fa-book floating-book"></i>
                    <i class="fas fa-graduation-cap floating-book"></i>
                    <i class="fas fa-laptop-code floating-book"></i>
                    <i class="fas fa-lightbulb floating-book"></i>
                </div>

                <div class="particles" id="particles"></div>

                <div class="container">
                    <div class="row align-items-center min-vh-100">
                        <div class="col-lg-6 order-lg-1 order-2">
                            <div class="hero-content animate-slide-right">
                                <h1 className="hero-title">
                                    HELPING HANDS COLLEGE{" "}
                                    <span
                                        style={{
                                            background: "linear-gradient(135deg, #10b981, #34d399)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        Digital Library
                                    </span>
                                </h1>
                                <p class="hero-subtitle">
                                    Dive into a handpicked collection of free ebooks covering programming,
                                    web development, networking, and other tech topics.
                                    Whether you're a student, a professional, or just curious, our library
                                    is here to support your learning. Download and read anytime, anywhere.
                                </p>
                                <div class="cta-buttons animate-slide-up">
                                    <Link to="/library" class="btn-primary-custom">
                                        <i class="fas fa-rocket"></i>
                                        Browse Library
                                    </Link>
                                    <a href="/library" class="btn-secondary-custom">
                                        <i class="fas fa-play"></i>
                                        Start Reading
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                            <div class="hero-image animate-fade-in">
                                <div class="book-mockup">
                                    <div class="book-cover">
                                        <i class="fas fa-code book-icon"></i>
                                        <div class="book-title">Jentra E- Library<br />Collection</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Categories />
            <Footer />
        </section>



    );
}

export default Banner;
