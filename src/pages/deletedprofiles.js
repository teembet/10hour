import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TableRecords from '../components/table';
import Link from 'react-router-dom/Link'
const DeletedProfiles = () => {
    let list=useSelector((state)=>state.deletedProfile)
    const [savedList,setSavedList]=useState([])
    useEffect(()=>{
    
      if(list.length<1){
        return <Redirect to="/"/>
        
      }else{
         const results=list.filter(element=>{
          if(Object.keys(element).length !==0){
              return true;
          }
          return false
         })
        
         setSavedList(results)
      }
           },[savedList]);

           
  return (
    <>
    <div className='col-lg-12 mt-3' style={{justifyContent:'flex-end',display:'flex'}}>
   <Link className="m-4"  to='/'  type='secondary'>Home</Link>
   <Link className="m-4"  to="/saved">View Saved Profiles</Link>
   </div>
   <h1>Deleted Profiles</h1>
   <TableRecords savedList={savedList} viewData={false}/>
   </>
   
  )
}

export default DeletedProfiles