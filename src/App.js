import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import ScrollToTop from './containers/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const NoMatch = lazy(() => import('./pages/NoMatch'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

class App extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	render() {
		return (
			<ScrollToTop>
				<Suspense fallback={<div className="hide">loading</div>}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/privacy-policy" component={PrivacyPolicy} />
						<Route exact path="/terms-and-conditions" component={Terms} />
						<Route component={NoMatch} />
					</Switch>
				</Suspense>
			</ScrollToTop>
		);
	}
}

export default App;
