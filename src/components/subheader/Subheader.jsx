import { useEffect, useState } from 'react';
import './subheader.scss';
import { ArrowRight } from 'lucide-react';

const navItems = [
	{ id: 'introduction', label: '01. Overview' },
	{ id: 'featured', label: '02. Featured Works' },
	{ id: 'services', label: '03. Services' },
	{ id: 'gallery', label: '04. Animal Gallery' },
	{ id: 'client', label: '05. Testimonials' },
	{ id: 'contact', label: '06. Contact' }
];

export default function Subheader() {
	const [activeSection, setActiveSection] = useState('introduction');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 200;

			for (let i = navItems.length - 1; i >= 0; i--) {
				const item = navItems[i];
				const elem = document.getElementById(item.id);
				if (elem && elem.offsetTop <= scrollPosition) {
					setActiveSection(item.id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollTo = (id) => {
		const elem = document.getElementById(id);
		if (elem) {
			elem.scrollIntoView({ behavior: 'smooth' });
			setActiveSection(id);
		}
	};

	return (
		<nav className="subheader" aria-label="Page Sections Sub-navigation">
			<div className="wrapper">
				<div className="menu-scroll">
					<div className="menu-list">
						{navItems.map((item) => (
							<button
								key={item.id}
								type="button"
								className={`nav-tab ${activeSection === item.id ? 'active' : ''}`}
								onClick={() => scrollTo(item.id)}
							>
								<span>{item.label}</span>
							</button>
						))}
					</div>
				</div>

				<div className="action-wrap">
					<button
						type="button"
						className="cta-button"
						onClick={() => scrollTo('contact')}
					>
						<span>Start a Project</span>
						<ArrowRight size={16} />
					</button>
				</div>
			</div>
		</nav>
	);
}
