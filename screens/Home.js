import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  dotStyle,
  FlatList,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {
  getPopularMovies,
  getUpcommingMovies,
  getPopularTv,
  getFamilyMovie,
  getDocs,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
const dimensions = Dimensions.get('screen');

const Home = () => {
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularShows, setPopularTv] = useState([]);
  const [familyShow, setFamilyShow] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [error, setError] = useState(false);
  const [ loaded,setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcommingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovie(),
      getDocs(),
    ]);
  };

  useEffect(() => {
    getData().then(([
      UpcomingMovies,
      popularMovies,
      popularShows,
      familyShow,
      documentary,
    ])=>{
      const moviesImagesArray = [];
      UpcomingMovies.forEach(movie => {
        moviesImagesArray.push(
          'https://image.tmdb.org/t/p/w500' + movie.poster_path,
        );

      });
      setUpcomingMovies(moviesImagesArray);
      setPopularMovies(popularMovies);
      setPopularTv(popularShows);
      setFamilyShow(familyShow);
      setDocumentary(documentary);
      
    }
    ).catch(err=>{
      setError(err);
    }).finally(()=>{
      setLoaded(true)
    }

    );
    // getUpcommingMovies()
    //   .then(movies => {
    //     const moviesImagesArray = [];
    //     movies.forEach(movie => {
    //       moviesImagesArray.push(
    //         'https://image.tmdb.org/t/p/w500' + movie.poster_path,
    //       );
    //     });
    //     setMovieImages(moviesImagesArray);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });

    // getPopularMovies()
    //   .then(movies => {
    //     setPopularMovies(movies);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
    // getPopularTv()
    //   .then(shows => {
    //     setPopularTv(shows);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
    // //Get Family Show
    // getFamilyMovie()
    //   .then(FamilyShow => {
    //     setFamilyShow(FamilyShow);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
    // getDocs()
    //   .then(doc => {
    //     setDocumentary(doc);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
  }, []);

  return (
    <React.Fragment>
      {loaded && ( <ScrollView>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={UpcomingMovies}
            sliderBoxHeight={dimensions.height / 2.4}
            autoplay={true}
            circleLoop={true}
            dotStyle={styles.sliderStyle}
          />
        </View>
        <View>
          <List title="Popular Movies" content={popularMovies} />
        </View>
        <View>
          <List title="Popular Shows" content={popularShows} />
        </View>
        <View>
          <List title="Documentary" content={documentary} />
        </View>
        <View>
          <List title="Family Shows" content={familyShow} />
        </View>
        
      </ScrollView>
      )}
      <View  >
      {!loaded && <ActivityIndicator size="large" color="#23272A"/>}
    
      </View>
      
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  

});

export default Home;
