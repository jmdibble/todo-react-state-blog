import React from 'react';

// Import our ListItem component
import ListItem from './ListItem';

// Functional component which holds our list items
const List = props => {
  return (
    // Receives our array of items as props from ToDoApp and maps through them
    // It renders each one of these items as a ListItem which has been imported at the top
    // It also passes down the deleteItem function as props to the ListItem 
    <div>
      {props.items.map((item, index) => (
        <ListItem
          index={index}
          deleteItem={props.deleteItem}
          key={index}
          item={item}
        />
      ))}
    </div>
  );
};

export default List;
