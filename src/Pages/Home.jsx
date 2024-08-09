import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dltUser } from '../../redux/userSlice';








function Home() {
  const users=useSelector((state)=>state.users);
  const dispatch=useDispatch()

  const deleteUser=(id)=>{
    dispatch(dltUser({id:id}))
  }
  
  return (
    <>
    <div>
       
        <div className='d-flex justify-content-center align-items-center mt-5'>
        <Table striped className='w-75 text-center'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <tr key={index}>
              <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td>
              <Link to={`/edit/${item.id}`}>
              <button className='btn border me-1'><i className="fa-solid fa-pencil"></i></button>
  
              </Link>
              <button onClick={()=>deleteUser(item.id)} className='btn  border '><i className="fa-solid fa-trash-can"></i></button>
            </td>
          </tr>
  
            
          ))
        }
          
        
        
        
      </tbody>
    </Table>

        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={'/add'}>
          <button className='btn btn-secondary border text-dark '>Create NewUser</button>

          </Link>
        </div>
    </div>      
    </>
  )
}

export default Home
