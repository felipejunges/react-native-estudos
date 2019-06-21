import React from 'react';
import { StyleSheet, View, TouchableHighlight, Button, Text } from 'react-native';

const Page1 = ({ navigation }) => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>Home ;D</Text>
	
		<TouchableHighlight 
			style ={{
				height: 40,
				width:160,
				borderRadius:10,
				backgroundColor : "yellow",
				marginLeft :50,
				marginRight:50,
				marginTop :20
			}}>
	
			<Button
				title="Ir para About"
				onPress={() => navigation.navigate('About') } />
			
		</TouchableHighlight>

		<TouchableHighlight 
			style ={{
				height: 40,
				width:160,
				borderRadius:10,
				backgroundColor : "yellow",
				marginLeft :50,
				marginRight:50,
				marginTop :20
			}}>

			<Button
				title="Ir para Geo!"
				onPress={() => navigation.navigate('Geo') }/>

		</TouchableHighlight>

		<TouchableHighlight 
			style ={{
				height: 40,
				width:160,
				borderRadius:10,
				backgroundColor : "yellow",
				marginLeft :50,
				marginRight:50,
				marginTop :20
			}}>

			<Button
				title="Consulta Json"
				onPress={() => navigation.navigate('Consulta') }/>
				
		</TouchableHighlight>
	</View>
	);
	
	Page1.navigationOptions = {
		title: 'Home',
	}
	
	const styles = StyleSheet.create({
		botao: {
			margin: 15
		}
	});
	
	export default Page1;