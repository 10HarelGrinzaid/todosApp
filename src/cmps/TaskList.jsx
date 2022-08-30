import React from 'react';
import Task from './TaskPreview.jsx';
import AddTaskLine from './AddTaskLine.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddingTask = (taskToAdd) => {
    const { onAddTask } = this.props;

    console.log('task to add in task list: ', taskToAdd);

    onAddTask(taskToAdd);
  };

  render() {
    const { Tasks, onRemoveTask, onAll, onCompleted, onLeft } = this.props;
    return (
      <section>
        <AddTaskLine
          taskToAdd={this.state.taskToAdd}
          handleAddingTask={this.handleAddingTask}
        />
        <ul>
          {Tasks.map((task) => {
            console.log('task on task list', task);
            let isBoexChecked;
            if (task.isTaskFinished === 'not finished') {
              isBoexChecked = false;
            } else {
              isBoexChecked = true;
            }
            return (
              <Task
                key={task.id}
                task={task}
                onRemove={() => onRemoveTask(task.id)}
                onChangeTaskFlag={() => {
                  if (task.isTaskFinished === 'not finished') {
                    task.isTaskFinished = 'finished';
                  } else {
                    task.isTaskFinished = 'not finished';
                  }
                  this.props.allTasks.forEach((allTasksTast) => {
                    if (task.id === allTasksTast.id) {
                      allTasksTast.isTaskFinished = task.isTaskFinished;
                    }
                  });
                }}
                isTaskFinished={task.isTaskFinished}
                isBoexChecked={isBoexChecked}
              />
            );
          })}
        </ul>
        <div className='FilterButtons FilterButtons-row'>
          <button onClick={onAll}>all</button>
          <button onClick={onCompleted}>completed</button>
          <button onClick={onLeft}>left</button>
        </div>
      </section>
    );
  }
}

export default TaskList;
