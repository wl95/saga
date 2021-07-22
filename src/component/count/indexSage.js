/**********************************************使用react-redux进行组件间的状态管理******************************************************/
import React,{Component} from 'react'
// 引入react-redux
import { connect } from 'react-redux'
// 引入actionCreator 专门创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import { INCREMENT_ASYNC } from '../../redux/constant'

class summation extends Component{
  // 加
  plus = () => {
    const  { value } = this.ps
    console.log(value, 'value',this.props)
    this.props.increment(value*1)
  }
  // 减
  subtract = () => {
    const  { value } = this.ps
    this.props.decrement(value*1)
  }
  // 当前求和为奇数再加
  oddPlus = () => {
    const  { value } = this.ps
    if(this.props.count % 2 === 0) return
    this.props.increment(value*1)
  }
  asyncPlus = () => {
    const { value } = this.ps
    this.props.incrementAsync(value*1)
  }
  render(){
    const  { count } = this.props
    console.log(this.props)
    return(
    <div>
      <h1>我是count组件</h1>
      <h2>当前求和为:{count}</h2>
      <select ref={currtNode => this.ps = currtNode}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select><br/><br/>
      <button onClick={this.plus}>+</button>&nbsp;&nbsp;
      <button onClick={this.subtract}>-</button>&nbsp;&nbsp;
      <button onClick={this.oddPlus}>当前求和为奇数再加</button>&nbsp;&nbsp;
      <button onClick={this.asyncPlus}>异步加</button>
    </div>
    )
  }
}
export default connect(
state => ({count: state.count})
,
dispatch => {
  return {
    increment: number => dispatch(createIncrementAction(number)),
    decrement: number => dispatch(createDecrementAction(number)),
    incrementAsync: data => dispatch({type: "INCREMENT_ASYNC", data})
  }
}
)(summation)
