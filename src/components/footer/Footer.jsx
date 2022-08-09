import './footer.scss';

function Footer() {
	return (
		<div className="footer">
			<div className="top">
				<a href="#intro">
					<img className="logo" src="assets/logo.png" alt="" />
				</a>
				<div className="menu">
					<div className="left">
						<span>Home</span>
						<span>About</span>
						<span>Gallery</span>
					</div>
					<div className="right">
						<span>Testimonial</span>
						<span>Contact</span>
					</div>
				</div>
				<div className="social">
					<img className="wechat" src="assets/svg/wechatsmall.svg" alt="" />
					<img className="linkedin" src="assets/svg/linkedinsmall.svg" alt="" />
				</div>
			</div>
			<div className="bottom">
				<span>Copyright ©WowmuchGallery. All Rights Reserved.</span>
			</div>
		</div>
	);
}

export default Footer;
