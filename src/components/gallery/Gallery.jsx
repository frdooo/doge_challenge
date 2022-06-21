import { useEffect, useState } from 'react';
import Topbar from '../topbar/Topbar';
import './gallery.scss';
import axios from 'axios';
import Footer from '../footer/Footer';

export default function Gallery() {
	const [ images, setImages ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ offsetY, setOffsetY ] = useState(0);

	const handleScroll = (e) => setOffsetY(e.target.scrollTop);

	const getImages = async (e) => {
		const items = [];
		axios
			.get('http://shibe.online/api/shibes?count=9')
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

	useEffect(() => {
		getImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleCLick = () => {
		setIsLoading(true);
		getImages();
	};

	return (
		<div className="gallery" onScroll={handleScroll}>
			<Topbar />
			<div className="container">
				<div className="top">
					<h1>Doge Life</h1>
					<h3>Browse some of Vital’s client photography portfolio</h3>
				</div>
				<div className="bottom">
					{!images ? (
						<div className="loading-spinner" />
					) : (
						images.map((image) => <img className="image" src={image.url} alt="" />)
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
					<span onClick={() => handleCLick()}>Load more</span>
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
