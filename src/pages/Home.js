import React, { Component } from 'react';

import Header from '../components/Header';
import Features from '../components/Features';
import FeaturesMore from '../components/FeaturesMore';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import BestFeatures from '../components/BestFeatures';
import OurService from '../components/OurService';

class Home extends Component {
	render() {
		return (
			<>
				<Header />
				<Features />
				<FeaturesMore />
				<BestFeatures />
				<OurService />
				<ContactForm />
				<Footer />
			</>
		);
	}
}

export default Home;
