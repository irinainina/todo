import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';

import './App.css';

export default class App extends Component {
  
  maxId = 100;
   
  state = {
    todoData: [
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Have a lunch')      
    ],
    term: '',
    filter: 'all' // all, active, done
  }
  
  createItem(label) {
    return { 
      label, 
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.filter(item => item.id !== id)
      };
    });
  };
  
  addItem = (text) => {
    const newItem = this.createItem(text)
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, newItem]
      };
    });
  }
  
  toggleItem = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      return [
        ...arr.slice(0, idx), 
        newItem,
        ...arr.slice(idx + 1)
      ]
  };
  
  doneItem = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleItem(todoData, id, 'done')
      }
    });
  };
  
  importantItem = (id) => {
    this.setState(({todoData}) => {      
      return {
        todoData: this.toggleItem(todoData, id, 'important')
      };
    });
  };
  
  onSearchChange = (term) => {
    this.setState({ term })
  }
  
  onFilterChange = (filter) => {
    this.setState({ filter })
  }
  
  search(items, str) {
    if(str.length === 0) {
      return items;
    }
    return items.filter(item => {
       return item.label
         .toLowerCase()
         .indexOf(str.toLowerCase()) > -1;
    })
  }
  
  filterItems(items, filter) {
    if(filter === 'all') {
      return items
    } else if (filter === 'active') {
      return items.filter(item => !item.done)
    } else if (filter === 'done') {
      return items.filter(item => item.done)
    }
  }
  
  render() {
    const {todoData, term, filter} = this.state;
    
    const visibleItem = this.filterItems(this.search(todoData, term), filter);
    
    const doneCount = this.state.todoData.filter(el => el.done === true).length;
    
    const todoCount = this.state.todoData.length - doneCount;
    
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter filter={filter}
                             onFilterChange={this.onFilterChange}/>
        </div>

        <TodoList todos={visibleItem} 
                  onDeletedApp={this.deleteItem}
                  onLabelClickApp={this.doneItem}
                  onButtonImportantClickApp={this.importantItem}/>
        <ItemAddForm addItemApp={ this.addItem }/>
      </div>
    );
  }
};

