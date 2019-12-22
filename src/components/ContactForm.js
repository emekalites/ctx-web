import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';

import phone from '../assets/images/content/icon/phone-call-6.png';
import emailIcn from '../assets/images/content/icon/mail-2.png';
import address from '../assets/images/content/icon/map-19.png';
import waiting from '../assets/images/waiting.gif';
import { HttpRequest, validateEmail } from '../services/utilities';
import { API_URI, contactUsAPI } from '../services/config';

class ContactForm extends Component {
	state = {
		error: '', 
		success: '',
		submitting: false,
		name: '',
		email: '',
		message: '',
	};
	
	_handleEnter = () => {
		$('#contact .animation').each(function() {
			let $element = $(this);
			let delay = 0;
			if ($element.attr('data-delay')) {
				delay = parseInt($element.attr('data-delay'), 0);
			}
			if (!$element.hasClass('animated')) {
				setTimeout(function() {
					$element.addClass('animated ' + $element.attr('data-animation'));
				}, delay);
			}
			delay = 0;
		});
	};

	submitForm = async e => {
		e.preventDefault();
		const { name, email, message } = this.state;

		this.setState({ error: '', success: '' });
		if(name === ''){
			this.setState({ error: 'your name is important', success: '' });
			return false;
		} else if(name !== '' && name.length <= 3) {
			this.setState({ error: 'your name is too short', success: '' });
			return false;
		} else if (email === '') {
			this.setState({ error: 'your email is important', success: '' });
			return false;
		} else if (email !== '' && !validateEmail(email)) {
			this.setState({ error: 'your email is not valid', success: '' });
			return false;
		} else if(message === '') {
			this.setState({ error: 'you should not send an empty message', success: '' });
			return false;
		}

		try {
			const data = { name, email, message };
			this.setState({ submitting: true });
			const rs = await HttpRequest(`${API_URI}${contactUsAPI}`, 'POST', true, data);
			if (rs && rs.return) {
				this.setState({
					error: '',
					success: 'Thanks for contacting us, a staff will reach out to you soon',
					submitting: false,
					name: '',
					email: '',
					message: '',
				});
			} else {
				this.setState({ error: 'email sending failed', success: '', submitting: false });
			}
		} catch (e) {
			this.setState({ error: e.message || 'email sending failed', success: '', submitting: false });
		}
	};

	onChange = (e, type) => {
		const inputText = e.target.value;
		this.setState({ [type]: inputText });
	};

	render() {
		const { error, success, submitting, name, email, message } = this.state;
		return (
			<div id="contact" className="container-padding10060">
				<div className="container">
					<div className="post-heading-center">
						<h2>Keep in <span>Touch</span></h2>
					</div>
					<div className="row">
						<div className="col-sm-7 margin-bottom40">
							<form className="affa-form-contact" onSubmit={this.submitForm}>
								{error !== '' && <div className="alert alert-danger alert-dismissable" dangerouslySetInnerHTML={{__html: `<strong>Error! </strong> ${error}<button type="button" class="close"><span aria-hidden="true">&times;</span></button>`}}/>}
								{success !== '' && <div className="alert alert-success alert-dismissable" dangerouslySetInnerHTML={{__html: `<strong>${success}</strong><button type="button" class="close"><span aria-hidden="true">&times;</span></button>`}}/>}
								<input type="text" name="name" placeholder="Your Name *" value={name} onChange={(e) => this.onChange(e, 'name')}/>
								<input type="text" name="email" placeholder="Email Address *" value={email} onChange={(e) => this.onChange(e, 'email')}/>
								<textarea name="message" placeholder="Message *" onChange={(e) => this.onChange(e, 'message')} value={message}/>
								<div className="form-contact-submit">
									<button disabled={submitting} className="btn-submit" type="submit">{submitting ? <img src={waiting} alt=""/> : 'Send Message'}</button>
								</div>
							</form>
						</div>
						<Waypoint onEnter={this._handleEnter}>
							<div className="col-sm-5 col-lg-4 col-lg-offset-1">
								<div className="affa-contact-info">
									<img src={phone} alt="Icon" className="animation" data-animation="animation-fade-in-left"/>
									<h4>Phone Number</h4>
									<p>(00) 123-4567890 (tel-1)</p>
								</div>
								<div className="affa-contact-info">
									<img src={emailIcn} alt="Icon" className="animation" data-animation="animation-fade-in-left"/>
									<h4>Email Address</h4>
									<p>support@changetransact.com</p>
								</div>
								<div className="affa-contact-info">
									<img src={address} alt="Icon" className="animation" data-animation="animation-fade-in-left"/>
									<h4>Business Address</h4>
									<p>123 Main Street Cottage, US</p>
									<p>Long Branch, P.O Box 65148</p>
								</div>
							</div>
						</Waypoint>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactForm;