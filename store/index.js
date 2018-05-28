import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './list/ListReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  listdata: reducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
