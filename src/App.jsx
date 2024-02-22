
import { useEffect, useState } from "react";
import "./App.css"
import Toggler from "./Components/Toggler/Toggler";
import Rybicky from "./Components/Rybicky/Rybicky";
import Akvarium from "./Components/Akvarium/Akvarium";

function App() {

  const [aktivni,setAktivni]=useState(1)
  const [seznamRyb,setSeznamRyb]=useState([])
  const [novaRybka,setNovaRybka]=useState({
    id:0,
    jmeno:"",
    velikost:"",
  })
  const [objemAkvaria,setObjemAkvaria]=useState(0)

  const [inputHodnotaS,setInputHodnotaS]=useState("")
    const [inputHodnotaD,setInputHodnotaD]=useState("")
    const [inputHodnotaV,setInputHodnotaV]=useState("")
  


  const volbaCasti = (name)=> {
    switch (name) {
      case "ryby": {
        setAktivni(1)
        break;
      }
      case "akvarium": {
        setAktivni(2)
        break;
      }
      default:break;
    }
  }

  const pridejRybku=(jmeno,velikost)=>{

    let novaRybkaId=novaRybka.id+1
    const rybkanapridani = {
      id:novaRybkaId,
      jmeno:jmeno,
      velikost:velikost,
    }

    setNovaRybka({
      id:novaRybkaId,
      jmeno:"",
      velikost:"",
    })

    setSeznamRyb((seznamRyb)=>{
      return [...seznamRyb,rybkanapridani]
    })
  }

  

  const vymazRybku = (idToDelete)=> {
    setSeznamRyb(seznamRyb.filter((rybka)=>rybka.id !==idToDelete))
  }

  const inputChange=(e)=> {
    switch (e.target.name) {
        case "sirka" :{
            setInputHodnotaS(e.target.value)
            break
        }
        case "delka" :{
            setInputHodnotaD(e.target.value)
            break
        }
        case "vyska" :{
            setInputHodnotaV(e.target.value)
            break
        }
        default:break
    }}


  useEffect(()=>{
    let objem=0
    seznamRyb.map((rybka)=>{
        if (rybka.velikost=="mala") {
            objem+=10
        }else {
            objem+=20
        }
    })
    setObjemAkvaria(objem)
},[seznamRyb])

  
  return (
    <div className="all">

    <div className="App">
          <h2>Akvarium - plánování rozměrů</h2>
          <Toggler aktivni={aktivni} volbaCasti={volbaCasti}/><br />

          {
            aktivni===1 && 
            <>
            <Rybicky pridejRybku={pridejRybku} data={seznamRyb} vymazRybku={vymazRybku}/>
            </>
          }

          {
            aktivni ===2 &&
            <>
    
          <Akvarium objemakvariaR={objemAkvaria} inputChange={inputChange} sirka={inputHodnotaS} delka={inputHodnotaD} vyska={inputHodnotaV}/>
            </>
          }


    </div>
    </div>
  );
}

export default App;
