import React from 'react';

import { customAlphabet } from 'nanoid/non-secure';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

class AddTaskLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: '',
    };
  }
  onChange = (e) => {
    let newState = { ...this.state };
    newState.taskText = e.target.value;
    this.setState(newState);
    console.log(e.target.value);
  };

  onAddingTask = (e) => {
    const task = { text: this.state.taskText, id: nanoid() };
    this.props.handleAddingTask(task);
    console.log('task to add in tast add line: ', task);
  };

  render() {
    return (
      <section>
        <input
          placeholder='Enter Post Title'
          value={this.state.taskText}
          onChange={this.onChange}
        />
        <button onClick={() => this.onAddingTask()}>add</button>
      </section>
    );
  }
}

export default AddTaskLine;
