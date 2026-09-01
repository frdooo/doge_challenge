import { useState } from 'react';
import './clients.scss';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
	{
		id: 'test-1',
		quote: 'Doge Agency completely reshaped our brand presence. The attention to typography, micro-interactions, and visual storytelling set a new benchmark for our product launches.',
		name: 'Elena Rostova',
		role: 'Design Director',
		company: 'Vanguard Studios',
		avatar: '/assets/client1.png'
	},
	{
		id: 'test-2',
		quote: 'Their frontend execution was flawless. They took complex design prototypes and brought them to life with silky smooth performance across desktop and mobile devices.',
		name: 'Marcus Vance',
		role: 'Head of Product',
		company: 'Aether Labs',
		avatar: '/assets/client2.png'
	},
	{
		id: 'test-3',
		quote: 'The team brings real craft and originality. Our engagement metrics jumped significantly after deploying the interactive showcase they architected.',
		name: 'Sophia Lindqvist',
		role: 'Creative Lead',
		company: 'Nordic Wave',
		avatar: '/assets/client3.png'
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
											<img src={item.avatar} alt={item.name} className="author-avatar" />
											<div className="author-meta">
												<span className="author-name">{item.name}</span>
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
