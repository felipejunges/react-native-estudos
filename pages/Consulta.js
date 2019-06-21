import React, { Component } from 'react';
import { FlatList, ActivityIndicator, TouchableWithoutFeedback, TouchableHighlight, RefreshControl, View, Text } from 'react-native';

class Consulta extends Component {

	static navigationOptions = {
		title: 'Json!',
	};

	constructor() {
		super();

        this.state = { isLoading: false };
        
        this.getMoviesFromApi = this.getMoviesFromApi.bind(this);
        this.actionOnRow = this.actionOnRow.bind(this);
	}

	async componentDidMount() {
		await this.getMoviesFromApi();
	}

	componentWillUnmount() {

    }
    
    async getMoviesFromApi() {
        this.setState({ isLoading: true });

        try {
            let response = await fetch(
                'https://facebook.github.io/react-native/movies.json',
            );
            
            let responseJson = await response.json();
            
            this.setState({ isLoading: false, dataSource: responseJson.movies });
        } catch (error) {
            console.error(error);
        }
    }

    actionOnRow(item) {
        this.props.navigation.goBack();
    }

    onRefresh() {

    }

	render() {
        if (this.state.isLoading){
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
      
        return (
            <View style={{flex: 1, padding:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                        <TouchableHighlight onPress={() => this.actionOnRow(item)}>
                            <View>
                                <Text>ID: {item.id}</Text>
                                <Text>Title: {item.title} ({item.releaseYear})</Text>
                            </View>
                        </TouchableHighlight>
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={this.onRefresh.bind(this)} />
                      }
                    keyExtractor={({id}, index) => id} />
            </View>
        )
	}
}

export default Consulta;