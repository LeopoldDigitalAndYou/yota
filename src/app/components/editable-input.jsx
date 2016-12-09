"use strict";

import React from 'react';

class EditableInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: !!this.props.editing
		};
	}

	startEditing() {
		this.setState({editing: true});
	}

	stopEditing() {
		this.setState({editing: false});
	}

	render() {
		if (this.state.editing) {
			return <input
					autoFocus
					value={ this.props.value || "" }
					onChange={ e => this.props.onChange(e) }
					onBlur={ e => this.stopEditing() }
			/>;
		}
		else {
			return <span onClick={e => this.startEditing()}>
				{ this.props.value || "" }
				</span>;
		}
	}
}

module.exports = EditableInput;
