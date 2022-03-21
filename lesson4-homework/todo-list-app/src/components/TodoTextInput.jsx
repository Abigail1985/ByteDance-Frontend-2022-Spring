import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
  // static propTypes = {
  //   onSave: PropTypes.func.isRequired,
  //   text: PropTypes.string,
  //   placeholder: PropTypes.string,
  //   editing: PropTypes.bool,
  //   newTodo: PropTypes.bool,
  // };

  state = {
    text: this.props.text || '',
  };

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    const { editing, newTodo, placeholder } = this.props;
    const { text } = this.state;

    return (
      <input
        className={classnames({
          edit: editing,
          'new-todo': newTodo,
        })}
        type="text"
        placeholder={placeholder}
        autoFocus="true"
        value={text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
