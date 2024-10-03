import React,{useState,useEffect} from 'react'
import ContactCard from './ContactCard'
import { getContact } from '../services/server'

function Contact({result}) {

    const [data,setData]=useState([])
    const [resp,setResp]=useState({})

    useEffect(() => {
      getData()
    },[result,resp])


const getData=async()=>{
  const result=await getContact()
  console.log(result)
  if(result.status==200){
    setData(result.data)
  }
}

  return (

<>
<div className='container-fluid border border-2 shadow '>
  {
    data.length>0?
    <div className='row p-4' style={{height:'720px'}}>
{data.map(item=>(

  <ContactCard contact={item} res={setResp}/>


))}
    </div>
      
    :
    <h4 className='text-danger text-center'>No Contacts Available!!</h4>

  }



     </div>
</>
  )
}

export default Contact