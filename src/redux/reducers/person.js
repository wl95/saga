import {ADD_PERSON} from '../constant'

const personList = [
  {id: '001',name:'小王', age: 20}
]
export default function personReducer (preState = personList, action) {
  const {type, data} = action
  return data && type === ADD_PERSON ? [data, ...preState] : preState
}
