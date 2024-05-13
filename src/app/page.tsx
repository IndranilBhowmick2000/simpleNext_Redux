"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { fetchUsers, increment } from "../../Slices/userSlice";
import { RootState } from "../../Store/Store";

// import Image from "next/image";

export default function Home() {
  const dispatch= useDispatch<AppDispatch>()
  const userRef= useRef(false)
  const {entities,loading,value} = useSelector((state:RootState)=>state.user)

  // console.log(entities);
  console.log("loading",loading);
  
  

  useEffect(()=>{
    if (userRef.current===false) {
      dispatch(fetchUsers())
    }
   return()=>{
    userRef.current=true
   } 
  },[])
  return (
    <div>
      { loading?<h1>...Loading</h1>:
        entities?.map((e:any)=>{
         return <h2 key={e.id}>
            {e.name}
          </h2>
        })
      }
      <button onClick={()=>dispatch(increment())}>Increase</button><br/>
      {value}
    </div>
  );
}
