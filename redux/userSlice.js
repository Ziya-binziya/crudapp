import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../src/Pages/Data";


const userSlice=createSlice({
    name:"users",
    initialState:userList,
    reducers:{
       addUser:(state,action)=>{
        state.push(action.payload)
        
       },
       updateUser:(state,action)=>{
         const {id,name,email,contact}=action.payload
          const result= state.find(user=>user.id == id)
          if(result){
             result.name=name
             result.email=email
             result.contact=contact
          }
        },
        dltUser:(state,action)=>{
            const {id}=action.payload
            const result= state.find(user=>user.id == id)
            if(result){
                return state.filter(a=>a.id !== id)
            }


        }
    }
})

export const {addUser,updateUser,dltUser}=userSlice.actions
export default userSlice.reducer