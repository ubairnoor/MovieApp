import React from 'react'
import {Pressable,StyleSheet} from  'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
class PlayButton extends React.PureComponent {

    render() {
        return (
        <Pressable style={styles.button}>
            <Icon name={'caret-forward-outline'} size={30} color={'#E7AB79'}/>
        </Pressable>
        );
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:"#4C3A51",
        alignContent:'center',
        borderRadius:50,
        width:50,
        padding:10,

    }
})
export default PlayButton;