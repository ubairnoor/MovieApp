import React from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';

const getPopulsarMovies = async () =>{
  const Resp =  await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=283bf3f22f7ce6d2d1f9043a8b429b91')
console.log(JSON.stringify(Resp, null, 2))
}

const App = () =>{ 
  getPopulsarMovies();
  return (
    <View>
       <Text>Hello</Text>
    </View>
  )
}

export default App;