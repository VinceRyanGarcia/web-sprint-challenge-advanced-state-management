import axios from 'axios';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';
export const SMURF_NEW = 'SMURF_NEW';
export const SMURF_NEW_ERROR = 'SMURF_NEW_ERROR';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_SMURF_START});
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch( err => {
            dispatch({type: FETCH_SMURF_ERROR, payload: err.response})
        }) 
}

export const addSmurf = (smurf) => (dispatch) => {
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({type: SMURF_NEW, payload: smurf})
        })
        .catch( err => {
            dispatch({type: SMURF_NEW_ERROR, payload: err.response});
        })
}

export const newError = (err) => (dispatch) => {
    dispatch({type: SMURF_NEW_ERROR, payload:err});
}
