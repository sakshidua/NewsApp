import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AppTypes } from './Actions'


export const storeFirstTimeLogin = (state) => ({
    ...state,
    firstLogin: true,
  })

  export const storeScreenName = (state,{ screenName }) => ({
    ...state,
    screenName:screenName,
  })
export const reducer = createReducer(INITIAL_STATE, {
    [AppTypes.STORE_FIRST_TIME_LOGIN]: storeFirstTimeLogin,
    [AppTypes.STORE_SCREEN_NAME]:storeScreenName,

  })