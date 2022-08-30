import React from 'react';
import TaskList from '../cmps/TaskList.jsx';
import InitialTask from '../cmps/InitialTask.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: InitialTask,
      Tasks: InitialTask,
      isOnLeftMode: false,
      isOnCompletedMode: false,
      TaskToAdd: null,
    };
  }
  //   onSearch = (event) => {
  //     let filtered = this.state.allTasks.filter((m) =>
  //       m.name.toLowerCase().includes(event.target.value.toLowerCase())
  //     );
  //     let newState = { ...this.state };
  //     newState.Tasks = filtered;
  //     this.setState(newState);
  //   };

  onRerender = (isOnLeftMode, isOnCompletedMode) => {
    if (isOnLeftMode === false && isOnCompletedMode === false) {
      this.onAll();
    } else if (isOnLeftMode === true && isOnCompletedMode === false) {
      this.onLeft();
    } else if (isOnLeftMode === false && isOnCompletedMode === true) {
      this.onCompleted();
    } else {
      console.error(
        'something went wrong, isOnLeftMode and isOnCompletedMode are both true'
      );
    }
  };

  onAddTask = (task) => {
    let newTasks = [...this.state.allTasks, task];
    let newState = { ...this.state };
    newState.allTasks = newTasks;
    newState.Tasks = newState.allTasks;

    //this.onRerender(newState.isOnLeftMode, newState.isOnCompletedMode);
    if (
      newState.isOnLeftMode === false &&
      newState.isOnCompletedMode === false
    ) {
      this.onAll();
    } else if (
      newState.isOnLeftMode === true &&
      newState.isOnCompletedMode === false
    ) {
      this.onLeft();
    } else if (
      newState.isOnLeftMode === false &&
      newState.isOnCompletedMode === true
    ) {
      this.onCompleted();
    } else {
      console.error(
        'something went wrong, isOnLeftMode and isOnCompletedMode are both true'
      );
    }
    this.setState(newState);
  };

  onRemoveTask = (id) => {
    const newTasks = this.state.allTasks.filter((task) => {
      return task.id !== id;
    });
    let newState = { ...this.state };
    newState.allTasks = newTasks;
    newState.Tasks = newState.allTasks;
    // this.onRerender(newState.isOnLeftMode, newState.isOnCompletedMode);
    if (
      newState.isOnLeftMode === false &&
      newState.isOnCompletedMode === false
    ) {
      this.onAll();
    } else if (
      newState.isOnLeftMode === true &&
      newState.isOnCompletedMode === false
    ) {
      this.onLeft();
    } else if (
      newState.isOnLeftMode === false &&
      newState.isOnCompletedMode === true
    ) {
      this.onCompleted();
    } else {
      console.error(
        'something went wrong, isOnLeftMode and isOnCompletedMode are both true'
      );
    }
    this.setState(newState);
  };

  onCompleted = (event) => {
    //console.log('allTasks on completed  ', this.state.allTasks);
    let filtered = this.state.allTasks.filter(
      (task) => task.isTaskFinished == 'finished'
    );
    console.log('filtered on completed  ', filtered);
    let newState = { ...this.state };
    newState.Tasks = filtered;
    newState.isOnLeftMode = false;
    newState.isOnCompletedMode = true;
    this.setState(newState);
  };

  onAll = (event) => {
    console.log('State allTasks after update in home: ', this.state.allTasks);
    let newState = { ...this.state };
    newState.Tasks = this.state.allTasks;
    newState.isOnLeftMode = false;
    newState.isOnCompletedMode = false;
    this.setState(newState);
  };

  onLeft = (event) => {
    //console.log('allTasks on left ', this.state.allTasks);
    let filtered = this.state.allTasks.filter(
      (task) => task.isTaskFinished == 'not finished'
    );
    console.log('filtered on left  ', filtered);
    let newState = { ...this.state };
    newState.Tasks = filtered;
    newState.isOnLeftMode = true;
    newState.isOnCompletedMode = false;
    this.setState(newState);
  };

  render() {
    const { Tasks, isOnLeftMode, isOnCompletedMode, allTasks } = this.state;
    return (
      <div>
        <h1>Tasks App</h1>
        <TaskList
          onAddTask={this.onAddTask}
          Tasks={Tasks}
          allTasks={allTasks}
          onRemoveTask={this.onRemoveTask}
          onSearch={this.onSearch}
          onCompleted={this.onCompleted}
          onAll={this.onAll}
          onLeft={this.onLeft}
          isOnLeftMode={isOnLeftMode}
          isOnCompletedMode={isOnCompletedMode}
        />
      </div>
    );
  }
}

export default Home;
