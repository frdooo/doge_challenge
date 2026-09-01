import './footer.scss';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollToSection = (id) => {
		const elem = document.getElementById(id);
		if (elem) {
			elem.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-top">
					<div className="brand-col">
						<img src="/assets/logo.png" alt="Doge Agency" className="footer-logo" />
						<p className="brand-tagline">
							Creative frontend engineering, interactive web applications, and brand identity design.
						</p>
					</div>

					<div className="links-col">
						<h4>Explore</h4>
						<ul>
							<li>
								<button type="button" onClick={() => scrollToSection('introduction')}>
									Showreel & Overview
								</button>
							</li>
							<li>
								<button type="button" onClick={() => scrollToSection('featured')}>
									Selected Works
								</button>
							</li>
							<li>
								<button type="button" onClick={() => scrollToSection('services')}>
									Capabilities
								</button>
							</li>
							<li>
								<button type="button" onClick={() => scrollToSection('gallery')}>
									Studio Gallery
								</button>
							</li>
							<li>
								<button type="button" onClick={() => scrollToSection('client')}>
									Clients
								</button>
							</li>
						</ul>
					</div>

					<div className="links-col">
						<h4>Agency</h4>
						<ul>
							<li>
								<Link to="/about">About Doge Agency</Link>
							</li>
							<li>
								<button type="button" onClick={() => scrollToSection('contact')}>
									Start a Project
								</button>
							</li>
							<li>
								<a href="https://github.com/frdooo/doge_challenge" target="_blank" rel="noreferrer">
									GitHub Repository
								</a>
							</li>
						</ul>
					</div>

					<div className="newsletter-col">
						<h4>Connect</h4>
						<p>Connect with our engineering and design team.</p>
						<div className="social-icons-row">
							<a href="https://github.com/frdooo/doge_challenge" target="_blank" rel="noreferrer" title="GitHub" className="social-link">
								<span>GitHub</span>
							</a>
							<a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="social-link">
								<span>LinkedIn</span>
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="copyright">
						<span>© 2021 – 2026 Doge Creative Agency. All rights reserved.</span>
					</div>

					<button type="button" className="btn-back-top" onClick={scrollToTop} aria-label="Back to Top">
						<span>Back to Top</span>
						<ArrowUp size={16} />
					</button>
				</div>
			</div>
		</footer>
	);
}
