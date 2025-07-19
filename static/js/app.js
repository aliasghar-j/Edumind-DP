// React Component for EduMind Interactive Features
const { useState, useEffect } = React;

// Main App Component
function EduMindApp() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="edumind-app">
            {/* Interactive Features */}
            <script>
                {`
                    // Add smooth scrolling to all anchor links
                    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                        anchor.addEventListener('click', function (e) {
                            e.preventDefault();
                            const target = document.querySelector(this.getAttribute('href'));
                            if (target) {
                                target.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        });
                    });

                    // Add navbar background on scroll
                    window.addEventListener('scroll', function() {
                        const navbar = document.querySelector('.navbar');
                        if (window.scrollY > 50) {
                            navbar.classList.add('bg-white', 'shadow');
                        } else {
                            navbar.classList.remove('bg-white', 'shadow');
                        }
                    });

                    // Add animation on scroll
                    const observerOptions = {
                        threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px'
                    };

                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('animate-in');
                            }
                        });
                    }, observerOptions);

                    // Observe all cards for animation
                    document.querySelectorAll('.step-card, .testimonial-card, .feature-card').forEach(card => {
                        observer.observe(card);
                    });
                `}
            </script>
        </div>
    );
}

// Render the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const root = ReactDOM.createRoot(document.body);
    root.render(<EduMindApp />);
}); 