import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Image, StyleSheet,Dimensions, ActivityIndicator} from 'react-native';
import {getMovie} from '../services/services';
const placeholderimage = require('../assets/Images/placeholder.png');
const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieDetail.id;
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
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path ?{ uri:
                      'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path,
                  } : placeholderimage
            }
          />
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
    height: height/1.5,
  },
  activityIndicator: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 }
});

export default Detail;
