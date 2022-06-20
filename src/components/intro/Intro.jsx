import Topbar from '../topbar/Topbar';
import './intro.scss';

export default function Intro() {
	return (
		<div className="intro">
			<div className="header">
				<Topbar />
			</div>
			<div className="container">
				<div className="left">
					<div className="wrapper">
						<h2>Welcome,</h2>
						<h1>To the Doge gallery</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur soluta magni
							consequuntur unde iusto! Aliquam, perspiciatis quasi repudiandae pariatur
						</p>
						<div className="scroll">
							<a href="#featured">
								<span>scroll</span>
								<img src="assets/png/arrowdown.png" alt="" />
							</a>
						</div>
					</div>
				</div>
				<div className="right">
					<img src="assets/bigdoge.png" alt="" />
				</div>
			</div>
		</div>
	);
}
