import { useEffect, useState } from 'react';
import './contact.scss';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Contact = () => {
	const [ countries, setCountries ] = useState();
	const [ startDate, setStartDate ] = useState(new Date());
	const [ loading, setLoading ] = useState(false);
	const [ submit, setSubmit ] = useState(false);
	const [ buttonText, setButtonText ] = useState('submit contact form');
	const [ email, setEmail ] = useState('');
	const [ check, setCheck ] = useState(true);
	const [ valid, setValid ] = useState(false);
	const [ message, setMessage ] = useState('');
	const [ show, setShow ] = useState(false);

	const emailValidation = () => {
		const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
		if (regEx.test(email)) {
			console.log('valid');
			setMessage('');
			setValid(true);
			setCheck(true);
		} else if (!regEx.test(email) && email !== '') {
			console.log('not valid');
			setMessage('You didn’t enter a valid email address');
			setValid(false);
			setCheck(false);
		}
	};

	const showPassword = () => {
		if (show) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	const handleOnChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async () => {
		await emailValidation();
		console.log('message: ' + valid);
		if (valid) {
			setLoading(true);
			setButtonText('Loading');
			setTimeout(() => {
				setSubmit(true);
				setLoading(false);
				setButtonText('Sent');
			}, 2000);
		} else {
			setLoading(true);
			setButtonText('Loading');
			setTimeout(() => {
				setLoading(false);
				setButtonText('submit contact form');
			}, 2000);
		}
	};

	useEffect(() => {
		axios
			.get('https://restcountries.com/v2/all?fields=name')
			.then((res) => {
				const { data } = res;
				setCountries(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (countries) {
		return (
			<div className="contact" id="contact">
				<div className="trust">
					<div className="left">They trust us</div>
					<div className="right">
						<img src="assets/client1.png" alt="" />
						<img src="assets/client2.png" alt="" />
						<img src="assets/client3.png" alt="" />
						<img src="assets/client4.png" alt="" />
						<img src="assets/client5.png" alt="" />
						<img src="assets/client6.png" alt="" />
					</div>
				</div>
				<h1>Contact us</h1>
				<span className="line" />
				<div className="wrapper">
					<div className="top">
						<span>Fill out the form below and we will contact you soon regarding lorem ipsum</span>
					</div>
					<form>
						<div className="container">
							<div className="left">
								<span>* Full name</span>
								<input type="text" placeholder="" />
								<span>* Business phone</span>
								<input type="text" placeholder="" />
								<span>* Date</span>
								<DatePicker
									className="picker"
									selected={startDate}
									onChange={(date: Date) => setStartDate(date)}
								/>
								<img className="pickerIcon" src="assets/svg/calendar.svg" alt="" />
							</div>
							<div className="right">
								<span>* Email</span>
								<input
									className={check ? 'emailInput' : 'emailInput emailErr'}
									onChange={handleOnChange}
									type="text"
									placeholder=""
								/>
								<span className="email">{message}</span>
								<span>* Country</span>
								<select id="countries" name="countries">
									<option value="none" selected disabled hidden />
									{countries.map((countrie) => (
										<option value={countrie.name}>{countrie.name}</option>
									))}
								</select>
								<span>* Password</span>
								<input type={show ? 'text' : 'password'} placeholder="" />
								{show ? (
									<img className="eye" src="assets/png/eye-off.png" alt="" onClick={showPassword} />
								) : (
									<img className="eye" src="assets/png/eye.png" alt="" onClick={showPassword} />
								)}
							</div>
						</div>
						<span>* Write us a comment</span>
						<div className="comment">
							<input className="textComment" type="text" />
						</div>
						<div className="bottom">
							<div className="agree">
								<input type="checkbox" />
								<span>*I agree that my data will be collected</span>
							</div>

							<div
								className={loading ? 'button loading' : submit ? 'button submit' : 'button'}
								onClick={handleSubmit}
							>
								{loading ? (
									<div class="spinner">
										<span class="spinner-inner-1" />
										<span class="spinner-inner-2" />
										<span class="spinner-inner-3" />
									</div>
								) : (
									''
								)}
								<span>{buttonText}</span>
								{loading || submit ? '' : <img src="assets/png/chevronbutton.png" alt="" />}
								{submit && !loading ? <img src="assets/svg/check.svg" alt="" /> : ''}
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
};

export default Contact;
