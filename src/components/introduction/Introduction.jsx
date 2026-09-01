import { useState, useRef } from 'react';
import './introduction.scss';
import { Play, Pause, Volume2, VolumeX, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Introduction() {
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

	return (
		<section className="introduction" id="introduction">
			<div className="section-container">
				<div className="section-header">
					<div className="eyebrow">
						<span className="dot" />
						<span>01 / OVERVIEW & SHOWREEL</span>
					</div>
					<h2 className="section-title">The Doge Creative Standard</h2>
					<div className="accent-bar" />
				</div>

				<div className="content-grid">
					<div className="left-column">
						<h3 className="headline">
							Engineering memorable, playful, and conversion-focused digital experiences.
						</h3>
						<p className="description">
							Founded on the spirit of boundless curiosity and relentless craftsmanship, Doge Agency combines cutting-edge frontend engineering with immersive visual identity.
						</p>
						<p className="description">
							From high-traffic interactive web apps to parallax brand stories and real-time animal photography portfolios, we turn bold ideas into responsive digital realities.
						</p>

						<div className="feature-list">
							<div className="feature-item">
								<Zap size={20} className="feature-icon" />
								<div>
									<strong>Fluid 60FPS Performance</strong>
									<span>Optimized GPU-accelerated motion and lightweight bundle architecture.</span>
								</div>
							</div>

							<div className="feature-item">
								<ShieldCheck size={20} className="feature-icon" />
								<div>
									<strong>Production Ready & Accessible</strong>
									<span>Strict WCAG standards, semantic HTML, and responsive mobile-first views.</span>
								</div>
							</div>

							<div className="feature-item">
								<CheckCircle2 size={20} className="feature-icon" />
								<div>
									<strong>Much Quality Assurance</strong>
									<span>Rigorous browser compatibility, state validation, and resilient APIs.</span>
								</div>
							</div>
						</div>
					</div>

					<div className="right-column">
						<div className="video-card">
							{!isPlaying ? (
								<div className="video-poster" onClick={togglePlay}>
									<img
										src="/assets/videothumbnail.png"
										alt="Showreel Thumbnail"
										className="poster-img"
										onError={(e) => {
											e.currentTarget.src = '/assets/img3.jpg';
										}}
									/>
									<div className="poster-overlay" />
									<div className="play-cta">
										<div className="play-circle">
											<Play size={24} fill="#ffffff" color="#ffffff" />
										</div>
										<span className="play-text">WATCH AGENCY REEL</span>
									</div>
								</div>
							) : (
								<div className="video-player-wrap">
									<video
										ref={videoRef}
										src="/assets/video.mp4"
										autoPlay
										controls
										className="active-video"
										onEnded={() => setIsPlaying(false)}
									>
										Your browser does not support HTML video.
									</video>
									<div className="video-controls-bar">
										<button type="button" onClick={togglePlay} className="vid-btn" title={isPlaying ? 'Pause' : 'Play'}>
											{isPlaying ? <Pause size={18} /> : <Play size={18} />}
										</button>
										<button type="button" onClick={toggleMute} className="vid-btn" title={isMuted ? 'Unmute' : 'Mute'}>
											{isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
										</button>
										<span className="badge-live">DOGE SHOWREEL • 1080P</span>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
