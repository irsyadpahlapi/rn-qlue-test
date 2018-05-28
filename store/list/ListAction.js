import axios from 'axios'
import {
  GET_SUCCESS,
  GET_LOADING,
  GET_ERROR,
} from './ListType'

export const getlist = () => {
  return dispatch => {
    dispatch(getloading());
    axios.get('https://qlue-external-api.appspot.com/example/top_report',{
      headers:{
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicWx1ZWluIiwiaWF0IjoxNDk0Mzk5Njg1fQ.mG5wmoCwmchufTPloxI7AjZaeM_bwcpCEJpyUnCDrmk'
      }
    })
    .then(response => {
        dispatch(getsucces(response.data));
    })
    .catch(err => {
        console.log(err)
        dispatch(geterror());
    });
  }
}

const getsucces = (payload) => {
  return {
    type: GET_SUCCESS,
    payload
  }
}

const getloading = () => {
  return {
    type: GET_LOADING
  }
}

const geterror = () => {
  return {
    type: GET_ERROR
  }
}
