import React , { Component } from "react"
class List extends Component {
    state = {
        list : ['task1','task2']
    }
    UNSAFE_componentWillReceiveProps(props){
        this.setState({
            list:[
                ...this.state.list,
                props.keyword
            ]
        })
    }
    handleClick(index){
        this.state.list.splice(index,1)
        this.setState({})
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
            </ul>
        )
    }
}
export default List