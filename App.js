import React from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';

const getPopulsarMovies = async () =>{
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


  let title = 'Movie Name'
  getPopulsarMovies().then(movies => {
    title = movies[0].original_title;
  });
  return (
    <View>
       <Text>{title}</Text>
    </View>
  )
}

export default App;