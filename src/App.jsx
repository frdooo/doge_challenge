import Featured from './components/featured/Featured';
import Intro from './components/intro/Intro';
import './app.scss';
import Gallery from './components/gallery/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';

const Home = () => {
	return (
		<div className="sections">
			<Intro />
			<Featured />
			<Gallery />
		</div>
	);
};
function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
