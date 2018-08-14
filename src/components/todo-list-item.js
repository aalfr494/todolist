import React, { Component } from 'react';

const ToDoListItem = ({item}) => {


  return (
      <li className="list-group-item">{item}
        <div className="video-list">
            <div className="media-left">
              <button>X</button>
            </div>
        </div>


    </li>
  );
};//endconst

export default ToDoListItem;
