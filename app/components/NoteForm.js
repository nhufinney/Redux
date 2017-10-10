import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component{
	handleSubmit(e){
		e.preventDefault();
		var {dispatch} = this.props;
		dispatch({type: 'ADD_NOTE', note: this.refs.txt.value});
		dispatch({type: 'TOGGLE_ISADDING'});
	}

	toggle(){
		var {dispatch} = this.props;
		dispatch({
			type: 'TOGGLE_ISADDING'
		});
	}

	render(){
		if (this.props.isAdding) return(
			<form className="noteform-div" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" placeholder="Add your new note!" ref="txt"/>
				<br/><br/>
				<button>Add</button>
			</form>		
		) 
		return <button className="noteform-button-add" onClick={this.toggle.bind(this)}>+</button>
	}
}

module.exports = connect(function(state){
	return {isAdding: state.isAdding}
})(NoteForm);