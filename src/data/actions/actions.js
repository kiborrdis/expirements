import {AJAX} from 'utils/ajax.js';

export function destroyPlanet(id, description) {
	return {
		type: "OBJ_DESTROYED",
		id: id,
		description: description
	}
}

export function createPlanet(id, description) {
	return {
		type: "OBJ_CREATED",
		id: id,
		description: description
	}
}

export function movePlanet(id, x, y) {
	return {
		type: "OBJ_MOVED",
		x: x,
		y: y
	}
}

export function countPlanet(id) {
	return {
		type: "OBJ_COUNTED",
		id: id
	}
}

export function setEnviroment(enviroment) {
	return {
		type: "SET_ENVIROMENT",
		enviroment:  enviroment
	}
}

function planetsFetchStart() {
	return {
		type: "OBJ_FETCHING"
	}
}

function planetsFetchEnd(response) {
	return {
		type: "OBJ_FETCHED",
		planets: response
	}
}

export function fetchPlanets() {
	return (dispatch) => {
		dispatch(planetsFetchStart());
		AJAX('GET' ,'http://localhost:8081/planets', {}, (response) => { 
			dispatch(planetsFetchEnd(response));
		});
	};
}



