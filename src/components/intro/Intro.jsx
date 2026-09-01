import { useState, useEffect, useRef } from 'react';
import './intro.scss';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Intro() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

	const handlePetDoge = () => {
		setPetted(true);
		setTimeout(() => setPetted(false), 500);
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
					transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 16}px) rotate(${mousePos.x * 6}deg)` 
				}}
			>
				<img src="/assets/parallax/duckpeluche.png" alt="Duck Plush Toy" />
			</div>

			<div 
				className="floating-toy chicken" 
				style={{ 
					transform: `translate(${mousePos.x * -24}px, ${mousePos.y * -20}px) rotate(${mousePos.x * -8}deg)` 
				}}
			>
				<img src="/assets/parallax/screamingchicken.png" alt="Screaming Chicken Toy" />
			</div>

			<div 
				className="floating-toy tennis" 
				style={{ 
					transform: `translate(${mousePos.x * 28}px, ${mousePos.y * 24}px) rotate(${mousePos.x * 15}deg)` 
				}}
			>
				<img src="/assets/parallax/tennisball.png" alt="Tennis Ball Toy" />
			</div>

			<div className="hero-container">
				<div className="left">
					<div className="studio-tag">
						<span>Creative Studio & Digital Workshop</span>
					</div>

					<h1 className="hero-title">
						Playful design.<br />
						Serious craft.
					</h1>

					<p className="hero-description">
						We are an independent creative agency designing memorable brand identities, interactive web experiences, and digital products for forward-thinking brands.
					</p>

					<div className="cta-group">
						<button 
							type="button" 
							className="btn-primary" 
							onClick={scrollToNext}
						>
							<span>Explore Selected Work</span>
							<ArrowRight size={16} />
						</button>

						<button 
							type="button" 
							className="btn-secondary"
							onClick={() => {
								const contactElem = document.getElementById('contact');
								if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
							}}
						>
							<span>Get In Touch</span>
						</button>
					</div>
				</div>

				<div className="right">
					<div 
						className="doge-stage"
						style={{
							transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 8}px)`
						}}
					>
						<img 
							src="/assets/bigdoge.png" 
							alt="Doge Studio Mascot" 
							className={`doge-img ${petted ? 'bounce' : ''}`}
							onClick={handlePetDoge}
							title="Click to interact"
						/>
					</div>
				</div>
			</div>

			<div className="scroll-indicator" onClick={scrollToNext} role="button" tabIndex={0}>
				<span className="scroll-text">Scroll to explore</span>
				<div className="scroll-icon-wrap">
					<ArrowDown size={15} />
				</div>
			</div>
		</section>
	);
}
