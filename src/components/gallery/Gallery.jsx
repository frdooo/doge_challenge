import { useEffect, useState } from 'react';
import Topbar from '../topbar/Topbar';
import './gallery.scss';
import axios from 'axios';
import Footer from '../footer/Footer';

export default function Gallery() {
	const [ animal, setAnimal ] = useState('shibes');
	const [ toggle, setToggle ] = useState({ left: 51 });
	const [ images, setImages ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ offsetY, setOffsetY ] = useState(0);

	const handleScroll = (e) => setOffsetY(e.target.scrollTop);

	const getImages = async (e) => {
		const items = [];
		axios
			.get(`http://shibe.online/api/${e}?count=9`)
			.then((res) => {
				for (let i = 0; i < res.data.length; i++) {
					items.push({ url: res.data[i] });
				}
				if (images.length === 0) {
					setImages(items);
				} else {
					setImages((pre) => {
						pre.push.apply(pre, items);
						return pre;
					});
				}

				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleClick = async (e) => {
		if (e === 'cats') {
			setToggle({ left: 0 });
		} else if (e === 'shibes') {
			setToggle({ left: 50 });
		} else {
			setToggle({ left: 102 });
		}
		setImages([]);
		if (images) {
			setIsLoading(true);
			setAnimal(e);
			getImages(e);
		} else {
			setImages([]);
		}
	};

	useEffect(() => {
		getImages('shibes');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleLoad = () => {
		setIsLoading(true);
		getImages(animal);
	};

	return (
		<div className="gallery" onScroll={handleScroll}>
			<Topbar />
			<div className="switch">
				<span onClick={() => handleClick('cats')}>Cats</span>
				<span onClick={() => handleClick('shibes')}>Doges</span>
				<span onClick={() => handleClick('birds')}>Birds</span>
				<span style={toggle} className="toggle" />
			</div>
			<div className="container">
				<div className="top">
					<div className="switch-mobile">
						<span onClick={() => handleClick('cats')}>Cats</span>
						<span onClick={() => handleClick('shibes')}>Doges</span>
						<span onClick={() => handleClick('birds')}>Birds</span>
						<span style={toggle} className="toggle" />
					</div>
					<h1>Doge Life</h1>
					<h3>Browse some of Vital’s client photography portfolio</h3>
				</div>
				<div className="bottom">
					{!images && isLoading ? (
						<div className="loading-spinner" />
					) : (
						images.map((image, index) => (
							<div
								key={index}
								className="image"
								style={{
									background: `linear-gradient(0deg, rgba(218, 130, 111, 0.3), rgba(218, 130, 111, 0.3)), url(${image.url})`,

									backgroundPosition: 'center',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat'
								}}
							/>
						))
					)}
				</div>
				{isLoading ? (
					<div className="loading-spinner">
						<img src="assets/bigdoge.png" alt="" />
					</div>
				) : (
					''
				)}

				<div className="wrapper">
					<h3>Want to see more beautiful doge photography ?</h3>
					<span onClick={() => handleLoad()}>Load more</span>
				</div>
			</div>
			<div className="parallax">
				<img
					style={{
						transform: `translateX(-${offsetY * 0.1}px)`
					}}
					className="duck"
					src="assets/parallax/duckpeluche.png"
					alt=""
				/>
				<img
					style={{ transform: `translateX(${offsetY * 0.1}px)` }}
					className="tennis"
					src="assets/parallax/tennisball.png"
					alt=""
				/>
				<img className="chicken" src="assets/parallax/screamingchicken.png" alt="" />
			</div>
			<Footer />
		</div>
	);
}
