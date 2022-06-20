import './topbar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Topbar() {
	const [ menuOpen, setMenuOpen ] = useState(false);
	return (
		<div className="topbar active">
			<div className="wrapper">
				<div className="left">
					<a href="#top">
						<img src="assets/logo.png" alt="" />
					</a>
				</div>
				<div className="right">
					<Link className="link" to="/">
						Home
					</Link>
					<Link className="link" to="/about">
						About
					</Link>
					<Link className="link" to="/">
						Gallery
					</Link>
					<Link className="link" to="/">
						Testimonial
					</Link>
					<Link className="link" to="/">
						Contact
					</Link>
				</div>
				<div className="hamburger">
					<img onClick={() => setMenuOpen(true)} src="assets/svg/burger.svg" alt="" />
				</div>
				<div className={!menuOpen ? 'menu active' : 'menu'}>
					<img
						onClick={() => setMenuOpen(false)}
						src="assets/svg/x.svg"
						alt=""
						className={!menuOpen ? 'exit active' : 'exit'}
					/>
					<ul>
						<li onClick={() => setMenuOpen(false)}>
							<Link className="link" to="/">
								Home
							</Link>
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<Link className="link" to="/about">
								About
							</Link>
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<a href="#works">Testimonial</a>
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<a href="#testimonials">Contact</a>
						</li>
					</ul>

					<div className="social">
						<img src="assets/svg/wechatsmall.svg" alt="" />
						<img src="assets/svg/linkedinsmall.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
