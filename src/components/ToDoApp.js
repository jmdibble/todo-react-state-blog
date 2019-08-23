import React, { Component } from 'react';

// Import of our AddItem and List component
import AddItem from './AddItem';
import List from './List';

// This is the main component handling state and is a class component
export default class ToDoApp extends Component {

  // Initialise the state with an empty items array
  state = {
    items: []
  };

  // Handler function which takes an event and item and concatenates the item to the state items array
  handleAddItem = (event, item) => {
    event.preventDefault();
    console.log(item);
    this.setState({
      items: this.state.items.concat(item)
    });
  };

  // Function which filters out the chosen item and deletes it from the state items array
  deleteItem = index => {
    this.setState({
      items: this.state.items.filter((item, i) => {
        return i !== index;
      })
    });
  };

  // Render method of AddItem and List from imported components at top
  render() {
    console.log(this.state.items);
    return (
      <div className='ToDoApp'>
        <AddItem handleAddItem={this.handleAddItem} />
        <List deleteItem={this.deleteItem} items={this.state.items} />
      </div>
    );
  }
}
