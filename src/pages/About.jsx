import './about.scss';
import Topbar from '../components/topbar/Topbar';
import Footer from '../components/footer/Footer';
import { Sparkles, Shield, Rocket, ArrowRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const evolutionPoints = [
	{
		year: '2021 Origin',
		title: 'The Challenge Inception',
		desc: 'Built as an experimental recruiting coding challenge exploring parallax assets, SCSS layouts, and basic API image endpoints.'
	},
	{
		year: '2026 Upgrade',
		title: 'Modern Frontend Excellence',
		desc: 'Refactored to modern React architecture with immutable state management, accessible WCAG color contrast, fluid responsive typography, and resilient API fallbacks.'
	},
	{
		year: 'Architecture',
		title: 'Performance & Scalability',
		desc: 'Eliminated synchronous layout thrashing, replaced fragile DOM mutations with declarative state, and optimized 60FPS animations.'
	}
];

const teamMembers = [
	{
		name: 'Doge Sensei',
		role: 'Chief Inspiration Officer & Lead Mascot',
		avatar: '/assets/bigdoge.png',
		bio: 'Guiding the agency with ancient wisdom, boundless optimism, and high enthusiasm for tennis balls.'
	},
	{
		name: 'Elena Rostova',
		role: 'Lead UI/UX & Motion Architect',
		avatar: '/assets/img1.jpg',
		bio: 'Specializing in physics-based micro-interactions, responsive design tokens, and fluid layout typography.'
	},
	{
		name: 'Marcus Vance',
		role: 'Senior Full-Stack Engineer',
		avatar: '/assets/img2.jpg',
		bio: 'Architecting resilient cloud pipelines, high-throughput APIs, and performance-tuned frontend systems.'
	}
];

export default function About() {
	return (
		<div className="about-page">
			<Topbar />

			{/* Hero Header */}
			<section className="about-hero">
				<div className="container">
					<div className="badge-pill">
						<Sparkles size={14} color="#ba723d" />
						<span>OUR STORY & CRAFT</span>
					</div>
					<h1 className="hero-title">About Doge Agency</h1>
					<p className="hero-subtitle">
						Bridging playful character design with state-of-the-art frontend engineering.
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
						<h2>From 2021 Challenge to 2026 Production Standard</h2>
						<div className="accent-bar" />
						<p>
							What began as a technical challenge has evolved into a full-scale digital playground. Here is how our standards matured:
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
							<Code2 size={32} className="val-icon" />
							<h3>Declarative State</h3>
							<p>Clean immutable React state patterns preventing memory leaks and UI race conditions.</p>
						</div>
						<div className="value-item">
							<Rocket size={32} className="val-icon" />
							<h3>60FPS Performance</h3>
							<p>Hardware-accelerated parallax motion and responsive touch gestures across all screen sizes.</p>
						</div>
						<div className="value-item">
							<Shield size={32} className="val-icon" />
							<h3>Resilient Fallbacks</h3>
							<p>Guaranteed uptime with graceful offline/fallback asset sets when third-party APIs are unavailable.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="team-section">
				<div className="container">
					<div className="section-head">
						<h2>Meet the Leadership</h2>
						<div className="accent-bar" />
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
						<h3>Ready to collaborate on your next digital adventure?</h3>
						<Link to="/#contact" className="btn-cta">
							<span>Get In Touch with Doge Agency</span>
							<ArrowRight size={18} />
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
