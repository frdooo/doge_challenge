import { useState } from 'react';
import './featured.scss';
import { ChevronLeft, ChevronRight, ArrowUpRight, Search, Star, Eye } from 'lucide-react';

const projects = [
	{
		id: 'proj-1',
		category: 'Brand & Graphic Design',
		title: 'Vital Shibes Identity',
		subtitle: 'Global Pet Care Rebranding',
		img: '/assets/img1.jpg',
		desc: 'A vibrant brand overhaul crafted for next-generation pet lifestyle brands, featuring custom typography, merchandise, and packaging.',
		deliverables: ['Visual System', 'Brand Book', 'Packaging 3D'],
		year: '2026',
		link: '#featured'
	},
	{
		id: 'proj-2',
		category: 'Creative Frontend & 3D',
		title: 'Parallax Universe',
		subtitle: 'Interactive Web Playground',
		img: '/assets/img2.jpg',
		desc: 'An immersive interactive web application with physics-based floating toys, smooth canvas particles, and responsive audio feedback.',
		deliverables: ['React 18', 'WebGL / Canvas', 'Micro-interactions'],
		year: '2026',
		link: '#featured'
	},
	{
		id: 'proj-3',
		category: 'Studio & Animal Photography',
		title: 'Bark & Studio Collective',
		subtitle: 'High-Res Pet Editorial',
		img: '/assets/img3.jpg',
		desc: 'Editorial studio photography showcasing pure joy, dynamic action captures, and fine art portraits of companion animals.',
		deliverables: ['Color Grading', 'Studio Lighting', 'Gallery Portal'],
		year: '2025',
		link: '#featured'
	}
];

const deliveredMatrix = [
	{
		id: 'rec-1',
		name: 'Doge Coin Explorer UI',
		type: 'Web Application',
		date: 'Feb 2026',
		client: 'CryptoShibe Ltd',
		status: 'Live',
		rating: 5
	},
	{
		id: 'rec-2',
		name: 'BarkBox Pet App 2.0',
		type: 'Mobile & PWA',
		date: 'Jan 2026',
		client: 'Bark Ventures',
		status: 'Delivered',
		rating: 5
	},
	{
		id: 'rec-3',
		name: 'Toy Factory Parallax',
		type: 'Interactive Experience',
		date: 'Dec 2025',
		client: 'Duck & Chicken Co',
		status: 'Active',
		rating: 4.9
	},
	{
		id: 'rec-4',
		name: 'Pet Treat Packaging Suite',
		type: 'Brand Identity',
		date: 'Nov 2025',
		client: 'Shiba Snax',
		status: 'Delivered',
		rating: 5
	},
	{
		id: 'rec-5',
		name: 'Animal Sanctuary Portal',
		type: 'Non-Profit Platform',
		date: 'Oct 2025',
		client: 'Rescue Worldwide',
		status: 'Live',
		rating: 5
	}
];

export default function Featured() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [searchQuery, setSearchQuery] = useState('');
	const [statusFilter, setStatusFilter] = useState('All');
	const [selectedProject, setSelectedProject] = useState(null);

	const handlePrev = () => {
		setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	const filteredMatrix = deliveredMatrix.filter((item) => {
		const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.type.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
		return matchesSearch && matchesStatus;
	});

	return (
		<section className="featured" id="featured">
			<div className="section-container">
				{/* Header */}
				<div className="section-header">
					<div className="eyebrow">
						<span className="dot" />
						<span>02 / FEATURED PORTFOLIO</span>
					</div>
					<div className="title-row">
						<div>
							<h2 className="section-title">Selected Projects</h2>
							<p className="subtitle">Curated case studies from our creative workshop</p>
						</div>

						<div className="carousel-nav">
							<button type="button" className="nav-btn" onClick={handlePrev} aria-label="Previous Project">
								<ChevronLeft size={22} />
							</button>
							<span className="nav-counter">
								0{activeSlide + 1} / 0{projects.length}
							</span>
							<button type="button" className="nav-btn" onClick={handleNext} aria-label="Next Project">
								<ChevronRight size={22} />
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
						{projects.map((proj, idx) => (
							<div key={proj.id} className="project-card">
								<div className="card-media" onClick={() => setSelectedProject(proj)}>
									<img src={proj.img} alt={proj.title} className="project-image" />
									<div className="media-overlay">
										<button type="button" className="quick-view-btn">
											<Eye size={18} />
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
										<span>Explore Case Study</span>
										<ArrowUpRight size={18} />
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

				{/* What We Deliver & Matrix Table */}
				<div className="matrix-section">
					<div className="matrix-header">
						<div>
							<h3 className="matrix-title">Project Delivery Matrix</h3>
							<p className="matrix-sub">Recent client contracts and engagement records</p>
						</div>

						<div className="matrix-controls">
							<div className="search-bar">
								<Search size={16} color="#8c7b72" />
								<input
									type="text"
									placeholder="Search projects or clients..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</div>

							<div className="filter-pills">
								{['All', 'Live', 'Delivered', 'Active'].map((status) => (
									<button
										key={status}
										type="button"
										className={`filter-btn ${statusFilter === status ? 'active' : ''}`}
										onClick={() => setStatusFilter(status)}
									>
										{status}
									</button>
								))}
							</div>
						</div>
					</div>

					<div className="table-card">
						<table className="matrix-table">
							<thead>
								<tr>
									<th>Project Name</th>
									<th>Capability / Type</th>
									<th>Client</th>
									<th>Delivery Date</th>
									<th>Status</th>
									<th>Rating</th>
								</tr>
							</thead>
							<tbody>
								{filteredMatrix.length > 0 ? (
									filteredMatrix.map((item) => (
										<tr key={item.id}>
											<td>
												<strong>{item.name}</strong>
											</td>
											<td>{item.type}</td>
											<td>{item.client}</td>
											<td>{item.date}</td>
											<td>
												<span className={`status-badge ${item.status.toLowerCase()}`}>
													<span className="indicator-dot" />
													{item.status}
												</span>
											</td>
											<td>
												<div className="rating-cell">
													<Star size={14} fill="#ba723d" color="#ba723d" />
													<span>{item.rating}</span>
												</div>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={6} className="empty-row">
											No matching projects found for "{searchQuery}"
										</td>
									</tr>
								)}
							</tbody>
						</table>
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
									<strong>Core Highlights:</strong>
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
										Inquire for Similar Project
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
