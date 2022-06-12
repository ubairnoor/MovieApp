import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  dotStyle,
  FlatList,
  ScrollView
} from 'react-native';
import {getPopularMovies, getUpcommingMovies, getPopularTv} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
const dimensions = Dimensions.get('screen');

const Home = () => {
  const [movieImages, setMovieImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
const [popularShows, setPopularTv] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcommingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMovieImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
      getPopularTv().then(shows =>{
        setPopularTv(shows);
      })
      .catch(err =>{
        setError(err);
      } )

  }, []);



  return (
    <React.Fragment>
      <ScrollView>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={movieImages} 
          sliderBoxHeight={dimensions.height / 2.4}
          autoplay={true}
          circleLoop={true}
          dotStyle={styles.sliderStyle}
        />
      </View>
      <View>
        <List title="My list Component Title" content={popularMovies}/>
      </View>
      <View>
        <List title="Popular Shows" content={popularShows}/>
      </View>
  
      </ScrollView>

      
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
