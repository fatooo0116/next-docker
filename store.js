import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


const exInitialState = {
  mobileMenu: false,
}


export const actionTypes = {
  MOBILEOPEN: 'MENUOPEN',
  MOBILECLOSE: 'MENUCLOSE'
}



// REDUCERS
export const reducer = (state = exInitialState, action) => {

  switch (action.type) {
    case 'MENUOPEN':

      return Object.assign({}, state, {
        mobileMenu: true
      })
    case 'MENUCLOSE':

      return Object.assign({}, state, {
        mobileMenu: false
      })
    default:
      return Object.assign({}, state, {
        mobileMenu: false
      })
  }
}

// ACTIONS

export const menuOpen = () =>  dispatch => {
  return dispatch({ type: actionTypes.MOBILEOPEN });
}

export const menuClose = () => dispatch => {
  return dispatch({ type: actionTypes.MOBILECLOSE });
}

export function initializeStore (initialState = exInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}


// ACTIONS
