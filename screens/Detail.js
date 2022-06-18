import React,{useState,useEffect} from 'react'
import {ScrollView, Text,Image} from 'react-native'
import { getMovie } from '../services/services'
const Detail = ({route, navigation}) => {
    const movieId = route.params.movieDetail.id;
    const [movieDetail, setMovieDetail] = useState();
    const [ loaded, setLoaded] = useState(false)
     useEffect(()=>{
        getMovie(movieId).then(movieData =>{
            setMovieDetail(movieData);
            setLoaded(true)
        });
    },[movieId]);
    return (
        <React.Fragment>
            {loaded && (<ScrollView>
           
                <Image
        resizeMode='cover'
       
          source={
            movieDetail.poster_path ?
          { uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path}: placeholderimage}
        />
            </ScrollView>) }
        </React.Fragment>
    );
}

export default Detail;