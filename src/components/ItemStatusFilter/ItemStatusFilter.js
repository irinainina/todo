import React, { Component } from 'react';

import './ItemStatusFilter.css';


export default class ItemStatusFilter extends Component {
  
  buttonsArr = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]
     
  render() {
    const {filter, onFilterChange} = this.props;
    
    const buttons = this.buttonsArr.map(({name, label}) => {
      const isActive = filter === name;
      const classNames = isActive ? 'btn btn-info': 'btn btn-outline-secondary';
      return (
        <button type="button"
                className={classNames}
                key={name}
                onClick={() => onFilterChange(name)}>
                  {label}
        </button>
      )
    })
    
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
