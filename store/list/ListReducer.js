import {
  GET_SUCCESS,
  GET_LOADING,
  GET_ERROR,
} from './ListType'

const initialState = {
    loading: false,
    error: false,
    data: []
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      }
    case GET_LOADING:
      return {
        ...state,
        loading: true,
        error:false
      }
    case GET_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }

}

export default reducers
