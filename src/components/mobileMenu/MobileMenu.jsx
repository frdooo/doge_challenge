import './mobilemeny.scss';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={!menuOpen ? 'menu clicked' : 'menu'}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">Hoddme</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">About</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#works">Testimonial</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#testimonials">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenu;
