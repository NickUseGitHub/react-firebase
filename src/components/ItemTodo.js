import React, { Component } from 'react'

export default class ItemTodo extends Component {
    handleClick = (item) => (e) => {
        let { removeList } = this.props
        removeList(item)
    }
    
    render() {
        let { item } = this.props

        return <li>{item.name} <button onClick={this.handleClick(item)}>x</button></li>
    }
}