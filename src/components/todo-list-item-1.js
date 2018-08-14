import React, { Component } from 'react';

const ToDoListItem = ({item}) => {


  return (
      <li className="list-group-item">{item}
          <button>X</button>


    </li>
  );
};//endconst

export default ToDoListItem;
