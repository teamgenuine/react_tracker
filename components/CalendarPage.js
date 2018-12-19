import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CalendarPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Calendar Page</Text>
        <Button 
          title="Go to Dashboard Page"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
