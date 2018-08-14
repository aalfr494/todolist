import React, { Component } from 'react';

const ToDoList = (props) => {
    const toDoListItems = props.listItems.map((item) => {
      return (
        <li key={item}>{item}</li>
      );
    });




  return (
    <ul className="col-md-4 list-group">
    {toDoListItems}
    </ul>
  );
};

export default ToDoList;
