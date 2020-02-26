import React, { Component } from "react"

class TimerForm extends Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleProjectChange = (event) => {
    this.setState({ project: event.target.value });
  };

  handleSubmit = () => {
    const { onFormSubmit, id } = this.props
    const { title, project } = this.state

    onFormSubmit({
      id,
      title,
      project,
    });
  };

  render() {
    const { id, onFormClose } = this.props
    const { title, project } = this.state

    const submitText = id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input
                type='text'
                value={title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='field'>
              <label>Project</label>
              <input
                type='text'
                value={project}
                onChange={this.handleProjectChange}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
                className='ui basic blue button'
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button
                className='ui basic red button'
                onClick={onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm
