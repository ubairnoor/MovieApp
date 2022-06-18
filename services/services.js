import axios from 'axios';


const ApiUrl = 'https://api.themoviedb.org/3'
const ApiKey = 'api_key=283bf3f22f7ce6d2d1f9043a8b429b91'


export  const getPopularMovies =  async () => {
    const resp =await axios.get(`${ApiUrl}/movie/popular?${ApiKey}`);
     return resp.data.results;
};
export const getUpcommingMovies = async () =>{
    const resp = await axios.get(`${ApiUrl}/movie/upcoming?${ApiKey}`)
    // console.log("Resp of upcoming",resp.data.results)
    return resp.data.results;
}

export const getTopRatedMovies =  async() =>{
    const resp = await axios.get(`${ApiUrl}/movie/top_rated?${ApiKey}`)
    return resp.data.results
}

export const getPopularTv =  async() => {
    const resp = await axios.get(`${ApiUrl}/tv/popular?${ApiKey}`);
    return resp.data.results
}
export const getFamilyMovie = async() =>{
    const resp = await axios.get(`${ApiUrl}/discover/movie?${ApiKey}&with_genres=10751`);
    return resp.data.results
}


export const getDocs = async() =>{

    const resp =await axios.get(`${ApiUrl}/discover/movie?${ApiKey}&with_genres=99`);
    return resp.data.results
}


export const getMovie = async(movie_id)=>{

    const resp = await axios.get(`${ApiUrl}/movie/${movie_id}?${ApiKey}`);
    return resp.data;
}