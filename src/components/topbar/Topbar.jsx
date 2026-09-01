import './topbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Topbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('intro');
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			if (location.pathname === '/') {
				const sections = ['contact', 'client', 'gallery', 'services', 'featured', 'introduction', 'intro'];
				const scrollY = window.scrollY;

				if (scrollY < 200) {
					setActiveSection('intro');
					return;
				}

				for (const sec of sections) {
					const elem = document.getElementById(sec);
					if (elem) {
						const rect = elem.getBoundingClientRect();
						if (rect.top <= 160 && rect.bottom >= 100) {
							setActiveSection(sec);
							break;
						}
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [location.pathname]);

	const scrollToSection = (sectionId) => {
		setMenuOpen(false);
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				const elem = document.getElementById(sectionId);
				if (elem) elem.scrollIntoView({ behavior: 'smooth' });
			}, 150);
		} else {
			const elem = document.getElementById(sectionId);
			if (elem) elem.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
			<div className="wrapper">
				<div className="left">
					<Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						<img src="/assets/logo.png" alt="Doge Agency Logo" className="logo-img" />
					</Link>
				</div>

				<nav className="right" aria-label="Main Navigation">
					<Link className={`link ${location.pathname === '/' && activeSection === 'intro' ? 'active' : ''}`} to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						Home
					</Link>
					<button type="button" className={`link-btn ${location.pathname === '/' && activeSection === 'introduction' ? 'active' : ''}`} onClick={() => scrollToSection('introduction')}>
						Showreel
					</button>
					<button type="button" className={`link-btn ${location.pathname === '/' && activeSection === 'featured' ? 'active' : ''}`} onClick={() => scrollToSection('featured')}>
						Works
					</button>
					<button type="button" className={`link-btn ${location.pathname === '/' && activeSection === 'services' ? 'active' : ''}`} onClick={() => scrollToSection('services')}>
						Services
					</button>
					<button type="button" className={`link-btn ${location.pathname === '/' && activeSection === 'gallery' ? 'active' : ''}`} onClick={() => scrollToSection('gallery')}>
						Gallery
					</button>
					<button type="button" className={`link-btn ${location.pathname === '/' && activeSection === 'client' ? 'active' : ''}`} onClick={() => scrollToSection('client')}>
						Testimonials
					</button>
					<Link className={`link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
						About
					</Link>
					<button type="button" className="contact-cta-btn" onClick={() => scrollToSection('contact')}>
						Contact
						<ArrowUpRight size={16} />
					</button>
				</nav>

				<div className="hamburger" onClick={() => setMenuOpen(true)} role="button" tabIndex={0} aria-label="Open Menu">
					<Menu size={28} color="#ba723d" />
				</div>

				{/* Mobile Menu Backdrop */}
				{menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}

				{/* Mobile Drawer */}
				<div className={`menu ${menuOpen ? 'active' : ''}`}>
					<div className="menu-header">
						<img src="/assets/logo.png" alt="Doge Agency" className="menu-logo" />
						<button className="exit-btn" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
							<X size={26} color="#0d1a20" />
						</button>
					</div>

					<ul className="menu-links">
						<li>
							<Link to="/" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
								Home
							</Link>
						</li>
						<li>
							<span onClick={() => scrollToSection('featured')}>Featured Works</span>
						</li>
						<li>
							<span onClick={() => scrollToSection('services')}>Our Services</span>
						</li>
						<li>
							<span onClick={() => scrollToSection('gallery')}>Animal Gallery</span>
						</li>
						<li>
							<span onClick={() => scrollToSection('client')}>Testimonials</span>
						</li>
						<li>
							<Link to="/about" onClick={() => setMenuOpen(false)}>
								About Doge Agency
							</Link>
						</li>
						<li>
							<span className="contact-link" onClick={() => scrollToSection('contact')}>
								Get in Touch →
							</span>
						</li>
					</ul>

					<div className="social">
						<a href="#contact" title="Contact Us" onClick={() => { setMenuOpen(false); scrollToSection('contact'); }}>
							<img src="/assets/svg/wechatsmall.svg" alt="Contact" />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
							<img src="/assets/svg/linkedinsmall.svg" alt="LinkedIn" />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
