import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import { Parallax } from 'react-parallax';

import bg from '../assets/images/content/bg/1.jpg';
import logo from '../assets/images/logo.png';
import featuresLeft from '../assets/images/content/landing/feature-2-left.png';
import featuresRight from '../assets/images/content/landing/feature-2-right.png';
import google from '../assets/images/google-store.png';
import apple from '../assets/images/apple-store.png';

class Header extends Component {
	_handleEnter = () => {
		$('#navigation').removeClass('affix');
	};

	_handleLeave = () => {
		$('#navigation').addClass('affix');
	};
	
	_show = () => {
		$('#header .animation').each(function() {
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

	componentDidMount() {
		$('.nav-menu-toggle').on('click', function() {
			$(this).parent('.nav-menu-button').prev('.nav-menu-links').slideToggle(300);
		});

		$('a.smooth-scroll').on('click', function(event) {
			let $anchor	= $(this);
			let offsetTop = parseInt($($anchor.attr('href')).offset().top - 35, 0);
			
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 1500);
			
			event.preventDefault();
		});
	}
	
	
	render() {
		return (
			<Parallax bgImage={bg} strength={500}>
				<nav id="navigation_mobile">
					<div className="nav-menu-links">
						<Scrollspy items={['header', 'features', 'contact']} currentClassName="active" offset={71}>
							<li><a href="#header" className="smooth-scroll">Home</a></li>
							<li><a href="#features" className="smooth-scroll">Features</a></li>
							<li><a href="#contact" className="smooth-scroll">Contact Us</a></li>
						</Scrollspy>
					</div>
					<div className="nav-menu-button">
						<button className="nav-menu-toggle"><i className="fa fa-navicon"/></button>
					</div>
				</nav>
				<Waypoint onEnter={this._show}>
					<header id="header">
						<nav id="navigation" className="navbar scrollspy affix">
							<div className="container">
								<div className="navbar-brand">
									<Link to="/"><img src={logo} alt=""/></Link>
								</div>
								<Scrollspy className="nav navbar-nav" items={['header', 'features', 'contact']} currentClassName="active" offset={71}>
									<li><a href="#header" className="smooth-scroll">Home</a></li>
									<li><a href="#features" className="smooth-scroll">Features</a></li>
									<li><a href="#contact" className="smooth-scroll">Contact Us</a></li>
								</Scrollspy>
							</div>
						</nav>
						<Waypoint onEnter={this._handleEnter} onLeave={this._handleLeave}/>
						<div className="header-content">
							<div className="container">
								<div className="row">
									<div className="col-md-7">
										<div className="header-txt">
											<h1>Make your Startup web with our template</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elita duis massa enim nut maximus et nisi at pellentesque. Proin vel dictum nisi donec quis gravida elit, quis tincidunt turpis malesuada.</p>
											<div className="header-btn">
												<a href="https://" className="a-button" target="_blank" rel="noopener noreferrer">
													<img src={google} alt="" />
												</a>
												<a href="https://" className="a-button" target="_blank" rel="noopener noreferrer">
													<img src={apple} alt="" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-sm-8 col-md-5 col-lg-4 col-sm-offset-2 col-md-offset-0 col-lg-offset-1 header-img-wrap">
										<figure className="header-img img-layer-left-front">
											<div className="img-layer-left">
												<img src={featuresLeft} alt="" className="animation" data-animation="animation-fade-in-left"/>
											</div>
											<div className="img-layer-right">
												<img src={featuresRight} alt="" className="animation" data-animation="animation-fade-in-right" data-delay="400"/>
											</div>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</header>
				</Waypoint>
			</Parallax>
		);
	}
}

export default Header;
