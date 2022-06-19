import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Image, StyleSheet,View,Dimensions, ActivityIndicator} from 'react-native';
import {getMovie} from '../services/services';
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
    
    marginBottom:10,
  padding:10,
    color:'#4C3A51',
   
    backgroundColor:'#E7AB79'
    
 }
});

export default Detail;
