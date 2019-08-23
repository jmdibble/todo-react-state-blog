import React, { Component } from 'react';

// This is our second most important component and also holds state
export default class AddItem extends Component {

  // Initialise the state with a text property which is set to an empty string
  state = {
    text: ''
  };

  // Handler function which takes in an event and updates the text state with the value of the event
  handleUpdateText = event => {
    this.setState({
      text: event.target.value
    });
  };

  // Handler function which takes in an event and calls handleAddItem which has been passed down as props 
  // It then resets the text state property back to an empty string
  handleSubmitClear = event => {
    this.props.handleAddItem(event, this.state.text);
    this.setState({ text: '' });
  };

  // Render method which returns a form with an input and a button. 
  // onSubmit the clear handler is called and onChange the text property is being updated in state
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmitClear(event)}>
          <input
            onChange={event => this.handleUpdateText(event)}
            placeholder='Add Item'
            value={this.state.text}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
