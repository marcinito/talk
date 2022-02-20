import React,{useState,useEffect,useRef} from 'react'
import './css/style.css'
import filter from './funkcje/Filter'
import axios from 'axios'
/* xXxRef.current.c - sluzy do tego zeby dac znak dla programu zeby zapisal informacje do tablicy z danymi ,
jezeli jest false to ma tego nie robic , gdy c=sie jakis string to przewaznie opisuje co specjalnego wtedy ma zrobic(glownie gdzie zapisac wyslna wiadomosc prze
  uzytkownika*/

function App() {
  const [user,setUser]=useState({txt:"siema",b:"",important:false})
  const [klik,setKlik]=useState(false)
  const [data,setData]=useState("")
  const [dialog,setDialog]=useState([])
  const blockFirstRenderRef=useRef(0)
  const xXxRef=useRef(0)




useEffect(()=>{
  if(blockFirstRenderRef.current>0){
    xXxRef.current=filter(user)
  }
},[klik])
useEffect(()=>{
if(blockFirstRenderRef.current>0){
  setDialog([...dialog,{text:user.txt,flag:"U"}])
setTimeout(()=>{
  xXxRef.current.b!==1?setDialog([...dialog,{text:user.txt,b:"",flag:"U",name:xXxRef.current.name},{text:xXxRef.current.a,b:"",flag:"R",asterisk:xXxRef.current.asterisk,name:xXxRef.current.name},{text:xXxRef.current.b,flag:"R",asterisk:xXxRef.current.asterisk,name:xXxRef.current.name}])
  :setDialog([...dialog,{text:user.txt,b:"",flag:"U"},{text:xXxRef.current.a,flag:"R",asterisk:xXxRef.current.asterisk,name:xXxRef.current.name}])
},500)
}


},[klik])


const sendMessage=()=>{
  

  blockFirstRenderRef.current+=1
  setKlik(!klik)
if(xXxRef.current===0){
  setUser({txt:user.txt,b:""})
  return

}

  else if(xXxRef.current.c==="podajImie"){
    setUser({txt:user.txt,b:"",important:"podajImie"})
  }
  else if(xXxRef.current.c===false){
    setUser({txt:user.txt,b:"",important:false})
  }

 
  
}
console.log(dialog)
  return (
    <div className="container">
      <div className="dialog">
        <input type="text" value={user.txt} 
        onChange={(e)=>setUser({...user,txt:e.target.value})} ></input>
        <button onClick={()=>sendMessage()}>Send</button>
        <div className="displayConversation">
{dialog.map((el,i)=>{
  return(
    <ul>
      <li className={el.flag==="U"?"userMessage":"robotMessage"}  key={i}>{el.text} {el.name!==0?<h2 className="underlineText">{el.name}</h2>:null}</li>
    </ul>
  )
})}
        </div>
      </div>
    </div>
  )
}

export default App