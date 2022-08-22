import axios from 'axios'

export const axiosClient = (headers = {}) => {
	return axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		validateStatus: () => true,
		timeout: 60000,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...headers
		}
	})
}
