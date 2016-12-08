import React, { Component } from 'react'
import firebase from 'firebase/app'
import logo from './logo.svg'
import './App.css'

//middlewares
import * as firebaseConf from './config/firebase'
require('firebase/database')

firebase.initializeApp(firebaseConf.config)

//Components
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

class App extends Component {

  state = {
      items: []
  }

  componentDidMount() {
    this.getDataFromFirebase().on('value', (res) => {
      let items = []
      res.forEach(todo=>{
        let todoObj = todo.val()
        todoObj.key = todo.key
        items.push(todoObj)
      })
      this.setState({items})
    })
  }

  getDataFromFirebase() {
    return firebase.database().ref('todos/')
  }

  addTodo(item) {
    var todo = {
      name: item.name
    }
    
    var newTodoKey = firebase.database().ref().child('todos').push().key
    var updates = {}
    updates['/todos/' + newTodoKey] = todo
    firebase.database().ref().update(updates)
  }

  removeList(item) {
    let  items = this.state.items
        ,indexForRemove = items.findIndex(tItem => tItem.name === item.name)
    items.splice(indexForRemove, 1)
    // this.setState({items})
    let itemsForUpdate = {}
    items.forEach(item => {
      itemsForUpdate[item.key] = { name: item.name }
    })
    console.log(itemsForUpdate)
    firebase.database().ref().update({"/todos/" : itemsForUpdate})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Firebase</h2>
        </div>
        <div className="App-intro">
          <Todo items={this.state.items} removeList={this.removeList.bind(this)} />
          <AddTodo addTodo={this.addTodo.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App
