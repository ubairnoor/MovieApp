import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Image, StyleSheet,View,Dimensions, ActivityIndicator} from 'react-native';
import {getMovie} from '../services/services';
import StarRating from 'react-native-star-rating';
const placeholderimage = require('../assets/Images/placeholder.png');
const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  return (
    <React.Fragment>
      {loaded && (
        <ScrollView >
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path ?{ uri:
                      'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path,
                  } : placeholderimage
            }
          />
          <View style={styles.container}>
          <Text style={styles.text}>{movieDetail.title}</Text>
          {movieDetail.genres && (
            <View style={styles.genresContainer}> 
                {movieDetail.genres.map(genre => {
                    return <Text style={styles.genre} key={genre.id}>{genre.name}</Text>
                })}
            </View>
           )}
       <StarRating maxStars={5} rating={movieDetail.vote_average/2}/>
           <Text>{movieDetail.vote_average}</Text>
           <Text>{movieDetail.vote_count}</Text>
           <Text>{movieDetail.tagline}</Text>
           <Text>{movieDetail.release_date}</Text>
           <Text>{movieDetail.runtime}</Text>
       



          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator  
               color = 'red'
               size = "large"
               style = {styles.activityIndicator} /> }
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height/2.5,
  },
  activityIndicator: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 },
 container:{
    display:'flex',
    justifyContent:"center",
    alignContent:'center'
 },
 text:{
    fontSize:19,
    fontWeight:'bold',
  
  padding:10,
    color:'#4C3A51',

    
 },
 genresContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignContent:'center',
    backgroundColor:'#B25068',



  
    
 },
 genre:{
    color:'#fff',
    marginRight:10,
    padding:10,
    fontWeight:'bold',
    fontSize:15
    

 }
});

export default Detail;
