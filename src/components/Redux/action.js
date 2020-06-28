export const updateCurrentAdmin = (newAdmin)=>{
  return {
    type: 'UPDATE_CURRENT_ADMIN',
    payload: newAdmin
  }
}