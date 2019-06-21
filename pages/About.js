import React from 'react';
import { View, Button, Text } from 'react-native';

const About = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

About.navigationOptions = {
  title: 'About',
  headerRight: (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 4 }}>
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#ff9"
      />
      <Button
        onPress={() => alert('This is another button!')}
        title="Info"
        color="#f9f"
      />
    </View>
  ),
  headerStyle: {
    marginHorizontal: 8
  },
}

export default About;