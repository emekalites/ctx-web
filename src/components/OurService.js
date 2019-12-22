import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';

import speechBubble from '../assets/images/content/icon/speech-bubble-6.png';

class OurService extends Component {
	_handleEnter = () => {
		$('#features4 .animation').each(function() {
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
			<Waypoint onEnter={this._handleEnter}>
				<div id="features4" className="container-padding10060">
					<div className="container">
						<div className="row-custom">
							<div className="col-left">
								<div className="affa-feature-icon-left">
									<i className="fa fa-support animation" data-animation="animation-fade-in-left"></i>
									<h4>Quality Support</h4>
									<p>Proident scelerisque sollicitudin dictum. Erat molestie, pretium augue, consequat dui quis nulla aliquet id laborum.</p>
								</div>
								<div className="affa-feature-icon-left">
									<i className="fa fa-clock-o animation" data-animation="animation-fade-in-left"></i>
									<h4>24/7 Support</h4>
									<p>Proident scelerisque sollicitudin dictum. Erat molestie, pretium augue, consequat dui quis nulla aliquet id laborum.</p>
								</div>
								<div className="affa-feature-icon-left">
									<i className="fa fa-whatsapp animation" data-animation="animation-fade-in-left"></i>
									<h4>Free Chat and Call</h4>
									<p>Proident scelerisque sollicitudin dictum. Erat molestie, pretium augue, consequat dui quis nulla aliquet id laborum.</p>
								</div>
							</div>
							<div className="col-center">
								<div className="post-heading-center margin-bottom40">
									<h2>Our Service?</h2>
								</div>
								<figure className="margin-bottom40 animation" data-animation="animation-fade-in-down" data-delay="300">
									<img src={speechBubble} alt=""/>
								</figure>
							</div>
							<div className="col-right">
								<div className="affa-feature-icon-right">
									<i className="fa fa-smile-o animation" data-animation="animation-fade-in-right"></i>
									<h4>Happy Customers</h4>
									<p>Proident scelerisque sollicitudin dictum. Erat molestie, pretium augue, consequat dui quis nulla aliquet id laborum.</p>
								</div>
								<div className="affa-feature-icon-right">
									<i className="fa fa-star animation" data-animation="animation-fade-in-right"></i>
									<h4>5 Stars Support</h4>
									<p>Proident scelerisque sollicitudin dictum. Erat molestie, pretium augue, consequat dui quis nulla aliquet id laborum.</p>
								</div>
								<div className="affa-feature-icon-right">
									<i className="fa fa-shield animation" data-animation="animation-fade-in-right"></i>
									<h4>Premium Service</h4>
									<p>Proident scelerisque sollicitudin dictum. Erat molestie, pretium augue, consequat dui quis nulla aliquet id laborum.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Waypoint>
		);
	}
}

export default OurService;