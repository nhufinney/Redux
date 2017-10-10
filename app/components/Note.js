import React from 'react';

class Note extends React.Component{
	removeNote(){
		var {index, handleRemove} = this.props;
		handleRemove(index);
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

module.exports = Note;