import React, { Component } from 'react';
import ToDoList from './todo-list';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);

    this.state = {
      items: []
    };
  }

  addItem(event) {
    event.preventDefault();
    const item = event.target.elements.items.value.trim();


      this.setState((prevState) => {
        return {
          items: prevState.items.concat(item)
        };
      });
      event.target.elements.items.value = '';

    console.log(this.state.items);

  }



  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input placeholder="New" type="text" name="items" />
          <button>+
          </button>
        </form>
        <ToDoList listItems={this.state.items} />

      </div>
    );
  }//endrender
}//endclass


export default ToDoForm;
