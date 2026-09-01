import { useEffect, useState, useCallback } from 'react';
import './gallery.scss';
import axios from 'axios';
import { Sparkles, RefreshCw, ZoomIn, Heart, Share2, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const fallbackImages = {
	shibes: [
		'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&auto=format&fit=crop&q=80'
	],
	cats: [
		'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=80'
	],
	birds: [
		'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1480044965905-02098d419e96?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=800&auto=format&fit=crop&q=80',
		'https://images.unsplash.com/photo-1555169062-013468b47731?w=800&auto=format&fit=crop&q=80'
	]
};

export default function Gallery() {
	const [category, setCategory] = useState('shibes');
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [previewIndex, setPreviewIndex] = useState(null);
	const [likedImages, setLikedImages] = useState({});
	const [copiedUrl, setCopiedUrl] = useState(null);

	const fetchImages = useCallback(async (cat, append = false) => {
		setIsLoading(true);
		try {
			// Using HTTPS endpoint
			const res = await axios.get(`https://shibe.online/api/${cat}?count=6&urls=true&httpsUrls=true`, {
				timeout: 4000
			});
			if (res.data && Array.isArray(res.data) && res.data.length > 0) {
				const formatted = res.data.map((url, i) => ({
					id: `${cat}-${Date.now()}-${i}`,
					url
				}));
				setImages((prev) => (append ? [...prev, ...formatted] : formatted));
			} else {
				throw new Error('Empty response');
			}
		} catch (err) {
			console.warn('Using fallback image set for', cat);
			const fallbacks = fallbackImages[cat] || fallbackImages.shibes;
			const formatted = fallbacks.map((url, i) => ({
				id: `${cat}-fb-${Date.now()}-${i}`,
				url
			}));
			setImages((prev) => (append ? [...prev, ...formatted] : formatted));
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchImages(category, false);
	}, [category, fetchImages]);

	const handleCategoryChange = (newCat) => {
		if (newCat === category && images.length > 0) return;
		setCategory(newCat);
	};

	const handleLoadMore = () => {
		fetchImages(category, true);
	};

	const toggleLike = (id, e) => {
		e.stopPropagation();
		setLikedImages((prev) => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	const handleCopyUrl = (url, e) => {
		e.stopPropagation();
		if (navigator.clipboard) {
			navigator.clipboard.writeText(url);
			setCopiedUrl(url);
			setTimeout(() => setCopiedUrl(null), 2000);
		}
	};

	const openLightbox = (index) => {
		setPreviewIndex(index);
	};

	const closeLightbox = () => {
		setPreviewIndex(null);
	};

	const nextLightbox = (e) => {
		e.stopPropagation();
		setPreviewIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const prevLightbox = (e) => {
		e.stopPropagation();
		setPreviewIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	return (
		<section className="gallery" id="gallery">
			<div className="section-container">
				<div className="section-header">
					<div className="eyebrow">
						<span className="dot" />
						<span>04 / LIVE PET PHOTOGRAPHY</span>
					</div>

					<div className="header-row">
						<div>
							<h2 className="section-title">Doge & Friends Gallery</h2>
							<p className="subtitle">Real-time photography feeds and curated high-resolution captures</p>
						</div>

						{/* Segmented Category Filter Switch */}
						<div className="category-switcher" role="tablist">
							<button
								type="button"
								role="tab"
								aria-selected={category === 'shibes'}
								className={`cat-btn ${category === 'shibes' ? 'active' : ''}`}
								onClick={() => handleCategoryChange('shibes')}
							>
								🐕 Shibes
							</button>
							<button
								type="button"
								role="tab"
								aria-selected={category === 'cats'}
								className={`cat-btn ${category === 'cats' ? 'active' : ''}`}
								onClick={() => handleCategoryChange('cats')}
							>
								🐈 Cats
							</button>
							<button
								type="button"
								role="tab"
								aria-selected={category === 'birds'}
								className={`cat-btn ${category === 'birds' ? 'active' : ''}`}
								onClick={() => handleCategoryChange('birds')}
							>
								🦜 Birds
							</button>
						</div>
					</div>
				</div>

				{/* Gallery Grid */}
				<div className="gallery-grid">
					{images.map((item, index) => {
						const isLiked = likedImages[item.id];
						return (
							<div
								key={item.id}
								className="gallery-card"
								onClick={() => openLightbox(index)}
							>
								<img
									src={item.url}
									alt={`${category} capture ${index + 1}`}
									className="card-image"
									loading="lazy"
									onError={(e) => {
										e.currentTarget.src = fallbackImages[category][index % fallbackImages[category].length];
									}}
								/>

								<div className="card-overlay">
									<div className="top-actions">
										<button
											type="button"
											className={`action-icon-btn ${isLiked ? 'liked' : ''}`}
											onClick={(e) => toggleLike(item.id, e)}
											title="Like photo"
										>
											<Heart size={16} fill={isLiked ? '#ff4757' : 'none'} color={isLiked ? '#ff4757' : '#ffffff'} />
										</button>
										<button
											type="button"
											className="action-icon-btn"
											onClick={(e) => handleCopyUrl(item.url, e)}
											title="Copy image link"
										>
											{copiedUrl === item.url ? <Check size={16} color="#2ed573" /> : <Share2 size={16} color="#ffffff" />}
										</button>
									</div>

									<div className="bottom-info">
										<span className="photo-tag">#{category.toUpperCase()} • 0{index + 1}</span>
										<button type="button" className="zoom-btn">
											<ZoomIn size={16} />
											<span>Zoom</span>
										</button>
									</div>
								</div>
							</div>
						);
					})}

					{/* Loading Skeletons */}
					{isLoading &&
						Array.from({ length: 3 }).map((_, i) => (
							<div key={`skel-${i}`} className="gallery-card skeleton-card">
								<div className="skeleton-shimmer" />
							</div>
						))}
				</div>

				{/* Load More Action */}
				<div className="load-more-wrap">
					<p className="load-info">Want to see more adorable {category} photography?</p>
					<button
						type="button"
						className={`load-more-btn ${isLoading ? 'loading' : ''}`}
						onClick={handleLoadMore}
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<RefreshCw size={18} className="spin-icon" />
								<span>Fetching Shibes...</span>
							</>
						) : (
							<>
								<Sparkles size={18} />
								<span>Load More Photos</span>
							</>
						)}
					</button>
				</div>

				{/* Full-Screen Lightbox Modal */}
				{previewIndex !== null && images[previewIndex] && (
					<div className="lightbox-backdrop" onClick={closeLightbox}>
						<button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
							<X size={28} />
						</button>

						<button type="button" className="lightbox-nav prev" onClick={prevLightbox} aria-label="Previous Photo">
							<ChevronLeft size={32} />
						</button>

						<div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
							<img
								src={images[previewIndex].url}
								alt={`Preview ${previewIndex + 1}`}
								className="lightbox-image"
							/>
							<div className="lightbox-caption">
								<span>{category.toUpperCase()} • Photo {previewIndex + 1} of {images.length}</span>
								<div className="lightbox-actions">
									<button
										type="button"
										className="lightbox-btn"
										onClick={(e) => toggleLike(images[previewIndex].id, e)}
									>
										<Heart
											size={18}
											fill={likedImages[images[previewIndex].id] ? '#ff4757' : 'none'}
											color={likedImages[images[previewIndex].id] ? '#ff4757' : '#ffffff'}
										/>
									</button>
									<button
										type="button"
										className="lightbox-btn"
										onClick={(e) => handleCopyUrl(images[previewIndex].url, e)}
									>
										{copiedUrl === images[previewIndex].url ? <Check size={18} color="#2ed573" /> : <Share2 size={18} />}
									</button>
								</div>
							</div>
						</div>

						<button type="button" className="lightbox-nav next" onClick={nextLightbox} aria-label="Next Photo">
							<ChevronRight size={32} />
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
