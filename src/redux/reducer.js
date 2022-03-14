import {userConstants} from './types';


const initialState = [];

export  function profiles(state= initialState ,action) {
  switch (action.type) {
    case userConstants.SET_PROFILE: {
      return action.payload;
    }

    case userConstants.DELETE_PROFILE: {
      const profile = state.filter((el) => el.uuid !== action.id);
      return [...profile];
   
    }
    default: {
      return state;
    }
  }
}

export function savedProfile(state=initialState,action){
  switch (action.type) {
     case userConstants.SAVE_PROFILE:
   return   [ {...action.payload} , ...state]; 
  default:
  return state
  }
}

export function deletedProfile(state=initialState,action){
  switch (action.type) {
     case userConstants.DELETED_PROFILE:
      
   return   [ {...action.payload} , ...state];
  default:
  return state
  }
}
// function getNewId(values) {
//   console.log(values,"values")
//   return values
//     .map((value) => value.id)
//     .map((id) => parseInt(id))
//     .reduce((largest, id) => Math.max(largest, id + 1), -1)
//     .toString();
// }
