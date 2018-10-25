import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
class Userimput extends React.Component{
	render(){
		return(
            <View>
			 <TextInput value={this.props.value} style={StyleSheet.textInput}/>
            </View>
			)
	}
}

const styles=StyleSheet.create({
    container: {

        },

    textinput: {
        height: 50,
        width: 250,
    },
})
export default Userimput;