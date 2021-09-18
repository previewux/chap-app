import React from 'react'
import { UseGlobalContext } from './components/Provider/Anonymus';
import Loading from './components/SingleComponents/Loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PriveteRoute from './components/SingleComponents/PriveteRoute';
import PublicRoute from './components/SingleComponents/PublicRoute';
import ChatApplication from './components/chat';

import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import ForgetPassword from './components/Auth/ForgetPassword';

const App = () => {
  const { loading, } = UseGlobalContext()


  if (loading) {
    return <Loading />
  }

  return (
    <Router>

      <Switch>
        <PriveteRoute exact path='/' component={ChatApplication} />

        <PublicRoute exact path='/login/' component={Login} />

        <PublicRoute exact path='/user/signup/' component={SignUp} />

        <Route exact path='/user/forgetPassword/' component={ForgetPassword} />

      </Switch>
    </Router>
  )
}

export default App
