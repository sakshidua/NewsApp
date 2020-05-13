import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    storeFirstTimeLogin: null,
    storeScreenName:['screenName']
  })
  
  export const AppTypes = Types
  export default Creators