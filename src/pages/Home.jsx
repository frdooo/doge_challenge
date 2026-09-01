import Topbar from '../components/topbar/Topbar';
import Intro from '../components/intro/Intro';
import Subheader from '../components/subheader/Subheader';
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
			<Topbar />
			<Intro />
			<Subheader />
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
