import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { IStoreState, rootReducer } from './reducers';
import AppContainer from './containers/AppContainer';

const store: Store<IStoreState> = createStore(
    rootReducer, 
    // applyMiddleware( logger )
  );

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'));

// serviceWorker.unregister();
