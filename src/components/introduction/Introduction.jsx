import { useState, useRef } from 'react';
import './introduction.scss';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

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
				<div className="content-grid">
					<div className="left-column">
						<span className="section-kicker">Agency Showreel & Philosophy</span>
						<h2 className="headline">
							Design with personality. Engineering with purpose.
						</h2>
						<p className="description">
							Founded on curiosity and craft, Doge Agency partners with forward-thinking teams to create distinctive digital identities, interactive web experiences, and bespoke products.
						</p>
						<p className="description">
							We believe great digital design should be engaging, intuitive, and built with rigorous performance from the ground up.
						</p>

						<div className="pillars-row">
							<div className="pillar">
								<strong>Brand & Motion</strong>
								<span>Crafting expressive visual languages that stand out.</span>
							</div>
							<div className="pillar">
								<strong>Creative Tech</strong>
								<span>Building responsive, interactive web applications.</span>
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
											<Play size={22} fill="#ffffff" color="#ffffff" />
										</div>
										<span className="play-text">WATCH SHOWREEL</span>
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
											{isPlaying ? <Pause size={16} /> : <Play size={16} />}
										</button>
										<button type="button" onClick={toggleMute} className="vid-btn" title={isMuted ? 'Unmute' : 'Mute'}>
											{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
										</button>
										<span className="badge-live">DOGE STUDIO REEL</span>
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
