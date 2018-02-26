import axios from 'axios';

export const DOG_FETCH = 'dogs/DOG_FETCH';
export const SET_DOGS = 'dogs/SET_DOGS';
export const HANDLE_FILTER = 'dogs/HANDLE_FILTER';

const initialState = {
    dogsList: [],
    filterIsVisible: 'close'
}

export function dogs(state = initialState, action) {
    switch (action.type) {
        case SET_DOGS:
            return {
                ...state,
                dogsList: action.dogsList
            }

        default:
            return state
    }
}


export function fetchDogs() {

    return dispatch => {
        return axios.get(`https://dogheroserver.herokuapp.com/dogs`)
            .then(response => dispatch(setDogs(response.data)))
    }
}

export function setDogs(data) {
    return {
        type: SET_DOGS,
        dogsList: data
    }
}


