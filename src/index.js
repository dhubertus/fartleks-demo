import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import './index.css';

import App from './components/App/App';
import rootReducer from './reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
                 window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(thunk),
);
// store.dispatch(calcEffort(test));

render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
