import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

// const sampleTasks = [
//   {id:1, text: "wake up", done: true},
//   {id:2, text: "eat lunch", done: false},
//   {id:3, text: "go to sleep", done: false}
// ]

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: null
    }
    console.warn(`App constructor`)
  }

  componentDidMount(){
    console.warn('App Did Mount')
    this.getFetch()
  }

  componentDidUpdate(){
    console.warn('App Did Update')
  }

  getFetch(){
    fetch(`http://localhost:3000/tasks`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        taskList: data
      })
    })
  }

  postFetch(){
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        done: false,
        text: this.state.formText
      })
    })
    .then(response => response.json())
    .then(task => {
      let newArray = [...this.state.taskList, task]
      this.setState({
        taskList: newArray
      })
    })
  }

  deleteFetch(id){
    fetch(`http://localhost:3000/tasks/${id}`,{
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      // debugger
      let newArray = [...this.state.taskList]
      let taskIndex = newArray.findIndex(task => task.id === parseInt(id))
      newArray.splice(taskIndex, 1)
      this.setState({
        taskList: newArray
      })
    })
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    this.postFetch()
  }

  onTaskDelete = (event) => {
    this.deleteFetch(event.target.dataset.id)
  }

  render() {
    console.warn('App render')
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList tasks={this.state.taskList} onDelete={this.onTaskDelete}/>
      </div>
    );
  }
}

export default App;
