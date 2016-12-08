import React, { Component } from 'react'
import firebase from '../lib/firebase'

export default class ItemTodo extends Component {
    handleClick = (item) => (e) => {
        let { removeList } = this.props
        removeList(item)
    }

    handlerOnChange = (key) => (e) => {
        var updates = {}
        updates[`/todos/${key}`] = {name: e.target.value}
        firebase.database().ref().update(updates)
    }
    
    render() {
        let { item } = this.props

        return <li><input type="text" onChange={this.handlerOnChange(item.key)} value={item.name} /> <button onClick={this.handleClick(item)}>x</button></li>
    }
}