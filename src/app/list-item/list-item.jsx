import React from 'react';

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title || "Do something new…";
		this.done = !!props.done;
	}
	render() {
		return <div className={'todo-list-item ' + (this.props.done ? 'status-done' : 'status-todo')}>
			<h3>{this.title}</h3>
		</div>;
	}
}

module.exports = ListItem;
