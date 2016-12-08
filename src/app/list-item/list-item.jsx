import React from 'react';

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title || "Do something new…",
			done: !!props.done
		};
	}

	render() {
		return <div className={'todo-list-item ' + (this.state.done ? 'status-done' : 'status-todo')}>
			<h3>{this.state.title}</h3>
		</div>;
	}
}

module.exports = ListItem;
