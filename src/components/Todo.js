import React, { Component } from 'react'

//component
import ItemTodo from './ItemTodo'

export default class Todo extends Component {

    renderList() {
        if ( this.props.items === null || this.props.items === undefined || this.props.items.length === 0 ) {
            return <li>no datas</li>
        }

        let { items, removeList } = this.props

        return items.map(item => <ItemTodo key={item.key} removeList={removeList} item={item} />)
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}