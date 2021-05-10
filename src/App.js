import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Main from './pages/Main';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

function App() {
  const [is_logged_in, setIsLoggedIn] = useState(false);

  // 화면 보여지고 나서 실행
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [is_logged_in]);

  return (
    <Router>
        {
          is_logged_in ? (
            <Switch>
              <Route path='/' component={Main} exact />
              <Route path='/edit' component={Edit} exact />
              <Route>
                <div>404 - 페이지 낫 파운드</div>
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path='/login' component={Login} exact />
              <Route path='/register' component={Register} exact />
              <Route>
                <div>404 - 페이지 낫 파운드</div>
              </Route>
            </Switch>
          )
        }
    </Router>
  );
}

export default App;