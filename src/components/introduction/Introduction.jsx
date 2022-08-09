import { useState } from 'react';
import './introduction.scss';

function Introduction() {
	const [ play, setPlay ] = useState(false);

	const handlePlay = () => {
		setPlay(true);
	};

	const Thumbnail = () => {
		return (
			<div>
				<img className="thumbnail" src="assets/videothumbnail.png" alt="" />
				<img className="thumbnailMobile" src="assets/img3.jpg" alt="" />
				<div className="icon" onClick={handlePlay}>
					<img src="assets/png/playbutton.png" alt="" />
				</div>
				<div className="playButton" onClick={handlePlay}>
					<span className="buttonText">Play video</span>
				</div>
			</div>
		);
	};
	return (
		<div className="introduction" id="introduction">
			<div className="container">
				<span className="title">Introduction</span>
				<span className="line" />
				<div className="wrapper">
					<div className="left">
						<h1>Lorem ipsum dolor</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur netus cras magna fusce
							et vulputate nam tincidunt. Mauris, etiam mauris, ut est ullamcorper sit nunc. Nunc
							ullamcorper faucibus eros, non facilisis magnis vel, ut ullamcorper. Id aliquet tortor id.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur netus cras magna fusce
							et vulputate nam tincidunt. Mauris, etiam mauris, ut est ullamcorper sit nunc. Nunc
							ullamcorper faucibus eros, non facilisis magnis vel, ut ullamcorper. Id aliquet tortor id.
						</p>
					</div>
					<div className="right">
						{!play ? (
							<Thumbnail />
						) : (
							<video autoPlay controls>
								<source src="assets/video.mp4" type="video/mp4" />
							</video>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
