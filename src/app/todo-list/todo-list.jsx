import React from 'react';
import ListItem from './list-item';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {todoItems: props.todoItems};
	}

	render() {
		return <ol className="todo-list">
			{ this.state.todoItems.map(todo => <li key={todo.id}>
				<ListItem title={todo.title} done={todo.done} longDesc={todo.longDesc}/>
			</li>) }
		</ol>
	}
}

module.exports = TodoList;
