import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDeletedApp, onLabelClickApp, onButtonImportantClickApp }) => {

  const elements = todos.map(item => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem 
        label={item.label} 
        done={item.done}
        important={item.important} 
        onDeleted={() => onDeletedApp(item.id)}
        onLabelClick={() => onLabelClickApp(item.id)}
        onButtonImportantClick={() => onButtonImportantClickApp(item.id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
