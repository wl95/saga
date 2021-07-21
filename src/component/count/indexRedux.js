import React,{Component} from 'react'
// 引入store
import store from "../../redux/store"
// 引入actionCreator 专门创建action对象
import {createIncrementAction, createDecrementAction, createIncremenAsynctAction} from '../../redux/count_action'
export default class summation extends Component{
  // 状态值
  state = {
    num : 0
  }
  componentDidMount () {
    // 检测redux中的状态变化
    // store.subscribe(() => {
    //   this.setState({})
    // })
  }

  // 加
  plus = () => {
    const { value } = this.ps
    // store.dispatch({
    //   type: 'increment',
    //   data: value * 1
    // })

    store.dispatch(createIncrementAction(value * 1))
  }
  // 减
  subtract = () => {
    const { value } = this.ps
    // store.dispatch({
    //   type: 'decrement',
    //   data: value * 1
    // })

    store.dispatch(createDecrementAction(value * 1))
    // const  { num } = this.state
    // this.setState({num: num - value * 1})
  }
  // 当前求和为奇数再加
  oddPlus = () => {
    const { value } = this.ps
    const cuont = store.getState()
    if (cuont % 2 === 0) return
    // store.dispatch({
    //   type: 'increment',
    //   data: value * 1
    // })
    store.dispatch(createIncrementAction(value * 1))
    // const  { num } = this.state
    // if( num % 2 === 0 ) return
    // this.setState({num: num + value * 1})

  }
  // 异步加
  asyncPlus = () => {
    const { value } = this.ps
    // const  { num } = this.state
    // setTimeout(() => {
      // this.setState({num: num + value * 1})
      // store.dispatch({
      //   type: 'increment',
      //   data: value * 1
      // })

      // store.dispatch(createIncrementAction(value * 1))
    // }, 1000)
    store.dispatch(createIncremenAsynctAction(value * 1, 1000))
  }
  render(){
    const  { num } = this.state
    console.log(store)
    return(
    <div>
      {/*<h1>当前求和为:{num}</h1>*/}
      {/*<select ref={currtNode => this.ps = currtNode}>*/}
      {/*  <option value="1">1</option>*/}
      {/*  <option value="2">2</option>*/}
      {/*  <option value="3">3</option>*/}
      {/*  <option value="4">4</option>*/}
      {/*</select><br/><br/>*/}
      {/*<button onClick={this.plus}>+</button>&nbsp;&nbsp;*/}
      {/*<button onClick={this.subtract}>-</button>&nbsp;&nbsp;*/}
      {/*<button onClick={this.oddPlus}>当前求和为奇数再加</button>&nbsp;&nbsp;*/}
      {/*<button onClick={this.asyncPlus}>异步加</button>*/}
      <h1>当前求和为:{store.getState()}</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddAddress)
