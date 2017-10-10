import React from 'react';
import {connect} from 'react-redux';

class Note extends React.Component{
	removeNote(){
		var {index, dispatch} = this.props;
		dispatch({type: 'REMOVE_NOTE', index});
	}
	render(){
		return(
			<div className="note-div">
				<p className="note-p">{this.props.children}</p>
				<hr/>
				<button onClick={this.removeNote.bind(this)}>Delete</button>
			</div>
		);
	}
}

module.exports = connect()(Note);