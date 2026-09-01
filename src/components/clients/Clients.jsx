import { useState } from 'react';
import './clients.scss';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
	{
		id: 'test-1',
		img: '/assets/img1.jpg',
		name: 'Elena Rostova',
		role: 'Head of Brand & Marketing',
		company: 'Shiba Labs Global',
		rating: 5,
		quote:
			'Doge Agency transformed our brand presence completely. The parallax micro-interactions and high-resolution animal showcase blew our conversion benchmarks out of the water. Highly recommended!'
	},
	{
		id: 'test-2',
		img: '/assets/img2.jpg',
		name: 'Marcus Chen',
		role: 'Founder & CEO',
		company: 'Bark & Co Ventures',
		rating: 5,
		quote:
			'The engineering precision paired with delightful character design made our product launch an unforgettable success. The 60FPS fluid animations feel incredible on both mobile and desktop.'
	},
	{
		id: 'test-3',
		img: '/assets/img3.jpg',
		name: 'Sarah Jenkins',
		role: 'Creative Director',
		company: 'Global Animal Sanctuary',
		rating: 5,
		quote:
			'Working with the Doge team was seamless from wireframing to production. Their attention to detail, accessible typography, and warm aesthetic resonated deeply with our community.'
	}
];

const clientLogos = [
	{ id: 'c1', src: '/assets/client1.png', name: 'Partner 1' },
	{ id: 'c2', src: '/assets/client2.png', name: 'Partner 2' },
	{ id: 'c3', src: '/assets/client3.png', name: 'Partner 3' },
	{ id: 'c4', src: '/assets/client4.png', name: 'Partner 4' },
	{ id: 'c5', src: '/assets/client5.png', name: 'Partner 5' },
	{ id: 'c6', src: '/assets/client6.png', name: 'Partner 6' }
];

export default function Clients() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handlePrev = () => {
		setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className="clients" id="client">
			<div className="section-container">
				<div className="section-header">
					<div className="eyebrow">
						<span className="dot" />
						<span>05 / TESTIMONIALS & TRUST</span>
					</div>
					<h2 className="section-title">Endorsed by Industry Leaders</h2>
					<div className="accent-bar" />
				</div>

				{/* Testimonials Carousel */}
				<div className="testimonial-card-wrap">
					<div className="quote-mark">
						<Quote size={56} color="#ebd7cb" />
					</div>

					<div className="carousel-stage">
						<div
							className="testimonials-track"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							{testimonials.map((item) => (
								<div key={item.id} className="testimonial-slide">
									<div className="slide-content">
										<div className="rating-stars">
											{Array.from({ length: item.rating }).map((_, rIdx) => (
												<Star key={rIdx} size={18} fill="#ba723d" color="#ba723d" />
											))}
										</div>

										<p className="quote-text">"{item.quote}"</p>

										<div className="author-row">
											<img
												src={item.img}
												alt={item.name}
												className="author-avatar"
											/>
											<div className="author-meta">
												<h4 className="author-name">{item.name}</h4>
												<span className="author-title">
													{item.role} • <strong>{item.company}</strong>
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation controls */}
					<div className="carousel-controls">
						<button
							type="button"
							className="nav-btn prev"
							onClick={handlePrev}
							aria-label="Previous Testimonial"
						>
							<ChevronLeft size={22} />
						</button>

						<div className="indicator-pills">
							{testimonials.map((_, idx) => (
								<button
									key={idx}
									type="button"
									className={`pill ${currentSlide === idx ? 'active' : ''}`}
									onClick={() => setCurrentSlide(idx)}
									aria-label={`Go to slide ${idx + 1}`}
								/>
							))}
						</div>

						<button
							type="button"
							className="nav-btn next"
							onClick={handleNext}
							aria-label="Next Testimonial"
						>
							<ChevronRight size={22} />
						</button>
					</div>
				</div>

				{/* Partner Logos Bar */}
				<div className="partner-section">
					<span className="partner-label">TRUSTED BY TEAMS AROUND THE GLOBE</span>
					<div className="logos-grid">
						{clientLogos.map((client) => (
							<div key={client.id} className="logo-item">
								<img src={client.src} alt={client.name} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
