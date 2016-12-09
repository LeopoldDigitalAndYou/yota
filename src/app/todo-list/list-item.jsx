"use strict";

import React from 'react';

import EditableInput from '../components/editable-input';

class LongDesc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: !!this.props.editing
		};
	}

	startEditing() {
		this.setState({editing: true});
		return true;
	}

	stopEditing() {
		this.setState({editing: false});
		return true;
	}

	render() {
		if (this.state.editing) {
			return <div className="row">
				<textarea
						className="small-12 columns todo-long-desc"
						autoFocus
						value={ this.props.text }
						onChange={ e => this.props.onChange(e) }
						onBlur={ e => this.stopEditing() }
				/>
			</div>;
		}
		if (this.props.text) {
			return <div className="row">
				<div
						className="small-12 column todo-long-desc"
						onClick={e => this.startEditing()}>
					{ this.props.text.split("\n").map((line, parNum) => <p key={parNum}>{line}</p>) }
				</div>
			</div>;
		}
		return null;
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

	update(propName, event) {
		this.setState({[propName]: event.target.value})
	}

	toggleDone() {
		this.setState({done: !this.state.done});
	}

	render() {
		return <div className={'todo-list-item ' + (this.state.done ? 'status-done' : 'status-todo')}>
			<div className="row">
				<h3 className="small-10 columns">
					<EditableInput value={this.state.title} editing={false} onChange={e => this.update("title", e)}/>
				</h3>
				<div className="todo-item-edit small-2 columns">
					<label><input type="checkbox" checked={this.state.done} onChange={e => this.toggleDone(e)}/>Done</label>
				</div>
			</div>
			<LongDesc text={this.state.longDesc} editing={false} onChange={e => this.update("longDesc", e)}/>
		</div>;
	}
}

module.exports = ListItem;
