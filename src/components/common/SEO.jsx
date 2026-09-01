import { useEffect } from 'react';

/**
 * Dynamic SEO Component for managing title, meta tags, OpenGraph, Twitter Cards, canonical links, and JSON-LD structured data.
 */
export default function SEO({
	title = 'Doge Creative Agency & Gallery',
	description = 'An interactive creative agency showcase featuring Doge animations, parallax toys, project showcases, animal photography gallery, and digital services.',
	keywords = 'creative agency, web design, frontend engineering, parallax animation, animal photography, doge studio, UI UX design, react developer',
	canonicalUrl,
	ogType = 'website',
	ogImage = '/assets/bigdoge.png',
	schemaData
}) {
	useEffect(() => {
		// Set document title
		document.title = title.includes('Doge') ? title : `${title} | Doge Creative Agency`;

		const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

		// Helper to update or create meta tags
		const setMetaTag = (selector, attributeName, attributeValue, content) => {
			let element = document.querySelector(selector);
			if (!element) {
				element = document.createElement('meta');
				element.setAttribute(attributeName, attributeValue);
				document.head.appendChild(element);
			}
			element.setAttribute('content', content);
		};

		// Standard Meta
		setMetaTag('meta[name="description"]', 'name', 'description', description);
		setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
		setMetaTag('meta[name="author"]', 'name', 'author', 'Doge Agency');
		setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');

		// OpenGraph
		setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
		setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
		setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
		setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
		setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Doge Creative Agency');
		if (ogImage) {
			const absoluteImg = ogImage.startsWith('http') ? ogImage : (typeof window !== 'undefined' ? `${window.location.origin}${ogImage}` : ogImage);
			setMetaTag('meta[property="og:image"]', 'property', 'og:image', absoluteImg);
		}

		// Twitter Cards
		setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
		setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
		setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
		if (ogImage) {
			const absoluteImg = ogImage.startsWith('http') ? ogImage : (typeof window !== 'undefined' ? `${window.location.origin}${ogImage}` : ogImage);
			setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImg);
		}

		// Canonical Link
		let linkCanonical = document.querySelector('link[rel="canonical"]');
		if (!linkCanonical) {
			linkCanonical = document.createElement('link');
			linkCanonical.setAttribute('rel', 'canonical');
			document.head.appendChild(linkCanonical);
		}
		linkCanonical.setAttribute('href', currentUrl);

		// JSON-LD Structured Data
		let scriptLd = document.getElementById('page-json-ld');
		if (schemaData) {
			if (!scriptLd) {
				scriptLd = document.createElement('script');
				scriptLd.id = 'page-json-ld';
				scriptLd.type = 'application/ld+json';
				document.head.appendChild(scriptLd);
			}
			scriptLd.textContent = JSON.stringify(schemaData);
		} else if (scriptLd) {
			scriptLd.remove();
		}
	}, [title, description, keywords, canonicalUrl, ogType, ogImage, schemaData]);

	return null;
}
