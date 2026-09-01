import { useEffect, useRef, useState } from 'react';

const useSticky = (threshold = 100) => {
	const stickyRef = useRef(null);
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!stickyRef.current) return;
			const scrollPos = window.scrollY || document.documentElement.scrollTop;
			setSticky(scrollPos > threshold);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);

	return { stickyRef, sticky };
};

export default useSticky;
