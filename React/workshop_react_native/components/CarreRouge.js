import React from 'react';
import {View,Text, StyleSheet } from 'react-native';

class CarreRouge extends React.Component{
	render(){
		return(
			 <View style={styles.style1}>
                 <Text>{this.props.CarreRougeText}</Text>
			</View>
            )
	}
}

const styles=StyleSheet.create({
	style1:{
        backgroundColor: "red",
        height: 125,
        width: 125,
    },
})

export default CarreRouge;