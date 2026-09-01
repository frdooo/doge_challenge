import { useState, useEffect } from 'react';
import './contact.scss';
import axios from 'axios';
import confetti from 'canvas-confetti';
import { Send, CheckCircle, AlertCircle, Calendar, Globe, Mail, User, MessageSquare, Sparkles } from 'lucide-react';

const fallbackCountries = [
	{ name: 'United States', code: 'US', flag: '🇺🇸' },
	{ name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
	{ name: 'Canada', code: 'CA', flag: '🇨🇦' },
	{ name: 'Germany', code: 'DE', flag: '🇩🇪' },
	{ name: 'France', code: 'FR', flag: '🇫🇷' },
	{ name: 'Japan', code: 'JP', flag: '🇯🇵' },
	{ name: 'Australia', code: 'AU', flag: '🇦🇺' },
	{ name: 'Singapore', code: 'SG', flag: '🇸🇬' },
	{ name: 'Switzerland', code: 'CH', flag: '🇨🇭' },
	{ name: 'Netherlands', code: 'NL', flag: '🇳🇱' }
];

const inquiryTypes = [
	'Frontend & Parallax Web App',
	'Brand Identity & Design System',
	'Studio Pet Photography Shoot',
	'Full-Stack Custom Platform',
	'General Inquiry / Hello'
];

export default function Contact() {
	const [countries, setCountries] = useState(fallbackCountries);
	const [form, setForm] = useState({
		name: '',
		email: '',
		country: 'United States',
		inquiryType: 'Frontend & Parallax Web App',
		timelineDate: '',
		message: ''
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		let isMounted = true;
		const fetchCountries = async () => {
			try {
				const res = await axios.get('https://restcountries.com/v3.1/all?fields=name,cca2,flag', {
					timeout: 4000
				});
				if (isMounted && res.data && Array.isArray(res.data) && res.data.length > 0) {
					const mapped = res.data
						.map((c) => ({
							name: c.name?.common || 'Unknown',
							code: c.cca2 || 'XX',
							flag: c.flag || '🌐'
						}))
						.sort((a, b) => a.name.localeCompare(b.name));
					setCountries(mapped);
				}
			} catch (err) {
				console.warn('Using built-in fallback country list');
			}
		};

		fetchCountries();
		return () => {
			isMounted = false;
		};
	}, []);

	const validate = () => {
		const newErrors = {};
		if (!form.name.trim()) {
			newErrors.name = 'Please provide your full name.';
		}
		if (!form.email.trim()) {
			newErrors.email = 'Please enter your email address.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
		}
		if (!form.message.trim() || form.message.length < 10) {
			newErrors.message = 'Please provide at least 10 characters describing your project.';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: null }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;

		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			confetti({
				particleCount: 50,
				spread: 70,
				origin: { y: 0.6 },
				colors: ['#ba723d', '#f8ccab', '#ff7a45', '#2ed573']
			});
		}, 800);
	};

	const handleReset = () => {
		setForm({
			name: '',
			email: '',
			country: 'United States',
			inquiryType: 'Frontend & Parallax Web App',
			timelineDate: '',
			message: ''
		});
		setIsSubmitted(false);
		setErrors({});
	};

	return (
		<section className="contact" id="contact">
			<div className="section-container">
				<div className="section-header">
					<div className="eyebrow">
						<span className="dot" />
						<span>06 / GET IN TOUCH</span>
					</div>
					<h2 className="section-title">Let's Build Something Memorable</h2>
					<div className="accent-bar" />
					<p className="section-intro">
						Whether you have a specific product in mind, need interactive parallax engineering, or want to collaborate with our studio, drop us a line below.
					</p>
				</div>

				<div className="contact-grid">
					{/* Left Info Column */}
					<div className="info-panel">
						<div className="info-card">
							<h3 className="panel-title">Doge Agency Studio</h3>
							<p className="panel-desc">
								Crafting bespoke digital solutions, WebGL experiences, and brand ecosystems since 2021.
							</p>

							<div className="contact-details">
								<div className="detail-item">
									<Mail size={18} className="detail-icon" />
									<div>
										<strong>Direct Inquiries</strong>
										<span>hello@dogecreative.agency</span>
									</div>
								</div>

								<div className="detail-item">
									<Globe size={18} className="detail-icon" />
									<div>
										<strong>Global Presence</strong>
										<span>San Francisco • Tokyo • Remote</span>
									</div>
								</div>

								<div className="detail-item">
									<Sparkles size={18} className="detail-icon" />
									<div>
										<strong>Response Time</strong>
										<span>Within 24 business hours guaranteed</span>
									</div>
								</div>
							</div>

							<div className="doge-quote-box">
								<p>"Much creativity, very deliverables, wow."</p>
								<span>— Chief Happiness Shibe</span>
							</div>
						</div>
					</div>

					{/* Right Form Column */}
					<div className="form-panel">
						{isSubmitted ? (
							<div className="success-card">
								<div className="success-icon">
									<CheckCircle size={48} color="#ba723d" />
								</div>
								<h3>Thank you, {form.name}!</h3>
								<p>
									Your inquiry for <strong>{form.inquiryType}</strong> has been received. Our team will review your project requirements and follow up at <strong>{form.email}</strong> shortly.
								</p>
								<button type="button" className="btn-reset" onClick={handleReset}>
									Send Another Message
								</button>
							</div>
						) : (
							<form className="contact-form" onSubmit={handleSubmit} noValidate>
								<div className="form-row">
									{/* Name */}
									<div className={`form-group ${errors.name ? 'has-error' : ''}`}>
										<label htmlFor="name">
											<User size={15} />
											<span>Your Name *</span>
										</label>
										<input
											id="name"
											name="name"
											type="text"
											placeholder="Jane Doe"
											value={form.name}
											onChange={handleChange}
										/>
										{errors.name && (
											<div className="error-msg">
												<AlertCircle size={13} />
												<span>{errors.name}</span>
											</div>
										)}
									</div>

									{/* Email */}
									<div className={`form-group ${errors.email ? 'has-error' : ''}`}>
										<label htmlFor="email">
											<Mail size={15} />
											<span>Email Address *</span>
										</label>
										<input
											id="email"
											name="email"
											type="email"
											placeholder="jane@company.com"
											value={form.email}
											onChange={handleChange}
										/>
										{errors.email && (
											<div className="error-msg">
												<AlertCircle size={13} />
												<span>{errors.email}</span>
											</div>
										)}
									</div>
								</div>

								<div className="form-row">
									{/* Country */}
									<div className="form-group">
										<label htmlFor="country">
											<Globe size={15} />
											<span>Country / Region</span>
										</label>
										<select
											id="country"
											name="country"
											value={form.country}
											onChange={handleChange}
										>
											{countries.map((c, i) => (
												<option key={`${c.code}-${i}`} value={c.name}>
													{c.flag} {c.name}
												</option>
											))}
										</select>
									</div>

									{/* Target Date */}
									<div className="form-group">
										<label htmlFor="timelineDate">
											<Calendar size={15} />
											<span>Desired Target Date</span>
										</label>
										<input
											id="timelineDate"
											name="timelineDate"
											type="date"
											value={form.timelineDate}
											onChange={handleChange}
										/>
									</div>
								</div>

								{/* Inquiry Type */}
								<div className="form-group">
									<label>
										<Sparkles size={15} />
										<span>Project Scope / Inquiry Type</span>
									</label>
									<div className="inquiry-pills">
										{inquiryTypes.map((type) => (
											<button
												key={type}
												type="button"
												className={`pill-btn ${form.inquiryType === type ? 'active' : ''}`}
												onClick={() => setForm((prev) => ({ ...prev, inquiryType: type }))}
											>
												{type}
											</button>
										))}
									</div>
								</div>

								{/* Message */}
								<div className={`form-group ${errors.message ? 'has-error' : ''}`}>
									<label htmlFor="message">
										<MessageSquare size={15} />
										<span>Project Overview & Vision *</span>
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										placeholder="Tell us about your goals, target audience, preferred timeline, or technical requirements..."
										value={form.message}
										onChange={handleChange}
									/>
									{errors.message && (
										<div className="error-msg">
											<AlertCircle size={13} />
											<span>{errors.message}</span>
										</div>
									)}
								</div>

								{/* Submit Button */}
								<button
									type="submit"
									className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
									disabled={isSubmitting}
								>
									<Send size={18} />
									<span>{isSubmitting ? 'Sending Transmission...' : 'Send Inquiry'}</span>
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
