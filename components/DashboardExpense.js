import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DashboardExpense extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Dashboard</Text>
        <Button 
          title="Go to List of Expenses Page"
          onPress={() => this.props.navigation.navigate('List_of_Expenses')}
        />
        <Button 
          title="Go to Calendar Page"
          onPress={() => this.props.navigation.navigate('Calendar')}
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
