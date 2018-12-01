import React, { useState } from 'react';

function TodoList() {
	const [count, setCount] = useState(0);
	const [items, setItems] = useState([]);
	const [field, setField] = useState();

	const updateTodo = (f) => {
		if (!f.value) {
			return;
		}

		const newItems = [...items];
		newItems.push(f.value);

		const clearedField = f;
		clearedField.value = '';

		setCount(count + 1);
		setField(clearedField);
		setItems(newItems);
	}

	return (
		<div>
			<ol>
				{ items.map((item) => <li>{item}</li>) }
			</ol>
			<h3>
				Add Todo:
			</h3>
			<div>
				<input onBlur={(e) => { setField(e.target) }} />
				<button onClick={() => { updateTodo(field) }} >Add</button>
			</div>
		</div>
	);
}

export default TodoList;

