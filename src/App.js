import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import { logout } from './services/fetch-utils';
import ListPage from './ListPage';

import './App.css';

export default function App() {

  // track the user in state
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  // add a useEffect to get the user and inject the user object into state on load

  async function handleLogout() {
    // call the logout function
    logout();
    // clear the user in state
    currentUser('');
    setCurrentUser('');
    // setUser('');
  }

  return (
    <Router>
      <div className='App'>
        <header>
          {
            currentUser &&
          <div>
            <button onClick={handleLogout}>LogOut</button>
          </div>
          }
           
         
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {/* if there is a user, redirect to the list. Otherwise, render the auth page. Note that the AuthPage will need a function called setUser that can set the user state in App.js */}
              {
                currentUser 
                  ? <Redirect to="/shopping-list" />
                  : <AuthPage />

              }
            </Route>
            <Route exact path="/shopping-list">
              {/* if there's a user, take them to the list page. Otherwise, redirect them to the home/auth page */}
              {
                currentUser 
                  ? <ListPage />
                  : <AuthPage />

              }

            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );}