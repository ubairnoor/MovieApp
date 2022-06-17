import React from 'react';
import {TouchableOpacity, StyleSheet, Image,Text} from 'react-native';
import PropTypes from 'prop-types';
const placeholderimage = require('../assets/Images/placeholder.png');

const propTypes = {
  item:PropTypes.object
}

class Card extends React.PureComponent {

 
  render() {
    const {navigation,item} = this.props;
    return (
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Detail',{movieDetail:item })} 
      style={styles.container}>
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
      top:100,
      backgroundColor:'#121619',
      borderRadius:10
      
  }
});

Card.propTypes = propTypes;

export default Card;
