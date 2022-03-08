import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  universityListReducer,
  universityDetailsReducer,
} from './reducers/universityReducers';

const reducer = combineReducers({
  universityList: universityListReducer,
  universityDetails: universityDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
