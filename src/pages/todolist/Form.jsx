import React , { Component } from "react"
class Form extends Component {
    state = {
        keyword : ''
    }
    handleChange(e){
        this.setState({
            keyword:e.target.value
        })
    }
    handleKeyUp(e){
        if(e.keyCode === 13){
            this.props.onReceiveKeyword(this.state.keyword)
            this.setState({
                keyword:''
            })
        }
    }
    render(){
        return (
            <input 
            value={this.state.keyword} 
            onChange={this.handleChange.bind(this)} 
            onKeyUp={this.handleKeyUp.bind(this)}
            type="text">

            </input>
        )
    }
}
export default Form