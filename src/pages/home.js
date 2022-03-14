import React from 'react'
import TableRecords from '../components/table'
import { Button } from 'antd'
import Link from 'react-router-dom/Link'
const Home = () => {
  return (
    <>    <div className='col-lg-12 mt-3' style={{justifyContent:'flex-end',display:'flex'}}>
<Link className="m-4"  to='/saved'  type='secondary'>View Saved Profiles</Link>
<Link className="m-4"  to="/deleted">View Deleted Profiles</Link>
</div>
   <TableRecords viewData={true}/>

   </>

  )
}

export default Home