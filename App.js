import    React,{ useState ,useEffect} from 'react';
import { Text , View} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () =>{
  const Resp =  await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=283bf3f22f7ce6d2d1f9043a8b429b91')
// console.log(JSON.stringify(Resp.data.results, null, 2))
    return Resp.data.results;
}

const App = () =>{  
  // GetPopularMovie() is returning a promise and we use .then() callback function get Get Data.
  // BUt we face issue Movie Title is not Updated.Because we are using Normal Varraible.
  // THe issue is that tjhe title is set after the template got initialized.
  // We cannot use Normal Variable we use React State.
  //  

  // Important 
  //>> After we are using useState our CPU is going out of resourse to get rid off from this.
  // when we are using the state and async method we have to use UseEffect.
  //
// To catch the error we use Catch to  get Error from API.

  const [ movie ,setMovie] = useState(''); 
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
     { error && <Text style={{ color:'red'}}> Error in the Server. </Text>  }
    </View>
  )
}

export default App;