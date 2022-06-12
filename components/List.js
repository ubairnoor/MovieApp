import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  dotStyle,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card'

const propTypes = {
  title: PropTypes.string,
  content:PropTypes.string,
}
class List extends React.PureComponent {
  render() {
    const {title, content} = this.props;
    return (
      <View style={styles.list}>
          <View>
              <Text  style={styles.text}>{title}</Text>
          </View>
          <View>
          <FlatList
             data={content}
              horizontal={true}
             renderItem={({item}) => <Card item={item} />}></FlatList>
          </View>  

      </View>
    );
  }
}

const styles = StyleSheet.create({
    list:{
        marginTop:20

    },
    text:{
        fontSize:20,
        fontWeight:'bold',

    }
})
List.propTypes = propTypes;
export default List;
