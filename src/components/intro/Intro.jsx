import { useState, useEffect, useRef } from 'react';
import './intro.scss';
import { ArrowDown, Sparkles, Heart, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Intro() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [barks, setBarks] = useState(0);
	const [petted, setPetted] = useState(false);
	const heroRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!heroRef.current) return;
			const rect = heroRef.current.getBoundingClientRect();
			const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
			const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
			setMousePos({ x, y });
		};

		const heroElem = heroRef.current;
		if (heroElem) {
			heroElem.addEventListener('mousemove', handleMouseMove);
		}
		return () => {
			if (heroElem) {
				heroElem.removeEventListener('mousemove', handleMouseMove);
			}
		};
	}, []);

	const handlePetDoge = (e) => {
		setPetted(true);
		setBarks((prev) => prev + 1);
		
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (rect.left + rect.width / 2) / window.innerWidth;
		const y = (rect.top + rect.height / 2) / window.innerHeight;

		confetti({
			particleCount: 35,
			spread: 60,
			origin: { x, y },
			colors: ['#ba723d', '#f8ccab', '#ff7a45', '#ffd166', '#ffffff']
		});

		setTimeout(() => setPetted(false), 600);
	};

	const scrollToNext = () => {
		const nextSection = document.getElementById('introduction') || document.getElementById('featured');
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className="intro" ref={heroRef} id="home">
			{/* Floating Parallax Toys */}
			<div 
				className="floating-toy duck" 
				style={{ 
					transform: `translate(${mousePos.x * 24}px, ${mousePos.y * 20}px) rotate(${mousePos.x * 8}deg)` 
				}}
			>
				<img src="/assets/parallax/duckpeluche.png" alt="Duck Plush Toy" />
			</div>

			<div 
				className="floating-toy chicken" 
				style={{ 
					transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -25}px) rotate(${mousePos.x * -12}deg)` 
				}}
			>
				<img src="/assets/parallax/screamingchicken.png" alt="Screaming Chicken Toy" />
			</div>

			<div 
				className="floating-toy tennis" 
				style={{ 
					transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 30}px) rotate(${mousePos.x * 25}deg)` 
				}}
			>
				<img src="/assets/parallax/tennisball.png" alt="Tennis Ball Toy" />
			</div>

			<div className="hero-container">
				<div className="left">
					<div className="badge-pill">
						<Sparkles size={15} color="#ba723d" />
						<span>Creative Agency & Pet Tech • 2026 Edition</span>
					</div>

					<h1 className="hero-title">
						Such Creative.<br />
						<span className="gradient-text">Much Digital.</span>
					</h1>

					<h2 className="hero-subtitle">
						Welcome to the premier digital showcase of Doge Agency.
					</h2>

					<p className="hero-description">
						We engineer high-performance web applications, interactive 3D & parallax experiences, and award-winning digital solutions for forward-thinking brands worldwide.
					</p>

					<div className="cta-group">
						<button 
							type="button" 
							className="btn-primary" 
							onClick={scrollToNext}
						>
							<Rocket size={18} />
							Explore Projects
						</button>

						<button 
							type="button" 
							className={`btn-pet ${petted ? 'petted' : ''}`}
							onClick={handlePetDoge}
						>
							<Heart size={18} className={petted ? 'beating' : ''} />
							<span>{barks > 0 ? `Barks! (${barks})` : 'Pet Doge'}</span>
						</button>
					</div>

					<div className="hero-stats">
						<div className="stat-item">
							<strong>150+</strong>
							<span>Works Completed</span>
						</div>
						<div className="stat-divider" />
						<div className="stat-item">
							<strong>99.8%</strong>
							<span>Client Happiness</span>
						</div>
						<div className="stat-divider" />
						<div className="stat-item">
							<strong>10M+</strong>
							<span>Shibes Delighted</span>
						</div>
					</div>
				</div>

				<div className="right">
					<div 
						className="doge-stage"
						style={{
							transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 10}px)`
						}}
					>
						<div className="doge-halo" />
						<img 
							src="/assets/bigdoge.png" 
							alt="Big Doge Mascot" 
							className={`doge-img ${petted ? 'bounce' : ''}`}
							onClick={handlePetDoge}
							title="Click to pet Doge!"
						/>

						{/* Speech Bubble */}
						<div className="doge-bubble">
							<span>wow. such modern. much frontend! ✨</span>
						</div>
					</div>
				</div>
			</div>

			<div className="scroll-indicator" onClick={scrollToNext} role="button" tabIndex={0}>
				<span className="scroll-text">SCROLL TO DISCOVER</span>
				<div className="scroll-icon-wrap">
					<ArrowDown size={18} />
				</div>
			</div>
		</section>
	);
}
