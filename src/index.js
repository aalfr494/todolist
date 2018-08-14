import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './components/todoform';

class App extends Component {
	constructor(props) {
		super (props);
    this.state = {
      count:0
    };
	}

	render() {
		return (
			<div>
				<h1>ToDoList</h1>
				<ToDoForm />
			</div>

			);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
