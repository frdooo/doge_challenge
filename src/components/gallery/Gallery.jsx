import { useState, useEffect } from 'react';
import axios from 'axios';
import './gallery.scss';
import { Heart, Maximize2, X, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

const localImages = [
	{ id: 'loc-1', url: '/assets/img1.jpg', tag: 'Editorial Shoot', source: 'Studio Archive' },
	{ id: 'loc-2', url: '/assets/img2.jpg', tag: 'Creative Capture', source: 'Studio Archive' },
	{ id: 'loc-3', url: '/assets/img3.jpg', tag: 'Animal Portraiture', source: 'Studio Archive' },
	{ id: 'loc-4', url: '/assets/videothumbnail.png', tag: 'Motion Still', source: 'Studio Archive' },
	{ id: 'loc-5', url: '/assets/parallax/duckpeluche.png', tag: 'Asset Art', source: 'Studio Archive' },
	{ id: 'loc-6', url: '/assets/bigdoge.png', tag: 'Original Mascot', source: 'Studio Archive' }
];

export default function Gallery() {
	const [images, setImages] = useState(localImages);
	const [activeCategory, setActiveCategory] = useState('all');
	const [loading, setLoading] = useState(false);
	const [likedIds, setLikedIds] = useState([]);
	const [lightboxIndex, setLightboxIndex] = useState(null);

	const fetchLiveDogs = async (count = 6) => {
		setLoading(true);
		try {
			const res = await axios.get(`https://shibe.online/api/shibes?count=${count}&urls=true&httpsUrls=true`);
			if (Array.isArray(res.data)) {
				const remoteItems = res.data.map((url, i) => ({
					id: `live-${Date.now()}-${i}`,
					url,
					tag: 'Community Shibe',
					source: 'Live Feed'
				}));
				setImages((prev) => [...prev, ...remoteItems]);
			}
		} catch (err) {
			console.warn('Could not reach remote gallery API; maintaining local archive.', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// Fetch initial 3 shibes
		fetchLiveDogs(3);
	}, []);

	const toggleLike = (e, id) => {
		e.stopPropagation();
		setLikedIds((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
		);
	};

	const filteredImages = images.filter((img) => {
		if (activeCategory === 'favorites') return likedIds.includes(img.id);
		if (activeCategory === 'studio') return img.source === 'Studio Archive';
		return true;
	});

	const openLightbox = (index) => {
		setLightboxIndex(index);
	};

	const closeLightbox = () => {
		setLightboxIndex(null);
	};

	const handleLightboxPrev = (e) => {
		e.stopPropagation();
		if (lightboxIndex !== null && filteredImages.length > 0) {
			setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
		}
	};

	const handleLightboxNext = (e) => {
		e.stopPropagation();
		if (lightboxIndex !== null && filteredImages.length > 0) {
			setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
		}
	};

	return (
		<section className="gallery" id="gallery">
			<div className="section-container">
				{/* Section Header */}
				<div className="section-header">
					<div className="header-row">
						<div>
							<span className="section-kicker">Visual Archive</span>
							<h2 className="section-title">Gallery & Studio Shots</h2>
							<p className="subtitle">Curated visual work and photography captures.</p>
						</div>

						{/* Category Switcher */}
						<div className="category-switcher">
							<button
								type="button"
								className={`cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
								onClick={() => setActiveCategory('all')}
							>
								All ({images.length})
							</button>
							<button
								type="button"
								className={`cat-btn ${activeCategory === 'studio' ? 'active' : ''}`}
								onClick={() => setActiveCategory('studio')}
							>
								Studio
							</button>
							<button
								type="button"
								className={`cat-btn ${activeCategory === 'favorites' ? 'active' : ''}`}
								onClick={() => setActiveCategory('favorites')}
							>
								Favorites ({likedIds.length})
							</button>
						</div>
					</div>
				</div>

				{/* Gallery Grid */}
				<div className="gallery-grid">
					{filteredImages.map((img, index) => {
						const isLiked = likedIds.includes(img.id);
						return (
							<div
								key={img.id}
								className="gallery-card"
								onClick={() => openLightbox(index)}
							>
								<img
									src={img.url}
									alt={img.tag}
									className="card-image"
									loading="lazy"
									onError={(e) => {
										e.currentTarget.src = '/assets/img1.jpg';
									}}
								/>
								<div className="card-overlay">
									<div className="top-actions">
										<button
											type="button"
											className={`action-icon-btn ${isLiked ? 'liked' : ''}`}
											onClick={(e) => toggleLike(e, img.id)}
											aria-label="Favorite image"
										>
											<Heart
												size={16}
												color={isLiked ? '#ba723d' : '#ffffff'}
												fill={isLiked ? '#ba723d' : 'none'}
											/>
										</button>
									</div>

									<div className="bottom-info">
										<span className="photo-tag">{img.tag}</span>
										<button type="button" className="zoom-btn">
											<Maximize2 size={13} />
											<span>Expand</span>
										</button>
									</div>
								</div>
							</div>
						);
					})}

					{loading && (
						<div className="gallery-card skeleton-card">
							<div className="skeleton-shimmer" />
						</div>
					)}
				</div>

				{/* Load More Action */}
				<div className="load-more-wrap">
					<p className="load-info">
						Showing {filteredImages.length} photographs
					</p>
					<button
						type="button"
						className={`load-more-btn ${loading ? 'loading' : ''}`}
						onClick={() => fetchLiveDogs(6)}
						disabled={loading}
					>
						<RefreshCw size={16} className={loading ? 'spin-icon' : ''} />
						<span>{loading ? 'Fetching Photographs...' : 'Load More Photographs'}</span>
					</button>
				</div>

				{/* Lightbox Modal */}
				{lightboxIndex !== null && filteredImages[lightboxIndex] && (
					<div className="lightbox-backdrop" onClick={closeLightbox}>
						<button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close viewer">
							<X size={24} />
						</button>

						<button type="button" className="lightbox-nav prev" onClick={handleLightboxPrev} aria-label="Previous image">
							<ChevronLeft size={28} />
						</button>

						<div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
							<img
								src={filteredImages[lightboxIndex].url}
								alt="Enlarged gallery capture"
								className="lightbox-image"
							/>
							<div className="lightbox-caption">
								<span>{filteredImages[lightboxIndex].tag} ({lightboxIndex + 1} / {filteredImages.length})</span>
								<div className="lightbox-actions">
									<button
										type="button"
										className="lightbox-btn"
										onClick={(e) => toggleLike(e, filteredImages[lightboxIndex].id)}
									>
										<Heart
											size={16}
											color={likedIds.includes(filteredImages[lightboxIndex].id) ? '#ba723d' : '#ffffff'}
											fill={likedIds.includes(filteredImages[lightboxIndex].id) ? '#ba723d' : 'none'}
										/>
									</button>
								</div>
							</div>
						</div>

						<button type="button" className="lightbox-nav next" onClick={handleLightboxNext} aria-label="Next image">
							<ChevronRight size={28} />
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
