import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo_footer.png';

class Footer extends Component {
	_handleEnter = () => {
		$('#footer .animation').each(function() {
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

	render() {
		return (
			<footer id="footer">
				<Waypoint onEnter={this._handleEnter}>
					<div className="container">
						<div className="footer-logo animation" data-animation="animation-fade-in-down"><img src={logo} alt=""/></div>
						<div className="footer-socials">
							<a href="https://" title="Facebook" className="animation" data-animation="animation-bounce-in"><i className="fa fa-facebook"/></a>
							<a href="https://" title="Twitter" className="animation" data-animation="animation-bounce-in" data-delay="200"><i className="fa fa-twitter"/></a>
							<a href="https://" title="Instagram" className="animation" data-animation="animation-bounce-in" data-delay="400"><i className="fa fa-instagram"/></a>
						</div>
						<div className="footer-links">
							<Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-and-conditions">Terms and Conditions</Link>
						</div>
					</div>
				</Waypoint>
				<div className="footer-copyright">
					<div className="container">
						<p>&copy; 2019 Copyright, HelpPay Inc. All Rights Reserved.</p>
						{/*  <br/>Maintained by <a href="https://eelis.ltd" target="_blank" rel="noopener noreferrer">Eelis Tech.</a> */}
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;