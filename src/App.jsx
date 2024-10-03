import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import EditContact from './Pages/EditContact'


function App() {

  return (
    <>

    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/edit' element={<EditContact/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
