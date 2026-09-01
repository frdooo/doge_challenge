import './about.scss';
import Topbar from '../components/topbar/Topbar';
import Footer from '../components/footer/Footer';
import { ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const evolutionPoints = [
	{
		year: '2021',
		title: 'The Original Challenge',
		desc: 'Created as a technical recruitment project testing parallax layout, custom SCSS styling, and responsive web foundations.'
	},
	{
		year: '2026',
		title: 'Frontend Modernization',
		desc: 'Re-engineered into a clean, modular React application with robust component hierarchy, fluid typography, and accessible contrasts.'
	},
	{
		year: 'Standard',
		title: 'Performance & Structure',
		desc: 'Optimized animation loops, resilient API fallbacks, and clean design patterns built for smooth cross-device rendering.'
	}
];

const teamMembers = [
	{
		name: 'Doge Sensei',
		role: 'Studio Mascot & Inspiration',
		avatar: '/assets/bigdoge.png',
		bio: 'The original character behind the agency branding and visual identity.'
	},
	{
		name: 'Elena Rostova',
		role: 'Lead UI/UX Designer',
		avatar: '/assets/img1.jpg',
		bio: 'Specializing in design systems, micro-interactions, and responsive typography.'
	},
	{
		name: 'Marcus Vance',
		role: 'Frontend Engineer',
		avatar: '/assets/img2.jpg',
		bio: 'Focused on React performance, interactive layouts, and cross-browser reliability.'
	}
];

export default function About() {
	return (
		<div className="about-page">
			<Topbar />

			{/* Hero Header */}
			<section className="about-hero">
				<div className="container">
					<span className="section-kicker">Studio Story</span>
					<h1 className="hero-title">About Doge Agency</h1>
					<p className="hero-subtitle">
						Bridging distinctive character design with modern frontend engineering standards.
					</p>

					<div className="mascot-stage">
						<img src="/assets/bigdoge.png" alt="Doge Mascot" className="mascot-img" />
					</div>
				</div>
			</section>

			{/* Origin & Evolution Story */}
			<section className="evolution-section">
				<div className="container">
					<div className="section-head">
						<span className="section-kicker">Timeline & Engineering</span>
						<h2>From 2021 Challenge to Modern Architecture</h2>
						<p>
							How the codebase evolved from a legacy recruitment task into a modern, production-grade frontend showcase.
						</p>
					</div>

					<div className="timeline-grid">
						{evolutionPoints.map((item, idx) => (
							<div key={idx} className="timeline-card">
								<div className="card-badge">{item.year}</div>
								<h3>{item.title}</h3>
								<p>{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="values-section">
				<div className="container">
					<div className="values-grid">
						<div className="value-item">
							<Layers size={28} className="val-icon" />
							<h3>Modular Components</h3>
							<p>Clean separation of concerns with reusable React components and scoped styles.</p>
						</div>
						<div className="value-item">
							<Zap size={28} className="val-icon" />
							<h3>Fluid Interactions</h3>
							<p>Hardware-accelerated parallax motion and smooth responsive states on all screens.</p>
						</div>
						<div className="value-item">
							<ShieldCheck size={28} className="val-icon" />
							<h3>Resilient Fallbacks</h3>
							<p>Local asset fallbacks ensuring unbroken presentation regardless of network status.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="team-section">
				<div className="container">
					<div className="section-head">
						<span className="section-kicker">Studio Team</span>
						<h2>Core Members</h2>
					</div>

					<div className="team-grid">
						{teamMembers.map((member, idx) => (
							<div key={idx} className="member-card">
								<div className="avatar-wrap">
									<img src={member.avatar} alt={member.name} />
								</div>
								<h3>{member.name}</h3>
								<span className="role">{member.role}</span>
								<p>{member.bio}</p>
							</div>
						))}
					</div>

					<div className="cta-box">
						<h3>Ready to start your next digital project?</h3>
						<Link to="/#contact" className="btn-cta">
							<span>Contact Our Studio</span>
							<ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
