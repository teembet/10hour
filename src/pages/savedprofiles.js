import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TableRecords from '../components/table';
import Link from 'react-router-dom/Link'
const SavedProfiles = () => {
    const savedList=useSelector((state)=>state.savedProfile)
    useEffect(()=>{

      if(savedList===undefined){
        return <Redirect to="/"/>
          
      }
           },[savedList]);

          

  return (
      <>
 <div className='col-lg-12 mt-3' style={{justifyContent:'flex-end',display:'flex'}}>
<Link className="m-4"  to='/'  type='secondary'>Home</Link>
<Link className="m-4"  to="/deleted">View Deleted Profiles</Link>
</div>
<h1>Saved Profiles</h1>
<TableRecords savedList={savedList} viewData={false}/>
</>

  )
}

export default SavedProfiles