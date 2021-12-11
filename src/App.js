import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar.jsx';

// Pages
import Home from './pages/Home/Home.js';
import Admin from './pages/Admin/Admin.js';
import Client from './pages/Client/Client.js';

import Create from './pages/Admin/Create.js';
import Transaction from './pages/Admin/Transaction.js';
import Members from './pages/Admin/Members.js';
import History from './pages/Admin/History.js';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route path="/admin">
              <Admin />
            </Route>

              <Route path="/admin-create">
                <Create/>
              </Route>

              <Route path="/admin-transaction">
                <Transaction/>
              </Route>

              <Route path="/admin-members">
                <Members/>
              </Route>

              <Route path="/admin-history">
                <History/>
              </Route>

            <Route path="/client">
              <Client />
            </Route>

          </Switch>
          </main>
      </Router>
    </>
  )
  
}

export default App
