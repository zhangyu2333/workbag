import { createStore,applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducers from './reducers';

export default function configStore (){
    const store = createStore(rootReducers,applyMiddleware(promiseMiddleware))
    return store
}