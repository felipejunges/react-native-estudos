import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Geo extends Component {

	static navigationOptions = {
		title: 'Geowww!',
	};

	constructor() {
		super();

		this.state = { mensagem: 'Geooo!' };

		this.inicializarGeo = this.inicializarGeo.bind(this);
	}

	componentDidMount() {
		this.inicializarGeo();
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watch);
	}

	inicializarGeo() {
		this.setState({ mensagem: 'Inicializando...' });

		var options = {
			timeout: 5000,
			enableHighAccuracy: true,
			maximumAge: 0
		};

		this.watch = navigator.geolocation.watchPosition(
			function (position) {
				this.setState({
					mensagem:
							'E foi:'
							+"\n"+ position.coords.accuracy
							+"\n"+ position.coords.latitude.toString().replace(".", ",")
							+"\n"+ position.coords.longitude.toString().replace(".", ",")
				});
			}.bind(this),
			function (error) {
				this.setState({ mensagem: 'Erro: '+ error });
			}.bind(this),
			options
		);
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{this.state.mensagem}</Text>
			</View>
		);
	}
}

export default Geo;