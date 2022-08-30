import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: props.isTaskFinished,
      chcboxValue: props.isBoexChecked,
    };
  }
  onChangeFlag = () => {
    this.props.onChangeTaskFlag();
    let newState = { ...this.state };
    if (this.props.isTaskFinished === 'finished') {
      newState.flag = 'not finished';
      newState.chcboxValue = false;
    } else {
      newState.flag = 'finished';
      newState.chcboxValue = true;
    }
    this.setState(newState);
  };

  render() {
    const { task } = this.props;
    console.log('task on tasl preview ', task);

    return (
      <section className='TaskPreview TaskPreview-row TaskPreview-spacebetween'>
        <div className='TaskPreview TaskPreview-row'>
          <input
            type='checkbox'
            onChange={this.onChangeFlag}
            value={this.state.flag}
            checked={this.state.chcboxValue}
          />
          <p className='task'>{task.text}</p>
        </div>
        <button onClick={() => this.props.onRemove()}>delete</button>
      </section>
    );
  }
}

export default Task;
