import React from 'react';
import {TouchableOpacity, StyleSheet, Image,Text} from 'react-native';
const placeholderimage = require('../assets/Images/placeholder.png')
class Card extends React.PureComponent {
  state = ({item} = this.props);
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Image
        resizeMode='cover'
          style={styles.image}
          source={
              item.poster_path ?
            {  uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}: placeholderimage}
        />
        {item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems:'center',
    justifyContent:'center',
    height:200
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName:{
      position:'absolute',
      width:100,
      textAlign:'center',
      color:'white',
      top:10,
      
  }
});

export default Card;
