import React, { useEffect, useRef, useState } from 'react'
import "./Akvarium.css"

function Akvarium({objemakvariaR,inputChange,sirka,delka,vyska}) {

   
    const [rozmerVyhovuje,setRozmerVyhovuje]=useState(false)
    const [valid,setValid]=useState(false)
    const [obsah,setObsah]=useState("")
    
    

    useEffect (()=>{
        // console.log("objem akvaria z ryb "+objemakvariaR);

        const objem = parseFloat(sirka)*parseFloat(delka)*parseFloat(vyska)
        // console.log("objem dle rozmeru " + objem);

        if (!isNaN(objem) && objem >=0 && sirka>=0 && delka>=0 && vyska>=0) {
            
                if (objem<objemakvariaR) {
                    setRozmerVyhovuje(false)
                    setValid(false)
                    
                } else {
                    setRozmerVyhovuje(true)
                    setValid(true)
                }
                setObsah(objem)
        }else {
            setRozmerVyhovuje(false);
        }
        
    })
     
  return (
    <div className='akvarium'>
        <br />
        <h2>Velikost akvária:</h2>
        <p>{valid==true ? `Vyhovuje ${obsah} dm3`: `Nevyhovuje ${obsah} dm3`}</p>
        <div className="rozmery">
        <input type="number" name="sirka" id="" placeholder='Šířka [dm3]' value={sirka} onChange={inputChange}/>
        <input type="number" name="delka" id="" placeholder='Délka [dm3]' value={delka} onChange={inputChange}/>
        <input type="number" name="vyska" id="" placeholder='Výška [dm3]' value={vyska} onChange={inputChange}/>
        <button className={`${rozmerVyhovuje==false ? "btn_nevyhovuje":"btn_vyhovuje" }`}>Schválit rozměry</button>

        
        </div>


    </div>
  )
}

export default Akvarium