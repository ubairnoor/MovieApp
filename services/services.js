import axios from 'axios';


const ApiUrl = 'https://api.themoviedb.org/3'
const ApiKey = 'api_key=283bf3f22f7ce6d2d1f9043a8b429b91'
export  const getPopularMovies =  async () => {
    const resp =await axios.get(`${ApiUrl}/movie/popular?${ApiKey}`);
    console.log(resp)
    return resp.data.results;
};


export const getUpcommingMovies = async () =>{
    const resp = await axios.get(`${ApiUrl}/movie/upcoming?${ApiKey}`)
    return resp.data.results;
}

