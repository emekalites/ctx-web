import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';

import feature1 from '../assets/images/content/landing/feature-1.png';
import feature2 from '../assets/images/content/landing/feature-2-left.png';
import feature3 from '../assets/images/content/landing/feature-2-right.png';

class FeaturesMore extends Component {
	_handleEnter = () => {
		$('#features2 .animation').each(function() {
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
				<div id="features2" className="padding-top120">
					<div className="container">
						<div className="row padding-bottom60">
							<div className="col-sm-10 col-md-7 col-lg-6 col-sm-offset-1 col-md-offset-0 text-center-sm text-center-xs">
								<figure className="margin-bottom40 animation" data-animation="animation-fade-in-left">
									<img src={feature1} alt=""/>
								</figure>
							</div>
							<div className="col-sm-10 col-md-5 col-lg-6 col-sm-offset-1 col-md-offset-0">
								<div className="text-wrap40 margin-bottom40 text-center-sm text-center-xs">
									<div className="post-heading-left">
										<h2>We Are <span>Change Transact (CTX)</span></h2>
									</div>
									<p className="margin-bottom30">we have created an app for us by us. We say by us because we have personally experienced the same issues that users have:</p>
									<ul>
										<li>Low exchange rates</li>
										<li>Transaction fees/High transaction fees</li>
										<li>Long delays on delivery</li>
									</ul>
									<p>Our goal at CTX is to make sending money to Nigeria as easy and seamless as possible. Our founders currently reside in the United States and were tired of paying unnecessarily exorbitant transaction fees to send money home. Additionally, the transaction could and would arrive 3 days later and our loved ones would have to travel far distances to pick up the money.</p>
									<p>With CTX, funds can be sent directly to the recipient’s account by simply using our app, and funds are delivered in 45 seconds or less; and the best part, its free!!</p>
									<p>We have perfected the Nigerian market and are currently working on moving to other countries.</p>
								</div>
							</div>
						</div>
						<div className="row container-wrap">
							<div className="col-sm-10 col-md-5 col-lg-6 col-sm-offset-1 col-md-offset-0">
								<div className="text-wrap100 margin-bottom20">
									<div className="post-heading-left text-center-sm text-center-xs">
										<h2>Standart Features</h2>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dui quis tortor mollis feugiat. In luctus ornare turpis. Donec nec auctor tortor, sit amet vehicula dui. In odio dignissim, eleifend lorem id, consectetur nisi.</p>
									<div className="list-row">
										<div className="list-col">
											<ul className="list-icon">
												<li><i className="fa fa-check-square-o"></i> Meeting time</li>
												<li><i className="fa fa-check-square-o"></i> Invite people</li>
												<li><i className="fa fa-check-square-o"></i> Share location</li>
												<li><i className="fa fa-check-square-o"></i> Reminder</li>
											</ul>
										</div>
										<div className="list-col">
											<ul className="list-icon">
												<li><i className="fa fa-check-square-o"></i> Notification by email</li>
												<li><i className="fa fa-check-square-o"></i> List of meeting materials</li>
												<li><i className="fa fa-check-square-o"></i> Made very important</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-10 col-md-7 col-lg-6 col-sm-offset-1 col-md-offset-0">
								<figure className="img-layers img-layer-left-front">
									<div className="img-layer-left">
										<img src={feature2} alt="" className="animation" data-animation="animation-fade-in-up"/>
									</div>
									<div className="img-layer-right">
										<img src={feature3} alt="" className="animation" data-animation="animation-fade-in-up" data-delay="400"/>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</Waypoint>
		);
	}
}

export default FeaturesMore;