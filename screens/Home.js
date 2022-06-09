import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  dotStyle,
  FlatList,
} from 'react-native';
import {getPopularMovies, getUpcommingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [movieImages, setMovieImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const [error, setError] = useState(false);
  console.log('Dimension', dimensions);
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
  },[]);

  return (
    <React.Fragment>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={movieImages}
          sliderBoxHeight={dimensions.height / 1.5}
          autoplay={true}
          circleLoop={true}
          dotStyle={styles.sliderStyle}
        />
      </View>
      <View>
        <FlatList
          data={popularMovies}
          horizontal={true}
          renderItem={({item}) => <Text>{item.title}</Text>}>
      
        </FlatList>
      </View>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 5,
    paddingTop: 5,
  },
  sliderStyle: {
    height: 0,
  },
});
export default Home;
