import { useState } from 'react';
import './subheader.scss';

function Subheader() {
	const [ clicked, setClicked ] = useState('intro');

	const handleClick = (e) => {
		setClicked(e);
	};
	return (
		<div className="subheader">
			<div className="wrapper">
				<div className="menu">
					<a href="#introduction">
						{clicked === 'intro' ? (
							<div>
								<span className="active" onClick={() => handleClick('intro')}>
									introduction
								</span>
								<div className="line" />
							</div>
						) : (
							<span onClick={() => handleClick('intro')}>introduction</span>
						)}
					</a>
					<a href="#services">
						{clicked === 'service' ? (
							<div>
								<span className="active" onClick={() => handleClick('service')}>
									Our Services
								</span>
								<div className="line line1" />
							</div>
						) : (
							<span onClick={() => handleClick('service')}>Our Services</span>
						)}
					</a>
					<a href="#client">
						{clicked === 'client' ? (
							<div>
								<span className="active" onClick={() => handleClick('client')}>
									Our client
								</span>
								<div className="line line2" />
							</div>
						) : (
							<span onClick={() => handleClick('client')}>Our Client</span>
						)}
					</a>
					<a className="contactus" href="#contact">
						{clicked === 'contact' ? (
							<div>
								<span className="active" onClick={() => handleClick('contact')}>
									contact us
								</span>
								<div className="line line3" />
							</div>
						) : (
							<span onClick={() => handleClick('contact')}>contact us</span>
						)}
					</a>
				</div>
				<div className="button">
					<span>Contact us</span>
				</div>
			</div>
		</div>
	);
}

export default Subheader;
