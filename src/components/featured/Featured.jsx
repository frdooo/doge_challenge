import { useRef, useState } from 'react';
import './featured.scss';

export default function Featured() {
	const [ slideNumber, setSlideNumber ] = useState(0);
	const slideRef = useRef();

	const handleClick = () => {
		let distance = slideRef.current.getBoundingClientRect().x - 70;
		if (slideNumber < 2) {
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
							<div className="arrow">
								<img src="assets/png/arrowprojectdefault.png" alt="" />
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
							<div className="arrow">
								<img src="assets/png/arrowprojectdefault.png" alt="" />
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
							<div className="arrow">
								<img src="assets/png/arrowprojectdefault.png" alt="" />
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
							<div className="arrow">
								<img src="assets/png/arrowprojectdefault.png" alt="" />
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
							<div className="arrow">
								<img src="assets/png/arrowprojectdefault.png" alt="" />
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
							<div className="arrow">
								<img src="assets/png/arrowprojectdefault.png" alt="" />
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
				<table class="styled-table">
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
						<tr class="active-row">
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
			</div>
			<div className="bottom" />
		</div>
	);
}