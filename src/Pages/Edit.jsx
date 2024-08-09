import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../redux/userSlice';







function Edit() {
  const{id}=useParams()

  const users=useSelector((state)=>state.users)
  const dispatch=useDispatch()
  const existingUser=users.filter(a=> a.id == id)
  const {name,email,contact}=existingUser[0]
  const[uname,setName]=useState(name)
  const[uemail,setEmail]=useState(email)
  const[ucontact,setContact]=useState(contact)

  const navigate=useNavigate();


  const handleUpdate=(event)=>{
    event.preventDefault();

     dispatch(updateUser({id:id,name:uname,email:uemail,contact:ucontact }))
     navigate('/')

  }


  return (
    <>
    
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>

   
<div className='w-50 border shadow p-5'>
  <h4 className='text-center text-dark'>Update User</h4>
  <form action="" onSubmit={handleUpdate} >

   <div>
    <label htmlFor="name">Name:</label>
    <input type="text" name='name' className='form-control' required placeholder='enter name' value={uname} onChange={(e)=>{setName(e.target.value)}}/>
   </div>
   <div>
    <label htmlFor="email">Email:</label>
    <input type="email" name='email' className='form-control' required placeholder='enter email' value={uemail} onChange={(e)=>{setEmail(e.target.value)}}/>
   </div>
   <div>
    <label htmlFor="contact">Contact:</label>
    <input type="text" name='name' className='form-control' required placeholder='enter contact' value={ucontact} onChange={(e)=>{setContact(e.target.value)}}/>
   </div><br/>
  <button className='btn border shadow'>Update</button>
  </form>

  </div>
  </div>
    </>
  )
}

export default Edit
