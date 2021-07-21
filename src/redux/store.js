// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
// 引入redux
import {createStore} from 'redux'
// 引入reducer
import countReducer from "./count_reducer"
// 暴露
export default createStore(countReducer)
