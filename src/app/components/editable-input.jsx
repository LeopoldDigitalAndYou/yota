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
		return true;
	}

	stopEditing() {
		this.setState({editing: false});
		return true;
	}

	render() {
		if (this.state.editing) {
			return <input
					autoFocus
					value={ this.props.value || "" }
					onChange={ e => this.props.onChange(e) }
					onBlur={ e => this.stopEditing() }
			    onKeyPress={ e => { if(e.which == 13 || e.keyCode == 13) { this.props.onChange(e); } return true; }  }
			    onKeyDown={ e => { if(e.which == 13 || e.keyCode == 13) { this.props.onChange(e); } return true; }  }
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
