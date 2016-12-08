import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        txtValue : ""
    }

    handleChangeValue = () => (e) => {
        const txtValue = e.target.value
        this.setState({txtValue})
    }

    handleSubmit = () => (e) => {
        e.preventDefault()
        this.props.addTodo({name: this.state.txtValue})
        this.setState({txtValue:""})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit()}>
                <input type="text" onChange={this.handleChangeValue()} value={this.state.txtValue} />
            </form>
        )
    }
}