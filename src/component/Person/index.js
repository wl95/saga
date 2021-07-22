import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// 引入react-redux
import { connect } from 'react-redux'
import {nanoid} from 'nanoid'
import { personAction } from '../../redux/actions/person'
class Person extends Component{
  addPerson = () => {
    console.log('444')
    const name = this.name.value
    const age = this.age.value
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.personAdd(personObj)
    this.name.value = ''
    this.age.value = ''
  }
  Generator = () =>{
    // function * generator() {
    //   let a = yield 1
    //   console.log(a, 'a')
    //   let b = yield 2
    //   console.log(b, 'b')
    // }
    // let it = generator()
    // console.log(it, 'it')
    // let r1 = it.next()
    // console.log(r1, 'r1')
    // let r2 = it.next('小赵')
    // console.log(r2, 'r2')
    // let r3 = it.next('小王')
    // console.log(r3, 'r3')
    function * generator() {
      try {
        let a = yield 1
        console.log(a, 'a')
        let b = yield 2
        console.log(b, 'b')
      }catch (e) {
        console.log(e)
      }

    }
    let it = generator()
    let r1 = it.next()
    let r2 = it.throw('出错啦~~~')
  }
  render(){
    const {personList, count} = this.props
    console.log(personList,'personList',this.props)
    return(
      <div>
        <h1>我是person组件</h1>
        <h1>上方组件总和为：{count}</h1>
        <input type='text' placeholder='请输入名字' ref={n => this.name = n}/>&nbsp;&nbsp;
        <input type='text' placeholder='请输入年龄' ref={a => this.age = a}/>&nbsp;&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            personList.map((item, index) => {
              return <li key={index}>姓名：{item.name}---年龄：{item.age}</li>
            })
          }
        </ul>
        <button onClick={this.Generator}>Generator函数</button>
      </div>
    )
  }
}

// hook使用
// function Person() {
//   const [count, setCount] = React.useState(0)
//   const myRef = React.useRef()
//   // 相当于类式组件的 componentDidUpdate/componentDidMount/componentWillUnmount
//   // 当第二个参数为空数组则为componentDidMount否则为componentDidUpdate,有返回函数时为componentWillUnmount
//   React.useEffect(() =>{
//     let timer = setInterval(() =>{
//       setCount(count + 1)
//     },8000)
//     console.log('@-@')
//     return () =>{ //componentWillUnmount
//       console.log('卸载了')
//       clearInterval(timer)
//     }
//   },[count])
//   function add () {
//     setCount(count + 1)
//     console.log('hahah')
//   }
//   function unMount() {
//     ReactDOM.unmountComponentAtNode( document.getElementById('root'))
//   }
//   function show (){
//     console.log(myRef)
//     alert(myRef.current.value)
//   }
//   return(
//     <div>
//       <h1>和为：{count}</h1>
//       <input ref={myRef} type="text"></input>
//       <button onClick={add}>点我加一</button>
//       <button onClick={unMount}>卸载组件</button>
//       <button onClick={show}>提示输入内容</button>
//     </div>
//   )
// }
export default connect(
state => {
  console.log(state,'uuu')
  return {personList: state.person,count:state.count}
}
,
dispatch => {
  return {
    personAdd: obj => dispatch(personAction(obj)),
  }
}
)(Person)
