import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import logo from '../assets/images/logo.png';

class PageHeader extends Component {
	componentDidMount() {
		$('.nav-menu-toggle').on('click', function() {
			$(this).parent('.nav-menu-button').prev('.nav-menu-links').slideToggle(300);
		});
	}

	render() {
		const { title } = this.props;
		return (
			<header id="header" className="header-page">
				<nav id="navigation_mobile">
					<div className="nav-menu-links">
						<ul>
							<li><Link to="/">Home</Link></li>
						</ul>
					</div>
					<div className="nav-menu-button">
						<button className="nav-menu-toggle"><i className="fa fa-navicon"/></button>
					</div>
				</nav>
				<nav id="navigation" className="navbar scrollspy">
					<div className="container">
						<div className="navbar-brand">
							<Link to="/"><img src={logo} alt="Logo"/></Link>
						</div>
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
						</ul>
					</div>
				</nav>
				{title && (
					<div className="mini-header">
						<div className="container">
							<h1 className="entry-title">{title}</h1>
						</div>
					</div>
				)}
			</header>
		);
	}
}

export default PageHeader;