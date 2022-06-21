import { useRef, useState } from 'react';
import './featured.scss';

export default function Featured() {
	const [ slideNumber, setSlideNumber ] = useState(0);
	const [ hover, setHover ] = useState(false);
	const slideRef = useRef();

	const handleClick = () => {
		let distance = slideRef.current.getBoundingClientRect().x - 70;
		if (slideNumber < 3) {
			setSlideNumber(slideNumber + 1);
			slideRef.current.style.transform = `translateX(${-340 + distance}px)`;
		} else {
			slideRef.current.style.transform = 'translateX(0)';
			setSlideNumber(0);
		}
	};

	return (
		<div className="featured" id="featured">
			<div className="container">
				<span className="cntitle">特色项目</span>
				<h1 className="title">Featured projects</h1>
				<h3 className="subtitle">Crafted with passion</h3>
				<div className="slider" ref={slideRef}>
					<div className="slide">
						<img src="assets/img3.jpg" alt="" />
						<div className="wrapper">
							<div onMouseOver={() => setHover('1')} onMouseOut={() => setHover('0')} className="arrow">
								{hover === '1' ? (
									<img src="assets/png/arrowprojectactive.png" alt="" />
								) : (
									<img src="assets/png/arrowprojectdefault.png" alt="" />
								)}
							</div>
							<span>Project type</span>
							<h1 className="slide">PROJECT NAME</h1>
							<h3>2021</h3>
							<p>12M views, 45k generated</p>
						</div>
					</div>
					<div className="slide">
						<img src="assets/img3.jpg" alt="" />
						<div className="wrapper">
							<div onMouseOver={() => setHover('2')} onMouseOut={() => setHover('0')} className="arrow">
								{hover === '2' ? (
									<img src="assets/png/arrowprojectactive.png" alt="" />
								) : (
									<img src="assets/png/arrowprojectdefault.png" alt="" />
								)}
							</div>
							<span>Project type</span>
							<h1 className="slide">PROJECT NAME</h1>
							<h3>2021</h3>
							<p>12M views, 45k generated</p>
						</div>
					</div>
					<div className="slide">
						<img src="assets/img3.jpg" alt="" />
						<div className="wrapper">
							<div onMouseOver={() => setHover('3')} onMouseOut={() => setHover('0')} className="arrow">
								{hover === '3' ? (
									<img src="assets/png/arrowprojectactive.png" alt="" />
								) : (
									<img src="assets/png/arrowprojectdefault.png" alt="" />
								)}
							</div>
							<span>Project type</span>
							<h1 className="slide">PROJECT NAME</h1>
							<h3>2021</h3>
							<p>12M views, 45k generated</p>
						</div>
					</div>
					<div className="slide">
						<img src="assets/img3.jpg" alt="" />
						<div className="wrapper">
							<div onMouseOver={() => setHover('4')} onMouseOut={() => setHover('0')} className="arrow">
								{hover === '4' ? (
									<img src="assets/png/arrowprojectactive.png" alt="" />
								) : (
									<img src="assets/png/arrowprojectdefault.png" alt="" />
								)}
							</div>
							<span>Project type</span>
							<h1 className="slide">PROJECT NAME</h1>
							<h3>2021</h3>
							<p>12M views, 45k generated</p>
						</div>
					</div>
					<div className="slide">
						<img src="assets/img3.jpg" alt="" />
						<div className="wrapper">
							<div onMouseOver={() => setHover('5')} onMouseOut={() => setHover('0')} className="arrow">
								{hover === '5' ? (
									<img src="assets/png/arrowprojectactive.png" alt="" />
								) : (
									<img src="assets/png/arrowprojectdefault.png" alt="" />
								)}
							</div>
							<span>Project type</span>
							<h1 className="slide">PROJECT NAME</h1>
							<h3>2021</h3>
							<p>12M views, 45k generated</p>
						</div>
					</div>
					<div className="slide">
						<img src="assets/img3.jpg" alt="" />
						<div className="wrapper">
							<div onMouseOver={() => setHover('6')} onMouseOut={() => setHover('0')} className="arrow">
								{hover === '6' ? (
									<img src="assets/png/arrowprojectactive.png" alt="" />
								) : (
									<img src="assets/png/arrowprojectdefault.png" alt="" />
								)}
							</div>
							<span>Project type</span>
							<h1 className="slide">PROJECT NAME</h1>
							<h3>2021</h3>
							<p>12M views, 45k generated</p>
						</div>
					</div>
				</div>
				<div className="arrowWrapper">
					<img src="assets/png/chevronslider.png" alt="" onClick={() => handleClick()} />
				</div>
			</div>
			<div className="botContainer">
				<h1>what i like</h1>
				<table className="styled-table">
					<thead>
						<tr>
							<th>What is it</th>
							<th>Flavor</th>
							<th>Date</th>
							<th>Where</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Pizza</td>
							<td>4 seasons</td>
							<td>04-30-2021</td>
							<td>At</td>
							<td>
								<div className="status">New</div>
							</td>
						</tr>
						<tr className="active-row">
							<td>Wine</td>
							<td>Red</td>
							<td>04/30/2021</td>
							<td>Outside</td>
							<td>
								<div className="status">Ongoing</div>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="mobile-table">
					<div className="left">
						<span className="tableTitle">What is it</span>
						<span>Pizza</span>
						<span className="tableTitle">Date</span>
						<span>04/30/2021</span>

						<div className="status">New</div>
					</div>
					<div className="right">
						<span className="tableTitle">Flavor</span>
						<span>4 seasons</span>
						<span className="tableTitle">Where</span>
						<span>At home</span>
					</div>
				</div>
				<div className="mobile-table">
					<div className="left">
						<span className="tableTitle">What is it</span>
						<span>Wine</span>
						<span className="tableTitle">Date</span>
						<span>04/30/2021</span>

						<div className="status">Ongoing</div>
					</div>
					<div className="right">
						<span className="tableTitle">Flavor</span>
						<span>Red</span>
						<span className="tableTitle">Where</span>
						<span>Outside</span>
					</div>
				</div>
			</div>
			<div className="bottom" />
		</div>
	);
}
