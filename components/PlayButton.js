import React from 'react'
import {Pressable,StyleSheet} from  'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
class PlayButton extends React.PureComponent {

    render() {
        return (
        <Pressable style={styles.button}>
            <Icon name={'caret-forward-outline'} size={40} color={'#4C3A51'}/>
        </Pressable>
        );
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:"#E7AB79",
        alignContent:'center',
        borderRadius:50,
        width:60,
        padding:10,

    }
})
export default PlayButton;