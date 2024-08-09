import React, { useState } from 'react'
import { addUser } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function Add() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[contact,setContact]=useState('')
  const users=useSelector((state)=>state.users)


  const navigate=useNavigate()  


  const dispatch=useDispatch()

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(addUser({id:users[users.length-1].id+1,name , email ,contact}))
    navigate('/')

  }
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>

   
    <div className='w-50 border shadow  p-5'>
    <h4 className='text-center text-dark'>New User</h4>

      <form action="" onSubmit={handleSubmit}>

       <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' className='form-control' placeholder='enter name' onChange={(e)=>{setName(e.target.value)}}/>
       </div>
       <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name='email' className='form-control' placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}}/>
       </div>
       <div>
        <label htmlFor="contact">Contact:</label>
        <input type="text" name='name' className='form-control' placeholder='enter contact' onChange={(e)=>{setContact(e.target.value)}}/>
       </div><br/>
      <button className='btn border shadow'>ADD</button>
      </form>

      </div>
      </div>
      
    </>
  )
}

export default Add
