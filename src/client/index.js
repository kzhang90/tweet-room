import React from 'react';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// thunk allows us to dispatch async
import rootReducer from './rootReducer';
// import setAuthorizationToken from './utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

// store is here.
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));  
// }


class AppRoutes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
      </Provider>
    );
  }
}

export default AppRoutes;