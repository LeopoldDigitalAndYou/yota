import React from 'react';

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title || "Do something new…",
			done: !!props.done
		};
	}
	
	toggleDone() {
		this.setState({done: !this.state.done});
	}

	render() {
		return <div className={'todo-list-item ' + (this.state.done ? 'status-done' : 'status-todo')}>
			<div className="row">
				<h3 className="small-9 columns">{this.state.title}</h3>
				<div className="todo-item-edit small-3 columns">
					<label><input type="checkbox" checked={this.state.done} onChange={e => this.toggleDone(e)}/>Done</label>
				</div>
			</div>
		</div>;
	}
}

module.exports = ListItem;
