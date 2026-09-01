import { useState, useEffect } from 'react';
import axios from 'axios';
import './contact.scss';
import { Mail, MapPin, Send, CheckCircle2, User, Globe, MessageSquare } from 'lucide-react';

const fallbackCountries = [
	'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
	'France', 'Japan', 'Sweden', 'Netherlands', 'Italy', 'Spain', 'Switzerland'
];

export default function Contact() {
	const [countries, setCountries] = useState(fallbackCountries);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		country: 'United States',
		projectType: 'Web Experience',
		message: ''
	});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const res = await axios.get('https://restcountries.com/v3.1/all?fields=name');
				if (Array.isArray(res.data)) {
					const names = res.data
						.map((c) => c.name?.common)
						.filter(Boolean)
						.sort((a, b) => a.localeCompare(b));
					if (names.length > 0) setCountries(names);
				}
			} catch (err) {
				console.warn('Using default country list.', err);
			}
		};
		fetchCountries();
	}, []);

	const validate = () => {
		const errs = {};
		if (!formData.name.trim()) errs.name = 'Full name is required';
		if (!formData.email.trim()) {
			errs.email = 'Email address is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errs.email = 'Please enter a valid email address';
		}
		if (!formData.message.trim()) errs.message = 'Please provide details about your project';
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;

		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSubmitted(true);
		}, 800);
	};

	const resetForm = () => {
		setFormData({
			name: '',
			email: '',
			country: 'United States',
			projectType: 'Web Experience',
			message: ''
		});
		setSubmitted(false);
		setErrors({});
	};

	return (
		<section className="contact" id="contact">
			<div className="section-container">
				{/* Section Header */}
				<div className="section-header">
					<span className="section-kicker">Get In Touch</span>
					<h2 className="section-title">Start a Project</h2>
					<p className="section-intro">
						Tell us about your upcoming project, brand vision, or timeline. We respond to every inquiry within one business day.
					</p>
				</div>

				<div className="contact-grid">
					{/* Left Info Panel */}
					<div className="info-panel">
						<div className="info-card">
							<h3 className="panel-title">Studio Inquiries</h3>
							<p className="panel-desc">
								Whether you need a bespoke interactive frontend, complete brand identity, or creative direction, let's discuss how we can partner.
							</p>

							<div className="contact-details">
								<div className="detail-item">
									<Mail size={18} className="detail-icon" />
									<div>
										<strong>Direct Inquiries</strong>
										<span>hello@dogeagency.studio</span>
									</div>
								</div>

								<div className="detail-item">
									<MapPin size={18} className="detail-icon" />
									<div>
										<strong>Primary Studio</strong>
										<span>San Francisco & Remote Worldwide</span>
									</div>
								</div>
							</div>

							<div className="studio-note-box">
								<p>Open for selected client partnerships across 2026.</p>
							</div>
						</div>
					</div>

					{/* Right Form Panel */}
					<div className="form-panel">
						{submitted ? (
							<div className="success-card">
								<CheckCircle2 size={52} color="#ba723d" className="success-icon" />
								<h3>Message Received</h3>
								<p>
									Thank you, <strong>{formData.name}</strong>. We have received your inquiry for <strong>{formData.projectType}</strong> and will be in touch shortly.
								</p>
								<button type="button" className="btn-reset" onClick={resetForm}>
									Send Another Inquiry
								</button>
							</div>
						) : (
							<form className="contact-form" onSubmit={handleSubmit} noValidate>
								<div className="form-row">
									<div className={`form-group ${errors.name ? 'has-error' : ''}`}>
										<label htmlFor="name">
											<User size={15} />
											<span>Your Name *</span>
										</label>
										<input
											id="name"
											type="text"
											placeholder="Jane Doe"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										/>
										{errors.name && <span className="error-msg">{errors.name}</span>}
									</div>

									<div className={`form-group ${errors.email ? 'has-error' : ''}`}>
										<label htmlFor="email">
											<Mail size={15} />
											<span>Email Address *</span>
										</label>
										<input
											id="email"
											type="email"
											placeholder="jane@company.com"
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										/>
										{errors.email && <span className="error-msg">{errors.email}</span>}
									</div>
								</div>

								<div className="form-row">
									<div className="form-group">
										<label htmlFor="country">
											<Globe size={15} />
											<span>Location / Country</span>
										</label>
										<select
											id="country"
											value={formData.country}
											onChange={(e) => setFormData({ ...formData, country: e.target.value })}
										>
											{countries.map((c, i) => (
												<option key={i} value={c}>
													{c}
												</option>
											))}
										</select>
									</div>

									<div className="form-group">
										<label>
											<span>Project Type</span>
										</label>
										<div className="inquiry-pills">
											{['Web Experience', 'Brand Identity', 'Photography', 'Other'].map((type) => (
												<button
													key={type}
													type="button"
													className={`pill-btn ${formData.projectType === type ? 'active' : ''}`}
													onClick={() => setFormData({ ...formData, projectType: type })}
												>
													{type}
												</button>
											))}
										</div>
									</div>
								</div>

								<div className={`form-group ${errors.message ? 'has-error' : ''}`}>
									<label htmlFor="message">
										<MessageSquare size={15} />
										<span>Project Details & Scope *</span>
									</label>
									<textarea
										id="message"
										rows={4}
										placeholder="Tell us about your project goals, timelines, and requirements..."
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									/>
									{errors.message && <span className="error-msg">{errors.message}</span>}
								</div>

								<button
									type="submit"
									className={`btn-submit ${loading ? 'submitting' : ''}`}
									disabled={loading}
								>
									<span>{loading ? 'Sending Details...' : 'Send Inquiry'}</span>
									<Send size={16} />
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
