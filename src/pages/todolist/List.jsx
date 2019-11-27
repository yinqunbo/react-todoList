import React , { Component } from "react"
import PropTypes from "prop-types"
console.log(PropTypes)
class List extends Component {
    // static defaultProps = {
    //     keyword : '我是默认值'
    // }
    static propTypes = {
        keyword : PropTypes.string.isRequired
    }
    state = {
        list : ['task1','task2']
    }
    handleClick(index){
        this.state.list.splice(index,1)
        this.setState({})
    }
    UNSAFE_componentWillReceiveProps(props){
        this.setState({
            list:[
                ...this.state.list,
                props.keyword
            ]
        })
    }
    
    render(){
        return (
            <ul>
                {
                    this.state.list.map((value,index)=>{
                        return (
                            <li key={value+index}>
                                {value} 
                                <button onClick={this.handleClick.bind(this,index)}>x</button> 
                            </li>
                        )
                    })
                }
                {/* <li>
                    {this.props.children} // 取出父组件中的子内容
                </li> */}
            </ul>
        )
    }
}
export default List