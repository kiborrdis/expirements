import { combineReducers } from 'redux'
export const enviromentApp =  combineReducers({
		planets: updatePlanets,
		enviroment: updateEnviroment
	});

function updatePlanets(state = {
		isFetching: false,
		list: [{ name: 'saturn', size: 5000, id: 0, class: 'GG'},
		 		{ name: 'jupiter', size: 6000, id: 1, class: 'GG'}] 
	}, action) {
	let objects
	switch(action.type) {
		case 'OBJ_CREATED':
			return {
				isFetching: state.isFetching, 
				list: [...(state.list), {
											name: action.description,
											size: action.size,
											class: action.class,
											id: action.id
										}]};
		case 'OBJ_DESTROYED':
			return state;
		case 'OBJ_FETCHING':
			return {
				isFetching: true, 
				list: [...(state.list)]
			};
		case 'OBJ_FETCHED':
			let newPlanets = [...(state.list)];
			if(action.planets) {
				action.planets.forEach(function(current) {
					let currentId = current.id,
						i;
					for(i in newPlanets) {
						if(newPlanets[i].id === currentId) {
							newPlanets[i] = Object.assign({}, current);
							return;
						}
					}
					newPlanets.push(current);
				});
			}
			return {
				isFetching: false,
				list: newPlanets
			};
		default:
			return state;
	}
}

function updateEnviroment(state = 'water', action) {
	switch(action.type) {
		case 'SET_ENVIROMENT':
			return action.enviroment;
		default:
			return state;
	}
}
