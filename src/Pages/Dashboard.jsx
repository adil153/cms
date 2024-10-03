import React,{useState} from 'react'
import Add from '../components/Add'
import { Row,Col } from 'react-bootstrap'
import Contact from '../components/Contact'

function Dashboard() {

  const [results,setResult]=useState({})

  return (
<>
<div className='mt-4 ms-5 '>
<Row>
  <Col md={1}>
  <Add Sresult={setResult}/>
  </Col>
  <Col md={11}>
  <h2 >Contact List</h2>  
  <Contact result={results}/>

  </Col>
</Row>
</div>


</>  
)
}

export default Dashboard