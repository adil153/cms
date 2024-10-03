import React from 'react'
import { Link } from 'react-router-dom'
function EditContact() {
  return (
    <>
<section className='p-1'>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <p className='h1 text-primary fw-light mt-3 '>Edit Contact</p>
            </div>
        </div>
        <div className='row'>
            <div className="col-5">
                <form>
                
                    <div className='mb-3 mt-2'>
                        <input type="text" className="form-control border shadow rounded p-3" placeholder='Name' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className="form-control border shadow rounded p-3" placeholder='Photo Url' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className="form-control border shadow rounded p-3" placeholder='Address' />
                    </div>
                    <div className='mb-3'>
                        <input type="email" className="form-control border shadow rounded p-3" placeholder='Email' />
                    </div>
                    <div className='mb-3'>
                        <input type="number" className="form-control border shadow rounded p-3" placeholder='Phone No' />
                    </div>
                    <div className='d-flex justify-content-strat mt-5'>
                    <button className='btn btn-success me-3'>Update</button>
                    <Link to={'/dash'} className='btn btn-dark'>Cancel</Link>
                    </div>
                    
                </form>
            </div>

        </div>
    </div>

</section>
    </>
  )
}

export default EditContact