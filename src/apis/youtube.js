import axios from 'axios';

const KEY = 'AIzaSyC3cF-RVg9axGI0oScsm5Vup1tSUwBIwuo';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
