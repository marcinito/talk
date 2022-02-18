
let powitanie=["siema","elo","czesc","yo","witaj","hejo"]
let zapytanie=["?","??","???","????","?????"]
let imiona=["marcin","tomek","pawel","dawid","nata","aga","agnieszka","lukasz",]
let slowaZapisane=["----ZAPISANE SLOWA----"]
let imie=["marcin"]
let kawalyRobota=["Moj ulubiony film ? .......ROBO COP :D ","Co  ma fryzjer w lodówce? ----Maszynke ;D","Koko koko EURO SPOKO","Dwie sciany spotkały sie na rogu","2+2=5","POLSKI RZAD"]
const omega={
powitanie1:["W-I-T-A-J","S-I-E-M-A","czemu gadasz do maszyny?zartuje SIEMA","no HEJ"],
zapytanie1:["jeszcze nie umiem odpowiadac na pytania","nie zadawaj mi żadnych pytan ,nie mam internetu"],
}

function noQuestion(){
    let liczba=0
    function inner(){
        return liczba+=1
    }
    return inner
}




function checkEndStart(user){
    let wynik
    if(user.startsWith(`"`) && user.endsWith(`"`))
    {
        wynik= true
    }
return wynik
}


 function temat(user){
let category="nomatch"
console.log(noContactt)
user=user.toLowerCase()

let iFpowitanie=powitanie.filter(el=>{if(el.startsWith(user) && user.length>=3 || user==="yo"){
    return el
}})
let iFzapytanie=zapytanie.filter(el=>{if(user.endsWith("?")){
    return el
}})
let iFkto=imiona.filter(el=>{
    if(el.includes(user) && user.length>3){
        return el
    }
})
let slowoRemember=checkEndStart(user)
if(slowoRemember){
   
    slowaZapisane.push(user)
    console.log(slowaZapisane)
    category="save"
    return category
}
if(iFpowitanie.length>0){
    console.log(iFpowitanie)
    category="powitanie"
    return category
}
if(iFzapytanie.length>0){
    category="zapytanie"
    return category
}
if(iFkto.length>0){
    category={
        akcja:"imie",
        payload:iFkto[0]
    }
    return category
}
if(user=="9"){
    category="zapisane"
    return category
    
}
if(user=="8"){
    category="poznajRobota"
    return category
    
}
if(user=="7"){
    category="zart"
    return category
    
}
if(user===""){

}


return category


}



export default  function checkTopic(user){
    let topic=temat(user)
    let answer
    console.log(topic)
    if(topic==="powitanie"){
        
answer={
a:omega.powitanie1[Math.floor(Math.random()*omega.powitanie1.length)],
b:"Jak masz na imie?"
}
return answer

    }
    if(topic==="zapytanie"){
        answer={
            a:omega.zapytanie1[Math.floor(Math.random()*omega.zapytanie1.length)],
            b:1
        }
        return answer
    }
    if(topic.akcja==="imie"){
       let who=topic.payload.endsWith("a")

        if(who===true){
            answer={a:`miło mi Cię poznać koleżanko ${topic.payload}`,
            b:`jak chcesz poznac pare faktów z mojego "zycia" wcisnij -8-(ps.nie rob tego)`,
        }
        }
        else{
            answer={
                a:"miło mi Cie poznać kolego",
                b:`jak chcesz poznac pare faktów z mojego "zycia" wcisnij -8-(ps.nie rob tego)`
            }
        }
        return answer
    }
if(topic==="nomatch"){
    answer={
    a:`co oznacza to slowo ${user} podaj mi je w  " cudzyslowiu " to je zapamietam,jak bd chcial je odczytac wpisz -9-`,
    b:1
}
    return answer
}
if(topic==="zapisane"){
    answer={
        a:slowaZapisane.map((el,i)=>{
        return(
            <ul>
            <li key={i}>{el}</li>
            </ul>
        )
    }),
b:1
}
    return answer
}
if(topic==="save"){
    answer={a:`Dziekuje ${user} zostalo zapisane`,b:1 }
    return answer
}
if(topic==="poznajRobota"){
    answer={
        a:`1.Nazywam sie Omega  2.Dopiero sie ucze wiec nie szalej z klawiatura   3.Spokojnie pochodze z tej samej planety(mam nadzieje)  4.Jak wyslesz do mnie numer -7- to sypne Ci jakis robo kawał`
    }
    return answer
}
if(topic==="zart"){
    answer={
        a:kawalyRobota[Math.floor(Math.random()*kawalyRobota.length)]
    }
    return answer
}
if(topic==="noContact"){
    answer={
        a:"Czemu nic nie mowisz?"
    }
    return answer
}
    
}