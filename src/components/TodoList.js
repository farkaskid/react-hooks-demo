import React, { Component } from 'react';

class TodoList extends Component {
	state = {
		count: 0,
		items: []
	}

	updateTodo(f) {
		if (!f.value) {
			return;
		}

		const count = this.state.count + 1;
		const items = [...this.state.items];
		items.push(f.value)
		const field = f
		field.value = ''

		this.setState({ field, count, items });
	}

	render() {
		return (
			<div>
				<ol>
					{ this.state.items.map((item) => <li>{item}</li>) }
				</ol>
				<h3>
					Add Todo:
				</h3>
				<div>
					<input onBlur={(e) => { this.setState({ field: e.target }) }} />
					<button onClick={() => { this.updateTodo(this.state.field) }} >Add</button>
				</div>
			</div>
		)
	}
}

export default TodoList;

