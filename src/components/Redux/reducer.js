import {combineReducers} from 'redux'

const updateCurrentAdminReducer = (admin = null, action)=>{

  if (action.type === 'UPDATE_CURRENT_ADMIN'){
    console.log('action')
    return action.payload
  }
  return admin 
}

export default combineReducers({
  admin: updateCurrentAdminReducer,
})