import axios from 'axios';

const getBaseUrl = (): string => {
	const { hostname } = window.location;
	switch (hostname) {
		case 'localhost': {
			return 'http://localhost:3000/';
		}
		default: {
			return 'https://task-calendar-backend-j90nst9pe-jhonnk08s-projects.vercel.app';
		}
	}
};

export const api = axios.create({
	baseURL: getBaseUrl()
});
