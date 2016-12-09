import React from 'react';

class LongDesc extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(this.props.text) {
			return <div className="row">
				<div className="small-12 column todo-long-desc">
					{ this.props.text.split("\n").map((line, parNum) => <p key={parNum}>{line}</p>) }
				</div>
			</div>;
		}
		else {
			return null;
		}
	}
}

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title || "Do something new…",
			done: !!props.done,
			longDesc: props.longDesc || ""
		};
	}

	toggleDone() {
		this.setState({done: !this.state.done});
	}

	render() {
		return <div className={'todo-list-item ' + (this.state.done ? 'status-done' : 'status-todo')}>
			<div className="row">
				<h3 className="small-10 columns">{this.state.title}</h3>
				<div className="todo-item-edit small-2 columns">
					<label><input type="checkbox" checked={this.state.done} onChange={e => this.toggleDone(e)}/>Done</label>
				</div>
			</div>
			<LongDesc text={this.state.longDesc}/>
		</div>;
	}
}

module.exports = ListItem;
