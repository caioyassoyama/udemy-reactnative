'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class StopWatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text>
              00:00.00
            </Text>
          </View>
          <View style={[styles.buttonWrapper, this.border('green')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={[styles.footer, this.border('blue')]}>
          <Text>
            I am a list of laps
          </Text>
        </View>
      </View>
    );
  }
  startStopButton() {
    return (
      <TouchableHighlight underlayColor="gray" onPress={this.handleStartPress}>
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  }
  lapButton() {
    return (
      <View>
        <Text>
          Lap
        </Text>
      </View>
    );
  }
  handleStartPress() {
    console.log('Start was pressed');
  }
  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    };
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
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
