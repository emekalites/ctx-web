const checkStatus = async response => {
	if (!response.ok) {
		const message = await response.text();
		const err = JSON.parse(message);
		throw Object.freeze({ message: err.error });
	}
	return response;
};

const parseJSON = response => response.json();

const defaultHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export const HttpRequest = async (url, method, authed = false, data) => {
	const response = await fetch(url, {
		method: method,
		headers: { ...defaultHeaders },
		body: JSON.stringify(data),
	});
	const result = await checkStatus(response);
	return parseJSON(result);
};

export const validateEmail = email => {
	const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regexp.test(email);
};