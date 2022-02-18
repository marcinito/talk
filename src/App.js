import React,{useState,useRef,useEffect,useMemo} from 'react'
import './css/style.css'
// import temat from './funkcje/Szukanie'
import checkTopic from './funkcje/Szukanie'
function App() {
  const renderRef=useRef(null)
  const licznikRef=useRef(null)
 const btnRef=useRef(null)
const [user,setUser]=useState("siema")

const [klik,setKlik]=useState(true)

const [ogolnaRozmowa,setOgolnaRozmowa]=useState([""])

useEffect(()=>{
  setTimeout(()=>{
    setUser("S")

    },300)
    setTimeout(()=>{
      setUser((p)=>p+="i")
      },500)
      setTimeout(()=>{
        setUser((p)=>p+="e")
        },700)
        setTimeout(()=>{
          setUser((p)=>p+="m")
          },900)
          setTimeout(()=>{
            setUser((p)=>p+="a")
            },1100)
            setTimeout(()=>{
              btnRef.current.style.backgroundColor="darkorange"
              btnRef.current.style.border="3px solid yellow"
              },1300)
              setTimeout(()=>{
                btnRef.current.style.backgroundColor=""
                btnRef.current.style.border=""
                },1500)
                setTimeout(()=>{
                  btnRef.current.style.backgroundColor="darkorange"
                  btnRef.current.style.border="3px solid yellow"
                  },1700)
                  setTimeout(()=>{
                    btnRef.current.style.backgroundColor=""
                    btnRef.current.style.border=""
                    },1900)
                    setTimeout(()=>{
                      btnRef.current.style.backgroundColor="darkorange"
                      btnRef.current.style.border="3px solid yellow"
                      },2100)
                      setTimeout(()=>{
                        btnRef.current.style.backgroundColor=""
                        btnRef.current.style.border=""
                        },2300)
                        setTimeout(()=>{
                          btnRef.current.style.backgroundColor="darkorange"
                          btnRef.current.style.border="3px solid yellow"
                          },2600)
                          setTimeout(()=>{
                            btnRef.current.style.backgroundColor=""
                            btnRef.current.style.border=""
                            },2900)
},[])

function counter(){
   let licznik=0
   function inner(){
     console.log(licznik)
     return licznik+=1
   }
   return inner
}
let count=counter()



useEffect(()=>{

 
  if(renderRef.current>0){

 
  let ktos=checkTopic(user)

console.log(ktos)

 setTimeout(()=>{
  
  setOgolnaRozmowa([...ogolnaRozmowa,{who:ktos.a,flag:"R"},{who:ktos.b!==1?ktos.b:null,flag:"R"}])
  
 },700)
}
},[klik])

/*lets talk*/

const letsTalk=(e)=>{
  renderRef.current+=1
setOgolnaRozmowa([...ogolnaRozmowa,{who:user,flag:"U"}])
setKlik(!klik)


}


  return (
    <div className="container">
      <div className="talking">
      <input onClick={()=>setUser("")} className="inputTalk" type="text" value={user} onChange={(e)=>setUser(e.target.value)}></input>
      <button ref={btnRef} onClick={()=>letsTalk()} className="btnSend">send</button>
      <div className="speak">
    
{ogolnaRozmowa.map((el,index)=>{
  console.log(el)
  return(
    
   <li key={index} className={el.flag==="U"?"a":"b"} >{el.who}</li>
  
  )
})}
       
      </div>
      </div>
      
    </div>
  )
}

export default App