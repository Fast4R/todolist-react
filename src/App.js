import React from 'react';
import Tasks from './Tasks';
import Input from './Input';

import './style/App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={tasks: [
    ]}
  }

  handleSendInput = task =>{
    this.setState(state => {
      let {tasks} = state
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        text: task,
        done: false,
      });
      return tasks;
    });
  }

  compliteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;

      const complitedTaskStyle = document.getElementById([index]);
      complitedTaskStyle.classList.add('todo__task-red');
      return tasks;
    });
  };

  removeTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks.splice(index, 1);
      return tasks;
    })
  }

  render(){
    const {tasks} = this.state;
    return(
      <div className="todo">
        <header className="todo__header">
          <h2 className="todo__header-title">My TodoList: {tasks.length}</h2>
        </header>

        {tasks.map(task => (
          <Tasks 
          compliteTask={() => this.compliteTask(task.id)}
          removeTask={() => this.removeTask(task.id)} 
          tasks={task} 
          key={task.id}/>
        ))}
        
        <Input handleSendInput={this.handleSendInput}/>
      </div>
    );
  }
}

export default App;
