import {

    FILMS_STATE,
    NUMBER_OF_ITEMS,
} from '../actionTypes';
import axios from 'axios';



export const getFilms = (day) => (dispatch) =>
    axios.get(`http://api.tvmaze.com/schedule?country=US&date=${day}`).then((res) => {

        dispatch(setFilms(res.data));

    });

/*export function getFilms(day) {
    return (dispatch) => {
        axios.get(`http://api.tvmaze.com/schedule?country=US&${day}`) //
            .then(res => {
                dispatch(setFilms(res.data));
                console.log(res)
            })


    }
}*/

/*const getFilms = (day) => (dispatch) =>
    axios.get("day....").then((res) => {
        dispatch(setFilms(res.data));
    });*/


export function setFilms(data) {
    return { type: FILMS_STATE, payload: data };
}

export function setNumberOfItems(data) {
    return {type: NUMBER_OF_ITEMS, payload: data};
}


