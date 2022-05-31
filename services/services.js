import axios from 'axios';


const ApiUrl = 'https://api.themoviedb.org'
const ApiKey = '283bf3f22f7ce6d2d1f9043a8b429b91'
export  const getPopularMovies =  async () => {
    const resp =await axios.get(`${ApiUrl}/3/movie/popular${ApiKey}`);
    return resp.data.results;
};


const getUpcomingMovies = async () =>{
    const resp = await axios.get(`${ApiUrl}/3/movie/upcoming${ApiKey}`)
}