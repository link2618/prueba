import { combineReducers } from 'redux'
import actionTypes from './types'
import { log } from '../data'

const logueado = (state = log, action) => {
    switch(action.type) {
        case actionTypes.LOGEADO: {
            return state.map(x => x.id === action.payload.data1[0].id ? ({ ...x, activo: !x.activo }) : x)
        }
        default: {
            return state
        }
    }
}

/* const publicity = (state = publicidad, action) => {
    switch(action.type) {
        default: {
            return state
        }
    }
}
 */
const rootReducer = combineReducers({ logueado })

export default rootReducer