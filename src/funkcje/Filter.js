import React,{useState,useEffect} from 'react'
import axios from 'axios'
/*DANE*/
let powitanie=["siema","elo","witaj","witam","yoo","yo","hejo","czesc","cze"]
let pytanie=["?","??","???","dlaczego","po co","ile","jak","gdzie"]
let daneRozmowcy=[{imie:null}]
let emptyMessage=["nie wysylaj mi pustych wiadomości koleś","chyba odlaczyła Ci sie klawiatura","gdzie moje okulary nic nie widze?!","mam się domyślić?","W-Y-K-R-Y-T-O P-U-S-T-A W-I-A-D-O-M-O-S-C","....","o co Ci chodzi?"]

function filter(user){


    function checkMessage(user){
    
       user.txt= user.txt.toLowerCase()
        let category="nomatch"
        if(user.txt===""){
    category="empty"
return category
}
        console.log(user.txt)
      let ifPowitanie=powitanie.filter(el=>el.startsWith(user.txt) && user.txt.length>=3 || user.txt=="yo")
  /*podanie imienia*/
let imie=user.important==="podajImie"?true:false
if(imie){
    daneRozmowcy.forEach(el=>{
        return el.imie=user.txt
    })
category="podaneImie"

return category
}
/* */
let question=pytanie.filter((el)=>{
    console.log(el)
    if(user.txt.endsWith("?") || user.txt.endsWith("??") || user.txt.endsWith("???") 
    || el.startsWith(user.txt) || user.txt.includes(el) ){
    return el
}})
if(question.length>0){

    category="pytanie"
    return category
}

      if(ifPowitanie.length>0){
category="powitanie"
return category
      }


return category
          }


 function respond(user){
     let answer="nomatch"
     let topic=checkMessage(user)
console.log(user)
     if(topic==="powitanie"){
answer={a:"Witaj",b:"Jak sie nazywasz ?",c:"podajImie",name:0,asterisk:false}
return answer
     }

if(topic==="nomatch"){
    answer={a:"Nic mi to nie mowi",b:1,c:false,name:0,asterisk:false}
    return answer
}
if(topic==="podaneImie"){
    answer={a:`milo mi Cie poznac`,name:`${daneRozmowcy[0].imie}`,b:1,c:false,asterisk:true}
    return answer
}
if(topic==="pytanie"){
    answer={
        a:"Dlaczego o to pytasz?",b:1,name:0,c:false,asterisk:false
    }
    return answer
}
if(topic==="empty"){
    answer={
        a:emptyMessage[Math.floor(Math.random()*emptyMessage.length)],b:1,name:0,c:false,asterisk:false
    }
    return answer
}

 }


return respond(user)


}


export default filter

