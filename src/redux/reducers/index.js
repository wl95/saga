// 汇总所有的reducer
// 引入redux
import {combineReducers} from 'redux'
// 引入reducer
import countReducer from './count'
import personReducer from './person'

export default combineReducers({
  count: countReducer,
  person: personReducer
})
