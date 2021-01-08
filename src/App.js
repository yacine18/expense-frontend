import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './stores/store'
import { Provider } from 'react-redux'
import Login from './component/Login'
import { setToken } from './setToken'
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import Profile from './component/Profile'
import { loadUser } from './actions/actions';
import AddTransactions from './component/AddTransactions';
import ForgotPassword from './component/ForgotPassword';
import AdminLogin from './component/admin/AdminLogin';
import AdminDashboard from './component/admin/AdminDashboard'
import AdminTransactions from './component/admin/AdminTransactions';
import Users from './component/admin/Users';
import EditTransaction from './component/admin/EditTransaction';
import AdminProfile from './component/admin/AdminProfile'
import ForgotAdmin from './component/admin/ForgotAdmin'

if(localStorage.getItem('token')){
  setToken(localStorage.getItem('token'))
}

const App = () => {

  useEffect( () => {
    store.dispatch(loadUser())
  }, [])

  return (

    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/add-transaction" component={AddTransactions} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/auth" component={AdminLogin} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/transactions" component={AdminTransactions} />
          <Route path="/users" component={Users} />
          <Route path="/edit-transaction/:id" component={EditTransaction} />
          <Route path="/account" component={AdminProfile} />
          <Route path="/forgot-password" component={ForgotAdmin} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
