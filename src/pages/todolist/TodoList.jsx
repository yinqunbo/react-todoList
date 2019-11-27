import React , { Component } from "react"
import Form from "./Form"
import List from "./List"
class TodoList extends Component {
    state={
        keyword:''
    }
    handleReceiveKeyword(keyword){
        this.setState({
            keyword
        })
    }
    render(){
        return (
            <>
                <Form onReceiveKeyword={this.handleReceiveKeyword.bind(this)}></Form>
                <List keyword={this.state.keyword}></List>
            </>
        )
    }
}

export default TodoList