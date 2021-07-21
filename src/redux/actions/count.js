
import {INCREMENT, DECREMENT} from './constant'
// 该文件专门为count组件生成action对象
// 同步action 指action值为object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action 指action值为函数  需要安装一个中间件 redux-thunk
// 异步action中一般会调用同步action
export const createIncremenAsynctAction = (data, time) => {
  return (dispatch) =>{
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    }, time)
  }
}





