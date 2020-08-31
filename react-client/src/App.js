import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import OwnProduct from './pages/OwnProduct'

function App() {
  const [ isLoggin, setIsLoggin ] = useState(false)

  function checkLogin(){
    if(localStorage.access_token){
      setIsLoggin(true)
    }else{

    }
  }

  useEffect(() => {
    checkLogin()
  }, [isLoggin])

  return (
    <Router>
      {isLoggin ? 
      <ul>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/product">Own Product</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      :
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      }
      <Switch>
        <Route exact path='/login'>
          {!isLoggin ? <Login/> : <Redirect exact to="/"/> }
        </Route>
        <Route exact path='/register'>
          {!isLoggin ? <Register/> : <Redirect exact to="/"/> }
        </Route>
        <Route exact path='/'>
          {isLoggin ? <Product/> : <Redirect exact to="/login"/> }
        </Route>
        <Route exact path='/product'>
          {isLoggin ? <OwnProduct/> : <Redirect exact to="/login"/> }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
