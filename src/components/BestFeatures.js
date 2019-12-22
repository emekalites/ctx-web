import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';

class BestFeatures extends Component {
	_handleEnter = () => {
		$('#features3 .animation').each(function() {
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
				<div id="features3" className="bg-color bg-dark container-padding12080">
					<div className="container">
						<div className="post-heading-center">
							<h2>Best Features</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lut rhoncus sapien vitae purus rhoncus. Eget lacinia nulla viverra sed num purus mauris.</p>
						</div>
						<div className="row">
							<div className="col-sm-3">
								<div className="affa-feature-icon">
									<i className="fa fa-map animation" data-animation="animation-fade-in-down"></i>
									<h4>The best support we provide</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="affa-feature-icon">
									<i className="fa fa-heartbeat animation" data-animation="animation-fade-in-down" data-delay="300"></i>
									<h4>Build with Heart</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="affa-feature-icon">
									<i className="fa fa-pie-chart animation" data-animation="animation-fade-in-down" data-delay="600"></i>
									<h4>Go Dashboard Controller</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="affa-feature-icon">
									<i className="fa fa-send animation" data-animation="animation-fade-in-down" data-delay="900"></i>
									<h4>Backup via Email and Cloud</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Waypoint>
		);
	}
}

export default BestFeatures;