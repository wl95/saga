import {INCREMENT, DECREMENT} from './constant'
// 该文件用于创建一个为count组件服务的reducer，reducer本质就是函数
// reducer会接受到两个参数 preState（之前的状态） action（动作对象）
const initSum = 0 // 初始化状态
//preState = initSum 当为undefined或者没有传递时 preState值等于initSum的值
export default function countReducer (preState = initSum, action) {
  // if(preState === undefined) preState = 0
  const {type, data} = action
  console.log(type, data, preState)
  switch (type){
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}

