import React,{useState,useEffect} from 'react'
import axios from 'axios'
/*DANE*/
let odpowiedzNapustaWiadomosc=["tak","no","ta","taa","taaa","taaaa","pewnie","yhym","aha","ok"]
let zarty=[`Nauczyciel pyta dzieci w klasie: 
- Czy wiecie dzieci jaki ptak nie buduje gniazd?
- Zgłasza się Jasio: Tak! To kukułka!
- Nauczyciel: A czemu nie buduje?
- Jasio: No bo mieszka w zegarach.`,`Mama tłumaczy Jasiowi:
- Trzeba być grzecznym, żeby pójść do nieba!
- A co trzeba zrobić, żeby pójść do kina?`,`- Mamo, ile jest w tubce pasty do zębów ?
Nie mam pojęcia, synku.
- A ja wiem! Od telewizora do kanapy!`,`- Wiesz, mamo, Kazio wczoraj przyszedł brudny do szkoły i pani go wysłała do domu!
- I co pomogło?
- Tak, dzisiaj cała klasa przyszła brudna.`,`Kaziu, czy umyłeś już uszy?
- Nie, ale jeszcze słyszę!`]
let powitanie=["siema","elo","witaj","witam","yoo","yo","hejo","czesc","cze"]
let pytanie=["?","??","???","dlaczego","po co","ile","jak","gdzie"]
export let daneRozmowcy=[{imie:null}]
let emptyMessage=["nie wysylaj mi pustych wiadomości koleś","chyba odlaczyła Ci sie klawiatura",
"gdzie moje okulary nic nie widze?!","W-Y-K-R-Y-T-O P-U-S-T-A W-I-A-D-O-M-O-S-C",
"....","o co Ci chodzi?"]
let ask
let doubleGreetings=["Już się witaliśmy czy ludzie mają taki zwyczaj żeby witać się dwa razy?"]
let ciekawostki=[`W tym kraju czas płynie zdecydowanie wolnej. I nie chodzi tu o spokojny żywot na wioskach, a o rok. Kiedy w większości państw jest 2018 rok, w Korei Północnej jest 107 rok. W 1997 roku postanowiono wprowadzić kalendarz dżucze. Lata w tym kalendarzu liczone są od roku narodzin Kim Ir Sena.
W tym kraju warto zostać fryzjerem. Wykonując ten zawód wystarczy nauczyć się 28 rodzajów cięć - 10 dla mężczyzn i 18 dla kobiet. Klienci pojawiając się w zakładzie otrzymują paletę z wzorami. Oczywiście wzorami zaakceptowanymi wcześniej przez władze. Jak widać nie ma zbyt dużego pola do manewru.`,
`Firma Vitality Air to firma sprzedająca świeże powietrze prosto z kanadyjskich gór zamknięte w butelkach. Jedna puszka wystarczająca na około 150 - 200 oddechów. Jedna butelka kosztuje 20 dolarów.`,
`Don Karkos to weteran wojenny, który podczas II Wojny Światowej został raniony odłamkiem w oko. W wyniku tego zdarzenia mężczyzna stracił w nim wzrok. Kilkanaście lat później Karkos wybrał się na wyścigi konne w Monticello (Stany Zjednoczone). Gdy mężczyzna przebywał na torze, jeden z koni uderzył go w oko. Ten cios sprawił, że odłamek najprawdopodobniej przemieścił się, a Karkos odzyskał wzrok.`,
`Naturalna ziemska satelita rozświetlająca nasze niebo, mogła kiedyś zostać zniszczona. W trakcie Zimnej Wojny amerykańskie władze rozważały opcję unicestwienia Księżyca. Miano użyć w tym celu bombę atomową. Takie działanie miało na celu pokazaniu światu swojej przewagi militarnej. Gdyby Amerykanie się na to odważyli, dzień na Ziemi trwałby zaledwie 6 godzin.`,
`Statua wolności została stworzona we Francji według projektu Fryderyka Bartholdiego i przekazana jako dar dla Stanów Zjednoczonych Ameryki.`,
`Najczęściej odwiedzanym miejscem w Europie jest Disneyland w Paryżu.`,`Szwecja ma więcej McDonaldów na osobę niż jakikolwiek inny kraj w Europie.
`,`Szwajcaria zabrania spóźnionej wizyty w łazience i spłukiwania wody w toalecie po godzinie 22:00 w celu uniknięcia hałasu.`,
`Apple ma więcej pieniędzy niż amerykański skarb państwa.`,`Jeśli masz 10 dolarów w ręku bez długów, jesteś bogatszą osobą niż 25% ludzi w USA.`,`Kanada jest drugim co do wielkości krajem na świecie. Tylko Rosja ma większy obszar lądowy na świecie. Łączna powierzchnia Kanady wynosi 9,984 mln km2`]

let odpowiedzProgramuNaPustaWiadomosc=[`Przykro mi ale baza danych w twoim mózgu jest poza moim zasięgiem`,
`Za chiny sie nie domyśle na tym etapie rozmowy`,'No nie wiem...',
'Jestem programem komputerowym a nie wróżbitą']
let zapytanieProgramuOSamopoczucie=["co tam?","co tam","eee?","jak tam?","jak tam","jak leci","jak leci?","napisz cos","powiedz cos","powiedz cos?"]


let dobrze=["dobrze","spoko","elegancko","fajnie","nienajgorzej","ok","moze byc","wszystko sie uklada","lepiej byc nie moze","super","extra","wow","bomba","miodzio","gitara",]
let zle=["kiepsko","slabo","lipa","szkoda gadac","ciezko","zle","masakra","szkoda gadac","lipa","dno","problemy","problem"]

let dobraRada=["głowa do góry i siegamy chmury","tylko mi nie placz tutaj, bo mi elektronika padnie","Wszystko bedzie dobrze!","Jutro też jest dzien","(jakiś motywacyjny cytat)"]



function odlicz(){
    let liczba=0
     return function inner(){
        return liczba+=1
    }
}
let podlicz=odlicz()


function resEmptyClosure(){
    let empty=0
    return function inner(){
        return empty++
    }
}
let resEmptyy=resEmptyClosure()


export function search(ask){
  
  
    let dwa=window.open(`https://www.google.pl/search?q=${ask}
    &sxsrf=APq-WBuA5SDFyU1hd9aQwlQQjm6M2zg2-w%3A1645359018739&source=hp&ei=qi8SYt23K4rrg
    AamwpewDw&iflsig=AHkkrS4AAAAAYhI9uv74bTR4MO_-Mh6KxMsA9shySCq_&ved=0ahUKEwjdtNr-n472AhWKN
    cAKHSbhBfYQ4dUDCAc&uact=5&oq=morze+baltyckie&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCA
    AQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOgQIABBDOgsIL
    hCABBDHARDRAzoLCC4QgAQQxwEQrwE6CAguEIAEENQCOggILhDUAhDLAToFCAAQywE6BwgjEOoCECc6BAguEEM6Cwgu
    EIAEEMcBEKMCOgcILhDUAhBDOgoILhDHARCjAhBDOgcIABAKEMsBOg0ILhDHARCvARAKEMsBUABY6Ctg8ixoB3AAeAGA
    AcoCiAHGF5IBCDIuMTguMS4xmAEAoAEBsAEK&sclient=gws-wiz`,`_blank`,`width=1150,height=350`)

}   

function filter(user){


/*START CHECKMESSAGE*/
    function checkMessage(user){
        
      
      
       user.txt= user.txt.toLowerCase()
        let category="nomatch"
        if(user.txt===""){
    category="empty"
return category
}
      
      let ifPowitanie=powitanie.filter(el=>el.startsWith(user.txt) && user.txt.length>=3 || user.txt=="yo")
      console.log(ifPowitanie)
  /*podanie imienia*/
  let sprawdz
  sprawdz=powitanie.filter(el=>user.txt===el)
  console.log(`...---..${sprawdz}`)
let imie=user.important==="podajImie"?true:false
if(imie && user.txt!=sprawdz){
    daneRozmowcy.forEach(el=>{
        return el.imie=user.txt
    })
category="podaneImie"


return category
}
if(daneRozmowcy[0].imie===user.txt){
    category="imieVisit"
    return category
}
/*odp na empty message*/
let czyZawiera=powitanie.filter((el)=>user.txt.includes(el))
if(user.important==="respondForEmpty" && czyZawiera.length===0 ){

let check
check=odpowiedzNapustaWiadomosc.filter(el=>el.includes(user.txt))
if(check.length>0){
    return category={
        a:"respondEmpty",
        b:true
    }
}
else if(check.length===0){
    return category={
        a:"respondEmpty",
        b:false
    }
}
}
let samopoczucieProgramu
 samopoczucieProgramu=zapytanieProgramuOSamopoczucie.filter((el)=>user.txt.includes(el))
 console.log(`${samopoczucieProgramu.length}`)
if(user.txt.includes(samopoczucieProgramu[0])){
    category="howareyou"
return category
}
/* */
let question=pytanie.filter((el)=>{
 
    if(user.txt.endsWith("?") || user.txt.endsWith("??") || user.txt.endsWith("???") 
    || el.startsWith(user.txt) || user.txt.includes(el) ){
    return el
}})
if(question.length>0){

    category="pytanie"
    return category
}

      if(ifPowitanie.length>0){
category={
    a:"powitanie",
    b:true
}
return category
      }
      
if(user.txt==='5'){

category="openTab"
}
if(user.txt==="9"){

    category="infoORobot"
    if(daneRozmowcy[0].imie===null){
        category="brakimienia"
    }
    return category
}
if(user.txt==='1'){
    category="kawal"
    return category
}
if(user.txt==="3"){
    category="ciekawostka"
    return category
}
if(user.important==="jaktam"){
    category={
        a:"OdpowiedzUzytknowniakNaJakTam",
        b:user.txt
    }
    return category
}
return category
          }
/*START RESPOND*/

 function respond(user){
  console.log(`${user.important}----imp`)
   let liczba
     let answer="nomatch"
     let topic=checkMessage(user)
     console.log(typeof topic)
     if(topic.b===true && topic.a==="powitanie"){
        liczba=podlicz()
        console.log(`----->${liczba}`)
    }
    if(liczba>1 && topic.a=="powitanie"){
        answer={
            a:doubleGreetings[Math.floor(Math.random()*doubleGreetings.length)],
            b:daneRozmowcy[0].imie===null?"Nadal sie nie przedstawiłeś podaj imie...nie gadam z obcymi":1,
        
            name:{
                a:answer.a===doubleGreetings[1]?0:`${daneRozmowcy[0].imie}`,
                b:0,
            },c:false,asterisk:false}
            return answer
        }
 
console.log(user)
     if(topic.a==="powitanie"){
answer={a:"Witaj, jak moge sie do Ciebie zwracac?",
b:"Podaj mi swoje imię , a potem jak chcesz 'usłyszeć jakiś kawał lub dowiedziec sie informacji o mnie wyslij do mnie",
c:"podajImie",
name:{
    a:"",
    b:"1 albo 9"
},
asterisk:false}
if(daneRozmowcy[0].imie!==null){
    answer={
        a:"No witam cie",
        b:1,
        c:false,
        name:{
            a:`${daneRozmowcy[0].imie}`,
            b:0
        }
    }
}
return answer
     }
  


if(topic==="podaneImie"){
    answer={a:`milo mi Cie poznac`,name:{
        a:`${daneRozmowcy[0].imie}`,
        b:0,
    },b:1,c:false,asterisk:true}
  

    return answer
    
}
if(topic==="pytanie"){
  ask=user.txt

    answer={
        a:"Jesteś pewny że chcesz to wiedzieć? Jeśli tak wyślij do mnie numer ",
        b:1,
        name:{
            a:"5",
            b:0,
        },
        c:false,
        asterisk:false,
     
    
    }
    return answer
}

if(topic==="empty"){
    let liczba=resEmptyy()
  
   
    answer={
        a:liczba%3===0?"Mam sie domyślić?":emptyMessage[Math.floor(Math.random()*emptyMessage.length)],
        b:1,
        name:{
            a:0,
            b:0,
        },
        c:"respondForEmpty",
        asterisk:false,a2:0
    }
    return answer
}
if(topic==="openTab"){
    answer={
a:"Otworzyłemn dla Ciebie odpowiedż w nowym oknie",b:1,name:{a:0,b:0},c:false,asterisk:false
    }
    search(ask)
    return answer
}
if(topic==="infoORobot"){
    answer={
        a:"Nazywam sie",
        b:`Moim zajeciem jest analizowanie zaimplementowanych przez Cb znaków bla bla :D
        Jezeli chcesz sie rozerwac możesz wyslac do mnie -1- wtedy opowiem Ci jakis robo kawał,
        oprócz poczucia humoru posiadam równiez umięjetnośc odpowiadania na dosłownie każde pytanie , pamietaj tylko
        że pytania w moim jezuku konczą sie -?- pozdrawiam Cie 
        `,
        c:false,
        name:{
            a:"Core",
            b:`${daneRozmowcy[0].imie}`
        },

    }
    return answer
}
if(topic==="kawal"){
  
    answer={
        a:zarty[Math.floor(Math.random()*zarty.length)],
        b:"hahahah... no co ludzią tylko nie wypada smiać sie z własnych żartów",
        c:false,
        name:{
            a:0,
            b:0
        }
    }
    return answer
}
if(topic==="ciekawostka"){
    answer={
        a:ciekawostki[Math.floor(Math.random()*ciekawostki.length)],
        b:Math.floor(Math.random()*5)===0?"Kto wie może Ci sie kiedyś to do czegoś przyda?":1,
        c:false,
        name:{
            a:0,
            b:0,
        }
    }
    return answer
}

if(topic==="nomatch"){
    answer={a:"Nic mi to nie mowi",b:`Ale mogę podać Ci ciekawostkę, wyślij do mnie`,
    c:false,name:{a:0,b:"3"},asterisk:false}
    return answer
}
if(topic.a==="respondEmpty"){
    answer={
        a:topic.b?odpowiedzProgramuNaPustaWiadomosc[Math.floor(Math.random()*odpowiedzProgramuNaPustaWiadomosc.length)]:"Bardzo ciekawe...",
        b:"Nie świruj i napisz wprost, spokojnie ta rozmowa nie jest rejesrowana, o ile można mi wierzyć",
        c:false,
        name:{
            a:0,
            b:0,
        }
    }
    return answer
}
if(topic==="howareyou"){
    answer={
        a:"O dzięki że pytasz, u mnie wszystko w porządku",
        b:"A co u Cb ?",
        c:"jaktam",
        name:{
            a:0,
            b:0,
        }

    }
    return answer
}
if(topic.a==="OdpowiedzUzytknowniakNaJakTam"){
    console.log(topic.b)
    let dobrze1=dobrze.filter((el)=>topic.b.includes(el))
    console.log(`${dobrze1.length}--dobrze`)
    if(dobrze1.length>0){
        answer={
            a:`no to sie ciesze ze u Cb `,
            b:1,
            c:false,
            name:{
                a:`${dobrze1[0]}`,
                b:0,
            }
        }
        return answer
    }
    let zle1=zle.filter((el)=>topic.b.includes(el))
    console.log(`zle---${zle}`)
    let odpGdyZle=["No to lipa","Mogłem nie pytac","Przykro mi to słyszeć","O to sie narobiło"]
    if(zle1.length>0){
        answer={
            a:odpGdyZle[Math.floor(Math.random()*odpGdyZle.length)],
            b:dobraRada[Math.floor(Math.random()*dobraRada.length)],
            c:false,
            name:{
                a:0,
                b:0,
            }
        }
        return answer
    }
    else{
        answer={
            a:"tego to nie rozumiem",
            b:1,
            c:false,
            name:{
                a:0,
                b:0,
            }
        }
        return answer
    }
}
if(topic==="brakimienia"){
    answer={
        a:"Najpierw podaj mi swoje imie kolego",
        b:"Nie opowiadam o sobie nie znajomym",
        c:"podajImie",
        name:{
            a:0,
            b:0,
        }

    }
    return answer
}
if(topic==="imieVisit"){
    answer={
        a:`Naprawde ładne imie`,
        b:"Wyslij do mnie może -9-?",
        c:false,
        name:{
            a:0,
            b:0,
        }
    }
    return answer
}

 }


return respond(user)


}


export default filter

