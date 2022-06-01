import    React,{ useState ,useEffect} from 'react';
import { Text , View} from 'react-native';
import {getPopularMovies,getUpcommingMovies} from '../services/services'
import { SliderBox } from "react-native-image-slider-box";
const Home = () => {

    const [ movieImages ,setMovieImages] =  useState(''); 

    const [ error, setError] = useState(false);
    
    useEffect(()=>{
      getUpcommingMovies().then(movies =>{
        const moviesImagesArray = [];
        movies.forEach(movie =>{
          moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+movie.poster_path)
        })

        setMovieImages(moviesImagesArray);
      }).catch(err => {
        setError(err);
      });
        getPopularMovies().then(movies => {
        setMovie(movies[0]);
      }).catch(err => {
        setError(err);
      });
    },[])

    return (
        <View>
    <SliderBox images={movieImages} />
     </View>
    );
}

export default Home;