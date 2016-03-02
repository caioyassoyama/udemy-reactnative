'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
const FormatTime = require('minutes-seconds-milliseconds');

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
      timeElapsed: null
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {FormatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={styles.footer}>
          <Text>
            I am a list of laps
          </Text>
        </View>
      </View>
    );
  }
  startStopButton() {
    return (
      <TouchableHighlight
        style={[styles.button, styles.startButton]}
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        >
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  }
  lapButton() {
    return (
      <View style={styles.button}>
        <Text>
          Lap
        </Text>
      </View>
    );
  }
  handleStartPress() {
    this.setState({
      startTime: new Date(),
      timeElapsed: this.state.timeElapsed
    });
    setInterval(() => {
      this.setState({
        startTime: this.state.startTime,
        timeElapsed: new Date() - this.state.startTime
      });
    }, 30);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
