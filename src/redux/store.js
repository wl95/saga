// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
// 引入redux
import {createStore, applyMiddleware} from 'redux'
// 引入reducer
// import countReducer from './reducers/count'
// import personReducer from './reducers/person'
// 引入汇总后的reducer
import allReducer from './reducers/index'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
// 合并所有reducer
// const allReducer = combineReducers({
//   count: countReducer,
//   person: personReducer
// })

// 暴露
// export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

// 引入 redux-saga
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './saga'
let sagaMiddleware = createSagaMiddleware ()
// 执行saga
let store = createStore(allReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export default store
