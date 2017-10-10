var redux = require('redux');
// var defaultState = {
// 	array: ['PHP', 'React', 'NodeJS'],
// 	isAdding: false
// }
// var reducer = (state = defaultState, action) => {
// 	switch (action.type) {
// 		case 'TOGGLE_ISADDING':
// 			return {...state, isAdding: !state.isAdding}
// 		case 'ADD_NOTE':
// 			return {...state, array: [...state.array, action.note]}
// 		case 'REMOVE_NOTE':
// 			return {...state, array: state.array.filter((e, i) => i != action.index)}
// 		default:
// 			return state;
// 	}
// }

var arrayReducer = (state= ['Python', 'React', 'NodeJS'], action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return [...state, action.note]
		case 'REMOVE_NOTE':
			return state.filter((e, i) => i != action.index)
		default:
			return state;
	}
};

var isAddingReducer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_ISADDING':
			return !state;
		default:
			return state;
	}
};

var reducer = redux.combineReducers({
	array: arrayReducer,
	isAdding: isAddingReducer
});



var store = redux.createStore(reducer, redux.compose(
	//set up to use redux dev tool
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

//print out the last output of state in browser
store.subscribe(() => {
	var str = store.getState();
	// document.getElementById('p-details').innerHTML = JSON.stringify(str);
});

//actions
store.dispatch({type: 'TOGGLE_ISADDING'});
store.dispatch({
	type: 'ADD_NOTE',
	note: 'Redux-Saga'
});
store.dispatch({
	type: 'REMOVE_NOTE',
	index: 1
});
module.exports = store;

