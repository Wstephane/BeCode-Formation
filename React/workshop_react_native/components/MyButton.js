import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
class MyButton extends React.Component{
	render(){
		return(
			<TouchableOpacity onPress={this.props.onPressButton} style={styles.buton}>
				<Text style={styles.text}>{this.props.buttonName}</Text>
			</TouchableOpacity>
			)
	}
}

const styles=StyleSheet.create({
	button:{
		width: 300,
		height: 60,
		alignItems:"center",
		justifyContent: "center",
		backgroundColor: "green"
	},
	text: {
		color: "#ffffff",
		fontSize: 16,
	},
})
export default MyButton;