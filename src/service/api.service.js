// import axios from 'axios'


// const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
// const RAPID_API_URL= process.env.REACT_APP_PUBLIC_KEY
// const options = {
//   params: {
//     maxResults: '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': RAPID_API_URL.toString(),
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// //   async await
// export const ApiService ={
//     async fetching(url){
//         const response = await axios.get(`${BASE_URL}/${url}`, options )
//         return response.data
//     },
// }
import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'


const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key':'80a67b8dabmsh0e1adc96ab86dc9p15fdb7jsn6697e239e057' ,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}