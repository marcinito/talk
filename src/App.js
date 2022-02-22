import React,{useState,useEffect,useRef,useCallback} from 'react'
import './css/style.css'
import filter from './funkcje/Filter'


import {daneRozmowcy} from './funkcje/Filter'
/* xXxRef.current.c - sluzy do tego zeby dac znak dla programu zeby zapisal informacje do tablicy z danymi ,
jezeli jest false to ma tego nie robic , gdy c=sie jakis string to przewaznie opisuje co specjalnego wtedy ma zrobic(glownie gdzie zapisac wyslna wiadomosc prze
  uzytkownika*/
let numery=[1,2,3,4,5,6,7,8,9]


function App() {
  const [user,setUser]=useState({txt:"siema",b:"",important:false})
  const [klik,setKlik]=useState(false)
  const [data,setData]=useState("")
  const [dialog,setDialog]=useState([])
  const blockFirstRenderRef=useRef(0)
  const xXxRef=useRef(0)
  const dontSend=useRef(0)
const containerRef=useRef(null)
dontSend.current=[1,2,3,4,5,6,7,8,9].filter((el)=>user.txt.startsWith(el))

useEffect(()=>{
  if(blockFirstRenderRef.current>0){
    xXxRef.current=filter(user)
  }
},[klik])


let audioContext=new AudioContext()
let oscillator=audioContext.createOscillator()
let gainNode = audioContext.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);
oscillator.type="triangle"
oscillator.frequency.value=240

// window.addEventListener("scroll",()=>{
//   let height=window.scrollY

//   containerRef.current.style.height=window.innerHeight+height+"px"
// })

useEffect(()=>{
if(dontSend.current.length>0){
  if(blockFirstRenderRef.current>0){
  
  setTimeout(()=>{
    oscillator.start()
    xXxRef.current.b!==1 ?
    setDialog([...dialog,
    {text:xXxRef.current.a,b:"",flag:"R",asterisk:xXxRef.current.asterisk,
    name:xXxRef.current.name.a},
    {text:xXxRef.current.b,flag:"R",asterisk:xXxRef.current.asterisk,name:xXxRef.current.name.b,},
   
   
    
  ])
    :
    setDialog([...dialog,
    {text:xXxRef.current.a,flag:"R",asterisk:xXxRef.current.asterisk,
    name:xXxRef.current.name.a,b:xXxRef.current.b}])
    
    setTimeout(()=>{
      oscillator.stop()
      },200)
  
  },500)
  


return
}}

if(blockFirstRenderRef.current>0){
  setDialog([...dialog,{text:user.txt,flag:"U"}])
setTimeout(()=>{
  oscillator.start()
  xXxRef.current.b!==1 ?
  setDialog([...dialog,{text:user.txt,b:"",flag:"U"},
  {text:xXxRef.current.a,b:"",flag:"R",asterisk:xXxRef.current.asterisk,
  name:xXxRef.current.name.a},
  {text:xXxRef.current.b,flag:"R",asterisk:xXxRef.current.asterisk,name:xXxRef.current.name.b,},

 
  
])
  :
  setDialog([...dialog,{text:user.txt,b:"",flag:"U"},
  {text:xXxRef.current.a,flag:"R",asterisk:xXxRef.current.asterisk,
  name:xXxRef.current.name.a,b:xXxRef.current.b}])

setTimeout(()=>{
  oscillator.stop()
},200)
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
  else if(xXxRef.current.c==="respondForEmpty" && xXxRef.current.a.endsWith("?")){
    setUser({txt:user.txt,b:"",important:"respondForEmpty"})
    console.log(xXxRef.current.a.endsWith("?"))
  }
  else if(xXxRef.current.c==="jaktam"){
    setUser({txt:user.txt,b:"",important:"jaktam"})
  }

  
}

  return (
    <div className="container" ref={containerRef}>
      <nav className="nav"><div className="logo">©Talking...</div><div className="asterisk">
        <div className="blok">★</div></div></nav>
        <br></br>
        <div className="welcomeText">
        <h1>Hi, if you are boring</h1>
        <p>you can talk with them</p>
        <p>find out his name and what he doing</p>
        <p>Maybe you will be a good friend</p>
        <em style={{fontWeight:"bold",color:"blue"}}>Enjoy your time</em>
        <p style={{fontWeight:"bold",color:"darkgray"}}>It is useful send him -9- this give you concept how he can do</p>
        </div>
      <div className="dialog">
        <div className="interFace">
        <input className="inputEnter" type="text" value={user.txt} 
        onClick={()=>setUser({...user,txt:""})}
        onChange={(e)=>setUser({...user,txt:e.target.value})} ></input>
        <button className="btnSend" onClick={()=>sendMessage()}>Send</button></div>
        <div className="displayConversation">
{dialog.map((el,i)=>{
  return(
    <ul>
      <li className={el.flag==="U"?"userMessage":"robotMessage"}  key={i}>{el.text} 
      {el.b!==1?<span>{el.b}</span>:null} {el.name!==0?<span className="underlineText"> {  el.name}</span>:null}
      
      </li>
    </ul>
  )
})}

        </div>
   
      </div>
<div className="bottom">Thank you for Visit <span style={{fontWeight:"bold",letterSpacing:"3px",textDecoration:"underline blue double"}}>{daneRozmowcy[0].imie!==null?daneRozmowcy[0].imie.toUpperCase():null}</span></div>
   <br/>
    </div>
  )
}

export default App