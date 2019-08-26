import React, {Component} from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  
  state = {
    label: ''
  }
  
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItemApp(this.state.label);
    this.setState({
      label: ''
    })
  }
  
  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               placeholder="What need to be done?"
               onChange={this.onLabelChange}
               value={this.state.label}/>
        <button className="btn btn-outline-secondary">
          AddItem
        </button>
      </form>
    )
  }
}
