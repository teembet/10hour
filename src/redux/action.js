import {userConstants} from './types';
import axios from 'axios';
  
  export const setProfiles = (profile)=> ({ 
    type: userConstants.SET_PROFILE,
    payload: profile
  });
  
  export const saveProfile = (profile) => ({
    type: userConstants.SAVE_PROFILE,
    payload: profile
  });
  
  export const deleteProfile = (id) => ({
    type: userConstants.DELETE_PROFILE,
    id
  });

  export const deletedProfile = (profile) => ({
    type: userConstants.DELETED_PROFILE,
    payload:profile,

  });
   
  export const fetchProfiles = (job_title,exp,city,country,cursor) => {
     
    return dispatch => {
      axios
        .get(`https://fictus.10hourlabs.com/talents?job_title=${job_title}&years_of_experience=${exp}&city=${city}&country=${country}&cursor=${cursor}`)
        .then(res => {   
         const data= res.data.items
       localStorage.setItem("nextPage",res.data.next)
         dispatch(setProfiles(data));
        })
        .catch(err => console.error('Server connections error'));
    };
  };