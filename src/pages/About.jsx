import { useState, useRef } from 'react';
import './about.scss';
import SEO from '../components/common/SEO';
import Topbar from '../components/topbar/Topbar';
import Footer from '../components/footer/Footer';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Sparkles, Compass, Camera, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const studioPillars = [
	{
		icon: Sparkles,
		title: 'Brand Identity & Motion',
		desc: 'Crafting expressive visual identities, playful character animations, and distinctive design languages that stand out.'
	},
	{
		icon: Code,
		title: 'Creative Frontend Engineering',
		desc: 'Building responsive, interactive web applications with smooth motion, accessible contrast, and clean modular code.'
	},
	{
		icon: Camera,
		title: 'Studio & Animal Photography',
		desc: 'Curating editorial animal and pet photography with high-resolution gallery presentation and art direction.'
	},
	{
		icon: Compass,
		title: 'Digital Product Design',
		desc: 'Designing intuitive user interfaces and design systems tailored for seamless cross-platform experiences.'
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

export default function About() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const videoRef = useRef(null);

	const togglePlay = () => {
		if (!videoRef.current) {
			setIsPlaying(!isPlaying);
			return;
		}
		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	const aboutSchema = {
		"@context": "https://schema.org",
		"@type": "AboutPage",
		"name": "About Doge Creative Agency",
		"description": "Learn about Doge Agency's studio philosophy, capabilities, and creative showreel.",
		"mainEntity": {
			"@type": "Organization",
			"name": "Doge Creative Agency",
			"logo": "/assets/bigdoge.png",
			"description": "An independent creative agency designing memorable brand identities, interactive web experiences, and digital products."
		}
	};

	return (
		<div className="about-page">
			<SEO
				title="About Us — Studio Story & Creative Philosophy"
				description="Discover the design philosophy, capabilities, and creative showreel behind Doge Creative Agency. Playful design, serious craft."
				keywords="about doge agency, creative studio, brand design, frontend engineering, showreel"
				canonicalUrl="/about"
				ogImage="/assets/bigdoge.png"
				schemaData={aboutSchema}
			/>
			<Topbar />

			{/* Hero Header */}
			<section className="about-hero">
				<div className="container">
					<div className="badge-pill">
						<span>CREATIVE STUDIO</span>
					</div>
					<h1 className="hero-title">About Doge Agency</h1>
					<p className="hero-subtitle">
						Playful design. Serious craft. We partner with forward-thinking teams to create distinctive digital identities and interactive web experiences.
					</p>

					<div className="mascot-stage">
						<img src="/assets/bigdoge.png" alt="Doge Studio Mascot" className="mascot-img" />
					</div>
				</div>
			</section>

			{/* Studio Philosophy & Showreel */}
			<section className="evolution-section">
				<div className="container">
					<div className="section-head">
						<h2>Design with personality. Engineering with purpose.</h2>
						<div className="accent-bar" />
						<p>
							Founded on curiosity and craft, Doge Agency combines playful character identity with rigorous engineering. We believe digital experiences should be engaging, intuitive, and built for smooth performance.
						</p>
					</div>

					{/* Authentic Video Player */}
					<div style={{ maxWidth: '800px', margin: '0 auto 40px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(186, 114, 61, 0.18)', backgroundColor: '#0d1a20' }}>
						{!isPlaying ? (
							<div 
								onClick={togglePlay}
								style={{ position: 'relative', cursor: 'pointer', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
							>
								<img
									src="/assets/videothumbnail.png"
									alt="Studio Showreel"
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									onError={(e) => {
										e.currentTarget.src = '/assets/img3.jpg';
									}}
								/>
								<div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(13, 26, 32, 0.35)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
									<div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#ba723d', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', marginBottom: '12px' }}>
										<Play size={26} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
									</div>
									<span style={{ color: '#ffffff', fontWeight: 800, fontSize: '13px', letterSpacing: '0.1em' }}>WATCH STUDIO SHOWREEL</span>
								</div>
							</div>
						) : (
							<div style={{ position: 'relative', width: '100%' }}>
								<video
									ref={videoRef}
									src="/assets/video.mp4"
									autoPlay
									controls
									style={{ width: '100%', display: 'block', maxHeight: '500px' }}
									onEnded={() => setIsPlaying(false)}
								>
									Your browser does not support HTML video.
								</video>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', backgroundColor: '#0d1a20', color: '#fff' }}>
									<div style={{ display: 'flex', gap: '10px' }}>
										<button type="button" onClick={togglePlay} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} title={isPlaying ? 'Pause' : 'Play'}>
											{isPlaying ? <Pause size={18} /> : <Play size={18} />}
										</button>
										<button type="button" onClick={toggleMute} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} title={isMuted ? 'Unmute' : 'Mute'}>
											{isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
										</button>
									</div>
									<span style={{ fontSize: '12px', fontWeight: 700, color: '#ba723d', letterSpacing: '0.05em' }}>DOGE STUDIO REEL</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Core Capabilities */}
			<section className="values-section">
				<div className="container">
					<div style={{ textAlign: 'center', marginBottom: '40px' }}>
						<h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0d1a20', margin: '0 0 12px 0' }}>Our Core Pillars</h2>
						<div style={{ width: '48px', height: '3px', backgroundColor: '#ba723d', borderRadius: '2px', margin: '0 auto' }} />
					</div>

					<div className="values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
						{studioPillars.map((pillar, idx) => {
							const IconComponent = pillar.icon;
							return (
								<div key={idx} className="value-item">
									<IconComponent size={32} className="val-icon" />
									<h3>{pillar.title}</h3>
									<p>{pillar.desc}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Trusted Partners & Call to Action */}
			<section className="team-section">
				<div className="container">
					<div className="section-head">
						<h2>Trusted by Teams Worldwide</h2>
						<div className="accent-bar" />
						<p>Partnering with global creators, design studios, and product organizations.</p>
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', alignItems: 'center', marginBottom: '60px', padding: '20px 0' }}>
						{clientLogos.map((logo) => (
							<div key={logo.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', backgroundColor: '#fdf6f0', borderRadius: '12px', border: '1px solid rgba(186, 114, 61, 0.15)' }}>
								<img src={logo.img} alt={logo.alt} style={{ maxHeight: '44px', width: 'auto', objectFit: 'contain', opacity: 0.85 }} />
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

