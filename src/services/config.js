
export const DEBUG_MODE = process.env.REACT_APP_DEBUG;
export const BASE_API = process.env.REACT_APP_URL;
if (DEBUG_MODE === 'true') {
	console.log(`debug: ${DEBUG_MODE}`);
}

export const API_URI = `${BASE_API}/api`;
export const contactUsAPI = '/enquiry/submit';
