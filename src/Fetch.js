import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Fetch() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        axios.get()
        .then(res=>{
            console.log(res)
        })
    })
  return (
    <div>Fetch</div>
  )
}

export default Fetch