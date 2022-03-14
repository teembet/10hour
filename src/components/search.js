import React from 'react'
import {Input,Select,Button  } from 'antd';
import '../assets/css/table.css'
const Search = ({handleSelect,handleChange,inputValue,submitSearch}) => {

const options=[
    {
        name:"Title", value:"job_title"
    },
    {
        name:"Experience", value:"exp"
    },
    {
        name:"City", value:"city"
    },
    {
        name:"Country", value:"country"
    }
]

  return (
      <>    <div className='row mb-5'>
    <div className='col-lg-6 col-12 m-4'>
               
    <div className='form-group'>
                  <label>Select a Filter</label>
                  <div className='radio-btns'>
                    {options.map((opt,index) => (
                      <div>
                        <input
                          type='radio'
                          onClick={() => handleSelect(opt.value)}
                          name='filter'
                          id={opt.name}
                        />
                        <label for={opt.name} className='radio-btn'>
                          {opt.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              
              </div>
              <div className='col-lg-6 col-12 mt-5'>
                <div className='form-group row'>
                  <Input
                    name='Search'
                    type='text'
                    placeholder='Search'
                 value={inputValue}
                    onChange={handleChange}
             
                  />
                         <Button onClick={submitSearch}  type='primary'>Search</Button>
                </div>
         
              </div>
    
            
    
             
            </div>
            </>

  )
}

export default Search