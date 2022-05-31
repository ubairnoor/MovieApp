import    React,{ useState ,useEffect} from 'react';
import { Text , View} from 'react-native';
import {getPopularMovies} from '../services/services'

const Home = () => {

    const [ movie ,setMovie] =  useState(''); 

    const [ error, setError] = useState(false);
    
    useEffect(()=>{
        getPopularMovies().then(movies => {
        setMovie(movies[0]);
      }).catch(err => {
        setError(err);
      });
    },[])

    return (
        <View>
        <Text>Movie Title:  {movie.original_title}</Text>
        <Text>Released On:  {movie.release_date}</Text>
      {error && <Text style={{ color:'red'}} > 
      Error in the Server. </Text>}
     </View>
    );
}

export default Home;