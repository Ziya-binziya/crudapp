import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import Edit from './Pages/Edit.jsx'
import Add from './Pages/Add.jsx'

function App() {

  return (
    <>
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </>
  )
}

export default App
