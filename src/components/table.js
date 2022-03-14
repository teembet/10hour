import React,{useState,useEffect} from 'react'
import { deleteProfile, fetchProfiles, saveProfile,deletedProfile } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import {Alert, Avatar, Table, Button, Spin,  } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Search from './search'
import PaginationComponent from './pagination';
const TableRecords = ({savedList,viewData}) => {
const dispatch = useDispatch();
const profileList=useSelector((state)=>state.profiles)
const [job_title, setJobTitle] = useState('');
const [exp, setExp] = useState("");
const [city, setCity] = useState("");
const [country, setCountry] = useState("");
const [inputValue,setInputValue]=useState("")
const [fieldValue,setFieldValue]=useState("")
  const [saveAlert,SetSaveAlert]=useState(false)
  const [cursor,setCursor]=useState("")

    useEffect(()=>{
 dispatch(fetchProfiles(job_title,exp,city,country,cursor))
    },[job_title,exp,city,country,cursor]);

const ProfileImg = ({ img }) => {
        return <Avatar size={'small'} src={img} />;
      };
const handleSaveInfo=(profile)=>{
dispatch(saveProfile(profile));
SetSaveAlert(true)
}

const  handleDeletePatient= async(profile,id)=>{
  dispatch(deleteProfile(id))
 dispatch(deletedProfile(profile))  
}

const onClose=()=>SetSaveAlert(false)


  const actions = (profile) => (
    <div className='buttons-list nowrap'>
    {viewData &&  <Button icon={<DownloadOutlined />} shape='circle' onClick={()=>handleSaveInfo(profile)}>
      
      </Button>}
      
    {viewData &&  <Button onClick={()=>handleDeletePatient(profile,profile.uuid)} shape='circle' danger>
        <span className='icofont icofont-ui-delete' />
      </Button>}
    </div>
  );


    const columns= [

      {
        key: 'index',
        title: 'S/N',
        dataIndex: 'index',
        render: (item, record, index) => <strong>{index + 1}</strong> 
      },
        {
          key: 'profile_picture',
          title: 'Photo',
          dataIndex: 'profile_picture',
          render: (profile_picture) => <ProfileImg img={profile_picture} />
        },
        {
          key: 'first_name',
          dataIndex: 'first_name',
          title: 'First Name',
         
          render: (first_name) => <strong>{first_name}</strong>
        },
        {
            key: 'last_name',
            dataIndex: 'last_name',
            title: 'Last Name',
           
            render: (last_name) => <strong>{last_name}</strong>
          },
          {
            key: 'email',
            dataIndex: 'email',
            title: 'Email',
           
            render: (email) => <strong>{email}</strong>
          },
          {
            key: 'phone',
            dataIndex: 'phone',
            title: 'Phone',
           
            render: (phone) => <strong>{phone}</strong>
          },
        {
          key: 'preferred_job_title',
          dataIndex: 'preferred_job_title',
          title: 'Job Title',
         
          render: (preferred_job_title) => (
            <span className='nowrap'>
              {preferred_job_title}
            </span>
          )
        },
        {
          key: 'city',
          dataIndex: 'city',
          title: 'City',
        
          render: (city) => (
            <span className='nowrap' >
              {city}
            </span>
          )
        },
        {
          key: 'country',
          dataIndex: 'country',
          title: 'Country',
       
          render: (country) => (
            <span  >
              {country}
            </span>
          )
        },
      
        {
          key: 'actions',
          title: 'Actions',
           render: actions 
        }
      ];

      const handleSelect = (value) => {
     setFieldValue(value)
     
      }
      const handleChange = (e) => {
     
        setInputValue(e.target.value );
      
      };

      const submitSearch=()=>{
        if(!fieldValue)return
switch(fieldValue){
  case 'job_title':{
setJobTitle(inputValue)
    break;
  }
  case 'exp':{
    setExp(inputValue)
        break;
      }
      case 'city':{
        setCity(inputValue)
            break;
          }
          case 'country':{
            setCountry(inputValue)
                break;
              }
default:
  return false
}
   }

   const pageChange=()=>{

setCursor(localStorage.getItem("nextPage"))

   }
  return (
<>
{saveAlert&&<Alert message="Profile Saved" type="success"   closable
      onClose={onClose} afterClose={onClose} showIcon />}

{viewData &&< Search handleChange={handleChange} handleSelect={handleSelect} inputValue={inputValue} submitSearch={submitSearch}/>}

    <Table
      pagination={false}
    className='accent-header col-lg-12'
     rowKey={list=>list.uuid}
     dataSource={savedList?savedList:profileList}
     columns={columns}
     size={'small'}
    scroll={{ y: 400 }}
    bordered 
    loading={{indicator:<Spin/>,spinning:true}}
  />
{viewData &&<PaginationComponent pageChange={pageChange}/>}
  
  </>
  )
}

export default TableRecords