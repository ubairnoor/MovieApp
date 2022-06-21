import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card'

const propTypes = {
  title: PropTypes.string,
  content:PropTypes.array,
}
class List extends React.PureComponent {
  render() {
    const {navigation,title, content} = this.props;
    return (
      <View style={styles.list}>
          <View>
              <Text  style={styles.text}>{title}</Text>
          </View>
          <View>
          <FlatList
             data={content}
              horizontal={true}
             renderItem={({item}) => <Card navigation={navigation} item={item} />}></FlatList>
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
        fontSize:15,
        padding:10,
        fontWeight:'bold',
        color:"#4C3A51"
    },
 
})
List.propTypes = propTypes;
export default List;
