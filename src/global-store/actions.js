import actionTypes from './types'

// Action Creator
export const logueado = item => {
    // Action - object
    return { type: actionTypes.LOGEADO, payload: item }
}