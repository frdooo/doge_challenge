import { useState } from 'react';
import './services.scss';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

const serviceList = [
	{
		id: 'serv-1',
		icon: '/assets/png/service1.png',
		title: 'Creative Frontend & Parallax',
		tagline: 'Immersive Web Experiences',
		description: 'We construct responsive web applications powered by React, smooth multi-layer parallax scrolling, physics simulations, and micro-interactions.',
		highlights: ['React 18 & Vite', 'GPU Acceleration', 'Micro-interactions', 'Sub-second Load Times']
	},
	{
		id: 'serv-2',
		icon: '/assets/png/service2.png',
		title: 'Brand Identity & Design Systems',
		tagline: 'Distinctive Visual Strategy',
		description: 'From iconic logos to comprehensive design tokens and typographic hierarchy, we sculpt memorable brand personalities that resonate.',
		highlights: ['Design Tokens', 'Editorial Layouts', 'Iconography Sets', 'Packaging & Merch']
	},
	{
		id: 'serv-3',
		icon: '/assets/png/service3.png',
		title: 'Pet Photography & Studio Media',
		tagline: 'High-Resolution Visual Assets',
		description: 'Editorial-grade animal and lifestyle photography, color grading, multi-camera studio shoots, and dynamic image gallery integrations.',
		highlights: ['Studio Lighting', 'Motion Capture', 'Color Grading', 'Asset Optimization']
	},
	{
		id: 'serv-4',
		icon: '/assets/png/service4.png',
		title: 'Full-Stack Architecture & Cloud',
		tagline: 'Robust Engineering & APIs',
		description: 'Secure, scalable cloud integrations, REST & GraphQL endpoints, database orchestration, and zero-downtime deployment pipelines.',
		highlights: ['Serverless & Node.js', 'REST & GraphQL', 'State Management', 'High Reliability']
	}
];

export default function Services() {
	const [activeService, setActiveService] = useState(null);

	const scrollToContact = () => {
		const elem = document.getElementById('contact');
		if (elem) elem.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className="services" id="services">
			<div className="section-container">
				<div className="section-header">
					<div className="eyebrow">
						<span className="dot" />
						<span>03 / CAPABILITIES & SERVICES</span>
					</div>
					<h2 className="section-title">What We Bring to Life</h2>
					<div className="accent-bar" />
					<p className="section-intro">
						End-to-end digital craftsmanship tailored to ambitious creators, companies, and pet-enthusiast platforms.
					</p>
				</div>

				<div className="services-grid">
					{serviceList.map((service, index) => (
						<div
							key={service.id}
							className={`service-card ${activeService === index ? 'active' : ''}`}
							onMouseEnter={() => setActiveService(index)}
							onMouseLeave={() => setActiveService(null)}
						>
							<div className="card-top">
								<div className="icon-badge">
									<img src={service.icon} alt={service.title} />
								</div>
								<span className="service-number">0{index + 1}</span>
							</div>

							<div className="tagline">{service.tagline}</div>
							<h3 className="service-title">{service.title}</h3>
							<p className="service-desc">{service.description}</p>

							<div className="highlights-list">
								{service.highlights.map((highlight, hIdx) => (
									<div key={hIdx} className="highlight-item">
										<Check size={14} className="check-icon" />
										<span>{highlight}</span>
									</div>
								))}
							</div>

							<button
								type="button"
								className="service-cta"
								onClick={scrollToContact}
							>
								<span>Request Service</span>
								<ArrowRight size={16} />
							</button>
						</div>
					))}
				</div>

				<div className="custom-banner">
					<div className="banner-content">
						<Sparkles size={24} className="banner-icon" />
						<div>
							<h4>Need a tailor-made bespoke solution or custom pet app?</h4>
							<p>We work collaboratively from initial wireframes to production deployment.</p>
						</div>
					</div>
					<button type="button" className="banner-btn" onClick={scrollToContact}>
						Let's Talk Ideas
					</button>
				</div>
			</div>
		</section>
	);
}
