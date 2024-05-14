import axios from 'axios';

const getBaseUrl = (): string => {
	const { hostname } = window.location;
	switch (hostname) {
		case 'localhost': {
			return 'http://localhost:3000/';
		}
		case 'https://jhonnk08.github.io/task-calendar': {
			return 'https://task-calendar-backend.vercel.app';
		}
		default: {
			throw new Error('Hostname not found');
		}
	}
};

export const api = axios.create({
	baseURL: getBaseUrl()
});
