import React from 'react';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import notfound from '../assets/images/404.png';

const NoMatch = () => {
	return (
		<>
			<PageHeader />
			<div className="not-found">
				<div className="container">
					<div className="img">
						<img src={notfound} alt=""/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NoMatch;
