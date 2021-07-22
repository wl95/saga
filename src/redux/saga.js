// 在saga里面有三种 generator
//根saga ---》入口   watcher saga    worker sage
// effects指令对象 take 接收 put 发送
import { INCREMENT_ASYNC } from './constant'
import {put, take, takeEvery, call, all, fork} from 'redux-saga/effects'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

 function * fetchNumber (action){
  yield call(delay,3000)
  const { data } = action
  yield put({type: INCREMENT_ASYNC, data})
}
 function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", fetchNumber)
}
export function* rootSaga() {
 yield all([fork(watchIncrementAsync)])
}
