import Subheader from '../components/subheader/Subheader';
import './about.scss';
import Introduction from '../components/introduction/Introduction';
import Topbar from '../components/topbar/Topbar';
import Services from '../components/services/Services';
import Clients from '../components/clients/Clients';
import Footer from '../components/footer/Footer';

import { useState } from 'react';
import Contact from '../components/contact/Contact';

function About() {
	const [ fix, setFix ] = useState(false);

	const setFixed = (e) => {
		if (e.target.scrollTop > 512) {
			setFix(true);
		} else {
			setFix(false);
		}
	};

	return (
		<div className="about" onScroll={setFixed}>
			<div className="header">
				<Topbar />
			</div>
			<div className="intro">
				<div className="wrapper">
					<h1>About</h1>
					<span className="title">The Doge Gallery</span>
				</div>
				<img src="assets/bigdoge.png" alt="" />
			</div>
			<div className={fix ? 'sticky' : ''}>
				<Subheader />
			</div>

			<Introduction />
			<Services />
			<Clients />
			<Contact />
			<Footer />
		</div>
	);
}

export default About;
