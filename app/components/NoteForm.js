import React from 'react';

class NoteForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {isAdding: false}
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.handleAdd(this.refs.txt.value);
		this.refs.txt.value='';
		this.toggle();
	}

	toggle(){
		this.state.isAdding = !this.state.isAdding;
		this.setState(this.state);
	}

	render(){
		if (this.state.isAdding) return(
			<form className="noteform-div" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" placeholder="Add your new note!" ref="txt"/>
				<br/><br/>
				<button>Add</button>
			</form>		
		) 
		return <button className="noteform-button-add" onClick={this.toggle.bind(this)}>+</button>
	}
}

module.exports = NoteForm;