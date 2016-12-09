import React from 'react';
import ListItem from './list-item';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <ol className="todo-list">
			{ this.props.todoItems.map( todo => <li key={todo.id}>
				<ListItem title={todo.title} done={todo.done} />
			</li> ) }
		</ol>
	}
}

module.exports = TodoList;
