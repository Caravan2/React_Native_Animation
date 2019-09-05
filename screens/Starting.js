import React from 'react';
import { Animated, Text, View, StyleSheet, Button,  } from 'react-native';

class FadeInView extends React.Component {
  state = {
    animatedValue: new Animated.Value(0),
    fadeAnim: new Animated.Value(0),
    Width: new Animated.Value(0),
    Height: new Animated.Value(0),  // Initial value for opacity: 0
    BRadius: new Animated.Value(0),
    xscale: new Animated.Value(1),
    yscale: new Animated.Value(1),
    ymove: new Animated.Value(0),
    xmove: new Animated.Value(0),
}

  componentDidMount() {
      Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();
    Animated.timing(
      this.state.Width,
      {
        toValue: 100,
        duration: 1500,
      }
    ).start();                       // Starts the animation
    Animated.timing(
      this.state.Height,
      {
        toValue: 100,
        duration: 1500,
      }
    ).start();
    Animated.timing(
      this.state.animatedValue,
      {
        delay: 1500,
        toValue: 0.125,
        duration: 1500,
      }
    ).start();
    Animated.timing(
        this.state.BRadius,
        {
          delay: 3000,
          toValue: 1000,
          duration: 3000,
        }
      ).start();
    Animated.timing(
        this.state.xscale,
        {
          delay: 3000,
          toValue: 4,
          duration: 1000,
        }
      ).start();
      Animated.timing(
        this.state.yscale,
        {
          delay: 3000,
          toValue: 4,
          duration: 1000,
        }
      ).start();
      Animated.timing(
        this.state.ymove,
        {
          delay: 3000,
          toValue: -45,
          duration: 500,
        }
      ).start();
      Animated.timing(
        this.state.xmove,
        {
          delay: 3000,
          toValue: -45,
          duration: 500,
        }
      ).start();
  }

  render() {
    let { fadeAnim } = this.state;
    let { Width } = this.state;
    let { Height } = this.state;
    let {BRadius} = this.state;
    let {xscale} = this.state;
    let {yscale} = this.state;
    let {ymove} = this.state;
    let {xmove} = this.state;
    let interpolateRotation = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
          width: Width,
          height: Height,
          transform: [{rotate: interpolateRotation}, {scaleX: xscale}, {scaleY: yscale}, {translateY: ymove}, {translateX: xmove}],
          borderRadius: BRadius,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}



//Text
class TextView extends React.Component {
  state = {
    ymove: new Animated.Value(-400),
}

  componentDidMount() {
      Animated.timing(                  // Animate over time
      this.state.ymove,            // The animated value to drive
      {
        delay: 2500,
        toValue: -150,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();
  }
  render() {
    let { ymove } = this.state;
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          transform: [{translateY: ymove}],
        }}
      >
      <Text style={{color: "#FFFFFF", fontSize: 20,}}>გამარჯობა</Text>
        {this.props.children}
      </Animated.View>
    );
  }
}



//Button
class ButtonView extends React.Component {
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



// You can then use your `FadeInView` in place of a `View` in your components:
export default class Starting extends React.Component {
  static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{ backgroundColor: '#EF592E'}}>
        </FadeInView>
        <TextView style={{ position: 'absolute', }}></TextView>
        <ButtonView style={{ position: 'absolute', }}>
               <Text style={{textAlign: 'center', paddingBottom: 20}}>მეტი ვიდრე ფანჯარა</Text>
               <Button
                  title="დაწყება"
                  color="#EF592E"
                  onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Details' })
                      ],
                    }))
                  }}
                />
              <Text style={{textAlign: 'center', paddingTop: 20}}>© IRNERO.GE</Text>
              
        </ButtonView>
      </View>
    )
  }
}

