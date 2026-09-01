import SEO from '../components/common/SEO';
import Topbar from '../components/topbar/Topbar';
import Intro from '../components/intro/Intro';
import Introduction from '../components/introduction/Introduction';
import Featured from '../components/featured/Featured';
import Services from '../components/services/Services';
import Gallery from '../components/gallery/Gallery';
import Clients from '../components/clients/Clients';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function Home() {
	return (
		<main className="home-page">
			<SEO
				title="Doge Creative Agency & Gallery | Digital Studio"
				description="An interactive creative agency showcase featuring Doge animations, parallax toys, project showcases, animal photography gallery, and digital services."
				keywords="creative agency, frontend engineering, parallax motion, doge studio, animal photography, react web app, ui ux design"
				canonicalUrl="/"
				ogImage="/assets/bigdoge.png"
			/>
			<Topbar />
			<Intro />
			<Introduction />
			<Featured />
			<Services />
			<Gallery />
			<Clients />
			<Contact />
			<Footer />
		</main>
	);
}
