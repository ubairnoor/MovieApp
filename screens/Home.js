import    React,{ useState ,useEffect} from 'react';
import { Text , View,StyleSheet,Dimensions} from 'react-native';
import {getPopularMovies,getUpcommingMovies} from '../services/services'
import { SliderBox } from "react-native-image-slider-box";

const dimensions =Dimensions.get('screen');

const Home = () => {

    const [ movieImages ,setMovieImages] =  useState([]); 

    const [ error, setError] = useState(false);
    console.log("Dimension",dimensions)
    useEffect(()=>{
      getUpcommingMovies().then((movies) =>{
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
        <View style={styles.sliderContainer}>
    <SliderBox images={movieImages} 
    sliderBoxHeight={600} 
    autoplay={true} 
    circleLoop={true} />
     </View>

    );
}
const styles = StyleSheet.create({
sliderContainer:{
display:'flex',
justifyContent:'center',
margin:5,
paddingTop: 5,
}

});
export default Home;