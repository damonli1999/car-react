import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Inventory, Hours, Maintenance, SignIn} from './components'
import './styles.css'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'

const temp_props = "Auto Car Collection"


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/inventory'>
          <Inventory></Inventory>
        </Route>
        <Route path='/maintenance'>
          <Maintenance></Maintenance>
        </Route>
        <Route path='/hours'>
          <Hours></Hours>
        </Route>
        <Route path='/SignIn'>
          <SignIn></SignIn>
        </Route>


      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);