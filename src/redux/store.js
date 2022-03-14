import { createStore, applyMiddleware,combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import {profiles,savedProfile,deletedProfile} from './reducer';

const rootReducer = combineReducers({
   profiles,
   savedProfile,
   deletedProfile
 });

const enhancers = compose(
    applyMiddleware(thunk), // your own middleware
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 
  );
  
export const  store=createStore(rootReducer,enhancers)