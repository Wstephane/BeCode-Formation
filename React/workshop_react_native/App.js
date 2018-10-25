import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Userimput from './components/UserImput';
import MyButton from './components/MyButton';


class App extends React.Component{
	constructor(props){
		super(props);
		this.state={text:"hqefqgfqgfqffqfhoh"}
	}
	
	onButtonPress(text){
		alert(text)
	}

	changeText(textFromInput){
		this.setState({text: textFromInput})
	}
	render(){
		return(
			 <View style={styles.container}>
				 <Userimput onChangeText={(incomingText)=> this.state.changeText} />
				 <MyButton onPressButton={(this.onButtonPress("Bonjour"))} buttonName={"bonjour"}/>
			</View>
			)
	}
}

const styles=StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: 15,
	},
})
export default App;