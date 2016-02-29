// Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// Create React component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the React component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
