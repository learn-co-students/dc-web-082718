import React, {Component, PureComponent} from 'react'

class Task extends Component {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done
    }
    console.warn(`Task ${this.props.task.id} constructor`)
  }

  onChecked = (event) => {
    this.patchFetch(event.target.id)
  }

  patchFetch(id){
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        done: !this.props.task.done
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        done: data.done
      })
    })
  }

  resize(){
    console.log('resize')
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} Did Mount`)
    window.addEventListener('resize', this.resize)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} Did Update`)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resize)
    console.warn(`Task ${this.props.task.id} Will Unmount`)
  }

  render(){
    console.warn(`Task ${this.props.task.id} render`)
    return(
      <div>
        <button data-id={this.props.task.id} onClick={this.props.onDelete}>x</button>
        {this.props.task.text}
        <input type="checkbox" id={this.props.task.id} checked={this.state.done} onChange={this.onChecked}/>
      </div>
    )
  }
}

export default Task
