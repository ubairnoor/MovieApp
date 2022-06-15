import React, {PureComponent} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
const propTypes = {
    errorText1: PropTypes.string,
    errorText2: PropTypes.string
}
const defaultProps ={
    errorText1:'Oppps! something went Wrong',
    errorText2:'Make Sure you are online And Restart the Application'
}
 class Error extends PureComponent {
    
    render() {
        const { errorText1, errorText2} = this.props;

        return (
            <View style={styles.container}>

                <Text style={styles.text}>{errorText1}</Text>
                <Text style={styles.text}>{errorText2}</Text>
            </View>
        );
    }
 }
 const styles = StyleSheet.create({
    container:{
       display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:250
    },
    text:{
        color:'black',
        fontWeight:'bold'
    }
 })
 
 Error.propTypes = propTypes;
 Error.defaultProps = defaultProps
 export default Error;