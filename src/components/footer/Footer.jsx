import { useState } from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

const dogeQuotes = [
	'“Such code. Much performance. Very React 18.”',
	'“To fetch the ball, one must first believe in the fetch API.”',
	'“60 frames per second is the speed of true shibe happiness.”',
	'“In a world full of bugs, be a feature.”',
	'“Clean architecture is good boy architecture.”'
];

export default function Footer() {
	const [quoteIndex, setQuoteIndex] = useState(0);

	const cycleQuote = () => {
		setQuoteIndex((prev) => (prev + 1) % dogeQuotes.length);
	};

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
							Pioneering playful, pixel-perfect frontend engineering, interactive parallax art, and pet-powered digital products.
						</p>

						{/* Interactive Doge Wisdom Generator */}
						<div className="wisdom-card" onClick={cycleQuote} title="Click for new Doge wisdom!">
							<div className="wisdom-header">
								<Sparkles size={14} color="#ba723d" />
								<span>DOGE WISDOM (CLICK TO FETCH)</span>
							</div>
							<p className="wisdom-text">{dogeQuotes[quoteIndex]}</p>
						</div>
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
									Services & Architecture
								</button>
							</li>
							<li>
								<button type="button" onClick={() => scrollToSection('gallery')}>
									Live Animal Gallery
								</button>
							</li>
							<li>
								<button type="button" onClick={() => scrollToSection('client')}>
									Client Testimonials
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
							<li>
								<a href="https://linkedin.com" target="_blank" rel="noreferrer">
									LinkedIn Network
								</a>
							</li>
						</ul>
					</div>

					<div className="newsletter-col">
						<h4>Stay Connected</h4>
						<p>Get the latest news on parallax web experiences and Doge studio releases.</p>
						<div className="social-icons-row">
							<a href="#social-wechat" title="WeChat" onClick={(e) => { e.preventDefault(); alert("WeChat ID: DogeAgency2026"); }}>
								<img src="/assets/svg/wechatsmall.svg" alt="WeChat" />
							</a>
							<a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
								<img src="/assets/svg/linkedinsmall.svg" alt="LinkedIn" />
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="copyright">
						<span>© 2021 – 2026 Doge Creative Agency. Modernized with</span>
						<Heart size={14} fill="#ff4757" color="#ff4757" className="inline-heart" />
						<span>for web excellence.</span>
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
