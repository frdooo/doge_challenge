import { useState } from 'react';
import './clients.scss';

const Clients = () => {
	const [ currentSlide, setCurrentSlide ] = useState(0);

	const data = [
		{
			id: '1',
			img: './assets/img1.jpg',
			name: 'Name',
			company: 'Company',
			title: 'title',
			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
		},
		{
			id: '2',
			img: './assets/img2.jpg',
			name: 'Name',
			company: 'Company',
			title: 'title',
			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
		},
		{
			id: '3',
			img: './assets/img3.jpg',
			name: 'Name',
			company: 'Company',
			title: 'title',
			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
		}
	];

	const handleClick = (way) => {
		way === 'left'
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div className="clients" id="client">
			<h1>Our clients</h1>
			<span className="line" />
			<div className="chevronRight" onClick={() => handleClick('left')}>
				<img className="arrowRight" src="assets/png/chevronbutton.png" alt="" />
			</div>
			<div className="chevronLeft" onClick={() => handleClick()}>
				<img className="arrowLeft" src="assets/png/chevronbutton.png" alt="" />
			</div>
			<div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{data.map((d) => (
					<div className="wrapper">
						<div className="item">
							<img className="profile" src={d.img} alt="" />
							<h3>{d.name}</h3>
							<span>
								{d.company}, {d.title}
							</span>
							<p>{d.desc}</p>
						</div>
					</div>
				))}
			</div>
			<div className="scroll">
				<span className={currentSlide === 0 ? 'line1 active' : 'line1'} />
				<span className={currentSlide === 1 ? 'line2 active' : 'line2'} />
				<span className={currentSlide === 2 ? 'line3 active' : 'line3'} />
			</div>
		</div>
	);
};

export default Clients;
