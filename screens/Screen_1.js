import React from 'react';
import { Animated, Text, View, StyleSheet,  } from 'react-native';



// You can then use your `FadeInView` in place of a `View` in your components:
export default class Screen1 extends React.Component {
  static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Good job!</Text>
      </View>
    )
  }
}