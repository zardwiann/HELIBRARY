import '../Page1/css/banner.css';
import '../Page1/css/aboutus.css';
import Footer from './footer';
 
export default function About() {
    return (
        <section>
             
            <div className="hero-banner1">
                <div className="floating-elements">
                    <i className="fas fa-book floating-book"></i>
                    <i className="fas fa-graduation-cap floating-book"></i>
                    <i className="fas fa-laptop-code floating-book"></i>
                    <i className="fas fa-lightbulb floating-book"></i>
                </div>

                <div className="particles" id="particles"></div>

                <div className="container">
                    <div className="row align-items-center min-vh-100">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="hero-content animate-slide-right">
                                <h1 className="hero-title">
                                    What is{" "}
                                    <span
                                        style={{
                                            background: "linear-gradient(135deg, #10b981, #34d399)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        JENTRA E-LIBRARY
                                    </span>
                                </h1>
                                <p className="hero-subtitle">
                                    Jentra E-Library is a simple idea with a big purpose:
                                    To bring free books from all over the world into one open, easy-to-use platform.
                                    We gather eBooks that are open-source, public domain, or freely licensed
                                    and make them available for anyone to download, read, and share. No subscriptions. No paywalls. No limits.
                                    Whether you're a student, a teacher, a curious learner, or someone just looking for a good read, Jentra is here for you.
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                            <div className="hero-image animate-fade-in">
                                <div className="book-mockup">
                                    <div className="book-cover">
                                        <i className="fas fa-code book-icon"></i>
                                        <div className="book-title">Jenta E- Library<br />Collection</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="features-section">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-gift"></i>
                                </div>
                                <h3 class="feature-title">Free means free</h3>
                                <p class="feature-description">
                                    Every book on Jentra is available as a PDF  no sign-ups, no fees, just click and download.
                                    We believe knowledge should be accessible to everyone, everywhere, without barriers.
                                </p>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-globe-americas"></i>
                                </div>
                                <h3 class="feature-title">Books from around the world</h3>
                                <p class="feature-description">
                                    We collect open eBooks in different languages, on all kinds of subjects  from science and
                                    literature to tech, history, and more. Explore diverse perspectives and knowledge.
                                </p>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <h3 class="feature-title">Built by people, for people</h3>
                                <p class="feature-description">
                                    Jentra is an open-source project. That means anyone can help improve it  whether you code,
                                    write, design, or just love books. Join our community of knowledge enthusiasts.
                                </p>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-rocket"></i>
                                </div>
                                <h3 class="feature-title">Simple, clean, and open</h3>
                                <p class="feature-description">
                                    We designed Jentra to be fast, lightweight, and accessible even in places with slow internet.
                                    Clean interface, quick downloads, maximum accessibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}