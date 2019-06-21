import React from 'react';
import { StyleSheet, View, TouchableHighlight, Button, Text } from 'react-native';

const Home = ({ navigation }) => (
	<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
		<Text>Home ;D</Text>
	
		<TouchableHighlight style ={ styles.botao }>
			<Button
				title="Ir para About"
				onPress={() => navigation.navigate('About') } />
		</TouchableHighlight>

		<TouchableHighlight style ={ styles.botao }>
			<Button
				title="Ir para Geo!"
				onPress={() => navigation.navigate('Geo') }/>
		</TouchableHighlight>

		<TouchableHighlight style ={ styles.botao }>
			<Button
				title="Consulta Json"
				onPress={() => navigation.navigate('Consulta') }/>
		</TouchableHighlight>
	</View>
	);
	
	Home.navigationOptions = {
		title: 'Home',
		drawerLabel: 'Home'
	}
	
	const styles = StyleSheet.create({
		botao: {
			height: 40,
			width: 160,
			borderRadius: 10,
			backgroundColor: "yellow",
			marginLeft: 50,
			marginRight: 50,
			marginTop: 20
		}
	});
	
	export default Home;