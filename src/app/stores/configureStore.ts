import { createStore, applyMiddleware, combineReducers } from 'redux';
import propertyList from '../reducers/property-list-reducer';

const thunk = require('redux-thunk').default;
const rootReducer = combineReducers({ propertyList });

const finalCreateStore = applyMiddleware(thunk)(createStore);

export default () => {
  return finalCreateStore(rootReducer);
}
