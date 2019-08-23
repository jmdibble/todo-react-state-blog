import React from 'react';

// Our final functional component which renders a singular list item
const ListItem = props => {
  return (
    // Paragraph tag which accepts our item which has been passed down as props from List which was passed down from ToDoApp
    // Button which executes deleteItem which was handed down as props from List which was passed down from ToDoApp. This function accepts index as it's argument which was passed down as props from List
    <div className='ListItem'>
      <p>{props.item}</p>
      <button onClick={() => props.deleteItem(props.index)}>Done</button>
    </div>
  );
};

export default ListItem;
