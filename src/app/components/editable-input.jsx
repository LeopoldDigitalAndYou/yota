import React from 'react';

class EditableInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value || "",
			editing: !!this.props.editing
		};
	}

	startEditing() {
		this.setState({editing: true});
	}

	stopEditing() {
		this.setState({editing: false});
	}

	update(ev) {
		this.setState({value: ev.target.value});
	}

	render() {
		if (this.state.editing) {
			return <input
					autoFocus
					value={ this.state.value }
					onChange={ e => this.update(e) }
					onBlur={ e => this.stopEditing() }
			/>;
		}
		else {
			return <span onClick={e => this.startEditing()}>
				{ this.state.value }
				</span>;
		}
	}
}

module.exports = EditableInput;
