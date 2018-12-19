import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DashboardExpense from './components/DashboardExpense';
import ListOfExpenses from './components/ListOfExpenses';
import CalendarPage from './components/CalendarPage';

import { createStackNavigator, createAppContainer } from 'react-navigation';
//import { Provider } from 'react-redux';

const AppNavigator = createStackNavigator(
  {
    Dashboard: { screen: DashboardExpense },
    List_of_Expenses: { screen: ListOfExpenses },
    Calendar: { screen: CalendarPage },
  },
)

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
