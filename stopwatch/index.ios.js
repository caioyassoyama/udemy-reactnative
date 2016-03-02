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
      timeElapsed: null,
      isTimerRunning: false
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
    let style = this.state.isTimerRunning ? styles.stopButton : styles.startButton;
    return (
      <TouchableHighlight
        style={[styles.button, style]}
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        >
        <Text>
          {this.state.isTimerRunning ? 'Stop' : 'Start'}
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
    if (this.state.isTimerRunning) {
      clearInterval(this.interval);
      this.setState({
        isTimerRunning: false
      });
      return;
    }
    this.setState({
      startTime: new Date()
    });
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        isTimerRunning: true
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
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
