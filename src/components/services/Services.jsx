import './services.scss';
import { ArrowRight } from 'lucide-react';

const serviceList = [
	{
		id: 'serv-1',
		icon: '/assets/png/service1.png',
		title: 'Creative Frontend & Interaction',
		tagline: 'Immersive Web Experiences',
		description: 'We construct responsive web applications with smooth multi-layer parallax scrolling, bespoke physics simulations, and micro-interactions.',
		highlights: ['React & Modern Tooling', 'Fluid Parallax Motion', 'Micro-interactions', 'Performance Optimization']
	},
	{
		id: 'serv-2',
		icon: '/assets/png/service2.png',
		title: 'Brand Identity & Design Systems',
		tagline: 'Distinctive Visual Strategy',
		description: 'From iconic logos to comprehensive design tokens and typographic hierarchy, we sculpt memorable brand personalities that endure.',
		highlights: ['Visual Identity Systems', 'Design Tokens', 'Iconography Sets', 'Packaging & Collateral']
	},
	{
		id: 'serv-3',
		icon: '/assets/png/service3.png',
		title: 'Studio & Pet Photography',
		tagline: 'Editorial Visual Assets',
		description: 'Editorial animal and lifestyle photography, color grading, multi-camera studio shoots, and dynamic image gallery integrations.',
		highlights: ['Studio Lighting', 'Motion Capture', 'Color Grading', 'Asset Optimization']
	},
	{
		id: 'serv-4',
		icon: '/assets/png/service4.png',
		title: 'Digital Product Architecture',
		tagline: 'Robust Technical Foundations',
		description: 'Scalable cloud integrations, clean APIs, resilient state management, and reliable deployment workflows.',
		highlights: ['API Integration', 'State Management', 'Cross-browser Rigor', 'Responsive Frameworks']
	}
];

export default function Services() {
	const scrollToContact = () => {
		const elem = document.getElementById('contact');
		if (elem) elem.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className="services" id="services">
			<div className="section-container">
				<div className="section-header">
					<span className="section-kicker">Our Capabilities</span>
					<h2 className="section-title">What We Bring to Life</h2>
					<p className="section-intro">
						End-to-end digital craftsmanship tailored to ambitious brands, founders, and pet-lifestyle creators.
					</p>
				</div>

				<div className="services-grid">
					{serviceList.map((service, index) => (
						<div key={service.id} className="service-card">
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
										<span className="bullet-dot" />
										<span>{highlight}</span>
									</div>
								))}
							</div>

							<button
								type="button"
								className="service-cta"
								onClick={scrollToContact}
							>
								<span>Inquire for {service.title}</span>
								<ArrowRight size={15} />
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
