import React from 'react';
import { Animated, Text, View, StyleSheet, Button  } from 'react-native';


//Button
export default class ButtonView extends React.Component {
  state = {
    ymove: new Animated.Value(400),
}

  componentDidMount() {
      Animated.timing(                  // Animate over time
      this.state.ymove,            // The animated value to drive
      {
        delay: 2500,
        toValue: 170,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();
    Animated.sequence(
      {

      }
    )
  }
  render() {
    let { ymove } = this.state;
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          transform: [{translateY: ymove}],
          width: 200,
        }}
      >
       {this.props.children}
      </Animated.View>
    );
  }
}
