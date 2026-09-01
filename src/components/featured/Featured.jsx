import { useState } from 'react';
import './featured.scss';
import { ChevronLeft, ChevronRight, ArrowUpRight, Eye } from 'lucide-react';

const projects = [
	{
		id: 'proj-1',
		category: 'Brand & Visual Identity',
		title: 'Vital Shibes Identity',
		subtitle: 'Global Pet Care Rebranding',
		img: '/assets/img1.jpg',
		desc: 'A comprehensive brand identity overhaul featuring bespoke typography, editorial design systems, and custom product packaging.',
		deliverables: ['Visual Identity', 'Brand Guidelines', 'Packaging Design'],
		year: '2026'
	},
	{
		id: 'proj-2',
		category: 'Creative Development',
		title: 'Parallax Universe',
		subtitle: 'Interactive Digital Experience',
		img: '/assets/img2.jpg',
		desc: 'An immersive interactive web application featuring physics-based floating assets, custom micro-interactions, and fluid responsive layouts.',
		deliverables: ['Interactive Web', 'Motion Design', 'Micro-interactions'],
		year: '2026'
	},
	{
		id: 'proj-3',
		category: 'Studio Photography',
		title: 'Bark & Studio Collective',
		subtitle: 'Editorial Animal Showcase',
		img: '/assets/img3.jpg',
		desc: 'Studio portraiture capturing dynamic character, studio lighting, and high-fidelity captures for lifestyle and animal campaigns.',
		deliverables: ['Studio Lighting', 'Color Grading', 'Digital Gallery'],
		year: '2025'
	}
];

export default function Featured() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [selectedProject, setSelectedProject] = useState(null);

	const handlePrev = () => {
		setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className="featured" id="featured">
			<div className="section-container">
				{/* Header */}
				<div className="section-header">
					<div className="title-row">
						<div>
							<span className="section-kicker">Selected Case Studies</span>
							<h2 className="section-title">Recent Work</h2>
						</div>

						<div className="carousel-nav">
							<button type="button" className="nav-btn" onClick={handlePrev} aria-label="Previous Case Study">
								<ChevronLeft size={20} />
							</button>
							<span className="nav-counter">
								{activeSlide + 1} / {projects.length}
							</span>
							<button type="button" className="nav-btn" onClick={handleNext} aria-label="Next Case Study">
								<ChevronRight size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Interactive Carousel */}
				<div className="carousel-wrapper">
					<div 
						className="carousel-track"
						style={{ transform: `translateX(-${activeSlide * 100}%)` }}
					>
						{projects.map((proj) => (
							<div key={proj.id} className="project-card">
								<div className="card-media" onClick={() => setSelectedProject(proj)}>
									<img src={proj.img} alt={proj.title} className="project-image" />
									<div className="media-overlay">
										<button type="button" className="quick-view-btn">
											<Eye size={16} />
											<span>View Project Details</span>
										</button>
									</div>
									<div className="year-badge">{proj.year}</div>
								</div>

								<div className="card-body">
									<div className="category-tag">{proj.category}</div>
									<h3 className="project-name">{proj.title}</h3>
									<h4 className="project-sub">{proj.subtitle}</h4>
									<p className="project-desc">{proj.desc}</p>

									<div className="deliverables-pills">
										{proj.deliverables.map((del, dIdx) => (
											<span key={dIdx} className="pill">{del}</span>
										))}
									</div>

									<button 
										type="button" 
										className="detail-action-btn"
										onClick={() => setSelectedProject(proj)}
									>
										<span>View Details</span>
										<ArrowUpRight size={16} />
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Dot Indicators */}
					<div className="dot-indicators">
						{projects.map((_, idx) => (
							<button
								key={idx}
								type="button"
								className={`dot ${activeSlide === idx ? 'active' : ''}`}
								onClick={() => setActiveSlide(idx)}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>

				{/* Project Detail Modal */}
				{selectedProject && (
					<div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
						<div className="modal-content" onClick={(e) => e.stopPropagation()}>
							<div className="modal-media">
								<img src={selectedProject.img} alt={selectedProject.title} />
							</div>
							<div className="modal-body">
								<div className="category-tag">{selectedProject.category}</div>
								<h2>{selectedProject.title}</h2>
								<h4>{selectedProject.subtitle}</h4>
								<p>{selectedProject.desc}</p>

								<div className="modal-deliverables">
									<strong>Deliverables:</strong>
									<div className="deliverables-pills">
										{selectedProject.deliverables.map((del, dIdx) => (
											<span key={dIdx} className="pill">{del}</span>
										))}
									</div>
								</div>

								<div className="modal-actions">
									<button 
										type="button" 
										className="btn-primary"
										onClick={() => {
											setSelectedProject(null);
											const contactElem = document.getElementById('contact');
											if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
										}}
									>
										Inquire About Similar Project
									</button>
									<button 
										type="button" 
										className="btn-close"
										onClick={() => setSelectedProject(null)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
