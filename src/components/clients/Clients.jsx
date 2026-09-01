import { useState } from 'react';
import './clients.scss';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
	{
		id: 'test-1',
		quote: 'Doge Agency delivered beyond our wildest zoomies! The site is so snappy that even my human couldn’t look away from the screen. 14/10 would bark at this interactive design again.',
		name: 'Barnaby Von Woof',
		species: '🐕 Golden Retriever',
		role: 'Chief Happiness Officer & Tennis Ball QA',
		company: 'Fetch & Co.',
		avatar: '/assets/img1.jpg'
	},
	{
		id: 'test-2',
		quote: 'I usually knock things off the desk out of spite, but this agency’s UX design left me completely mesmerized. Zero friction, impeccable taste, and purr-worthy responsiveness.',
		name: 'Lord Fluffington III',
		species: '🐈 Persian Cat',
		role: 'Senior Creative Critic & Nap Architect',
		company: 'Purrfect Pixel Labs',
		avatar: '/assets/img2.jpg'
	},
	{
		id: 'test-3',
		quote: 'Everything just quacked into place! Their frontend animations glide like freshly preened feathers across calm waters. Truly majestic web craftsmanship.',
		name: 'Professor Quackers',
		species: '🦆 Executive Mallard',
		role: 'VP of Streamlining & Splash Strategy',
		company: 'Pond & Ripple Ventures',
		avatar: '/assets/parallax/duckpeluche.png'
	},
	{
		id: 'test-4',
		quote: 'Maximum chill vibes. No stressful bugs, no heated arguments. Doge Agency handled our entire brand rollout with supreme composure and effortless flow.',
		name: 'Capy "Chill" Rodriguez',
		species: '🦫 Capybara',
		role: 'Chief Zen Officer',
		company: 'Zen Herbivores Ltd.',
		avatar: '/assets/img3.jpg'
	},
	{
		id: 'test-5',
		quote: 'Whoo knew web design could be this sharp? I inspected the source code at 3 AM with 360-degree vision and couldn’t spot a single bug. Truly wise engineering.',
		name: 'Sir Reginald Hoot',
		species: '🦉 Barred Owl',
		role: 'Night Shift Tech Lead & Code Inspector',
		company: 'Nocturnal Intelligence',
		avatar: '/assets/bigdoge.png'
	}
];

const clientLogos = [
	{ id: 'logo-1', img: '/assets/client1.png', alt: 'Client Partner 1' },
	{ id: 'logo-2', img: '/assets/client2.png', alt: 'Client Partner 2' },
	{ id: 'logo-3', img: '/assets/client3.png', alt: 'Client Partner 3' },
	{ id: 'logo-4', img: '/assets/client4.png', alt: 'Client Partner 4' },
	{ id: 'logo-5', img: '/assets/client5.png', alt: 'Client Partner 5' },
	{ id: 'logo-6', img: '/assets/client6.png', alt: 'Client Partner 6' }
];

export default function Clients() {
	const [activeSlide, setActiveSlide] = useState(0);

	const handlePrev = () => {
		setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className="clients" id="client">
			<div className="section-container">
				{/* Section Header */}
				<div className="section-header">
					<span className="section-kicker">Endorsements & Partners</span>
					<h2 className="section-title">Client Feedback</h2>
				</div>

				{/* Testimonial Stage */}
				<div className="testimonial-card-wrap">
					<Quote size={54} color="#ba723d" className="quote-mark" />

					<div className="carousel-stage">
						<div
							className="testimonials-track"
							style={{ transform: `translateX(-${activeSlide * 100}%)` }}
						>
							{testimonials.map((item) => (
								<div key={item.id} className="testimonial-slide">
									<div className="slide-content">
										<p className="quote-text">"{item.quote}"</p>

										<div className="author-row">
											<img
												src={item.avatar}
												alt={item.name}
												className="author-avatar"
												onError={(e) => {
													e.currentTarget.src = '/assets/bigdoge.png';
												}}
											/>
											<div className="author-meta">
												<div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
													<span className="author-name">{item.name}</span>
													{item.species && (
														<span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: 'rgba(186, 114, 61, 0.14)', color: '#ba723d', padding: '2px 8px', borderRadius: '12px', letterSpacing: '0.02em' }}>
															{item.species}
														</span>
													)}
												</div>
												<span className="author-title">
													{item.role}, <strong>{item.company}</strong>
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Controls */}
					<div className="carousel-controls">
						<div className="indicator-pills">
							{testimonials.map((_, idx) => (
								<button
									key={idx}
									type="button"
									className={`pill ${activeSlide === idx ? 'active' : ''}`}
									onClick={() => setActiveSlide(idx)}
									aria-label={`Go to testimonial ${idx + 1}`}
								/>
							))}
						</div>

						<div className="nav-buttons-group">
							<button type="button" className="nav-btn" onClick={handlePrev} aria-label="Previous Testimonial">
								<ChevronLeft size={20} />
							</button>
							<button type="button" className="nav-btn" onClick={handleNext} aria-label="Next Testimonial">
								<ChevronRight size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Partner Logos */}
				<div className="partner-section">
					<span className="partner-label">TRUSTED BY TEAMS WORLDWIDE</span>
					<div className="logos-grid">
						{clientLogos.map((logo) => (
							<div key={logo.id} className="logo-item">
								<img src={logo.img} alt={logo.alt} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
