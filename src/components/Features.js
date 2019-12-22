import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';

import professionalImg from '../assets/images/content/icon/list-5.png';
import connectImg from '../assets/images/content/icon/map-7.png';
import expertImg from '../assets/images/content/icon/user-25.png';

class Featured extends Component {
	_handleEnter = () => {
		$('#features .animation').each(function() {
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
				<div id="features" className="bg-grey container-padding8040">
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="affa-feature-img">
									<img src={professionalImg} alt="Icon" className="animation" data-animation="animation-fade-in-down"/>
									<h4>Professional Brand</h4>
									<p>
										Lorem ipsum dolor sit ametus, consectetur adipiscing elit.
										Praesent at dui quis tortor mollis feugiat. In luctus ornare
										turpis. Donec nec auctor tortor, sit amet vehicula dui.
									</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="affa-feature-img">
									<img src={connectImg} alt="Icon" className="animation" data-animation="animation-fade-in-down" data-delay="300"/>
									<h4>Connect Everywhere</h4>
									<p>Lorem ipsum dolor sit ametus, consectetur adipiscing elit. Praesent at dui quis tortor mollis feugiat. In luctus ornare turpis. Donec nec auctor tortor, sit amet vehicula dui.</p>
								</div>
							</div>
							<div className="col-sm-4"> 
								<div className="affa-feature-img">
									<img src={expertImg} alt="Icon" className="animation" data-animation="animation-fade-in-down" data-delay="600"/>
									<h4>Expert People</h4>
									<p>Lorem ipsum dolor sit ametus, consectetur adipiscing elit. Praesent at dui quis tortor mollis feugiat. In luctus ornare turpis. Donec nec auctor tortor, sit amet vehicula dui.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Waypoint>
		);
	}
}

export default Featured;