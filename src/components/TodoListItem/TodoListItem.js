import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onLabelClick, onButtonImportantClick, important, done} = this.props;
    
    let classNames = 'todo-list-item';    

    if (important) {
      classNames += ' important';
    }
    
    if (done) {
      classNames += ' done';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onLabelClick}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onButtonImportantClick}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}

