import { createStore } from 'redux'
import routerReducer from '../reducers/routerReducer'

const routerState = {
    Dashboard: { screen: DashboardExpense },
    List_of_Expenses: { screen: ListOfExpenses },
    Calendar: { screen: CalendarPage },
};

const initialRouterState = {
    index: 0,
    routes: [
        { key: 'Dashboard', routeName: 'DashboardExpense' },
    ]
}

export default store = createStore(routerReducer, routerState)