import React, { useEffect, useState } from 'react'
import "./Rybicky.css"

function Rybicky({pridejRybku,data,vymazRybku}) {

    const [velRybicky,setVelRybicky]=useState("mala")
    const [jmenoRybicky,setJmenoRybicky]=useState("")
    const [validace,setValidace]=useState(true)

    const velikostRybicky = (e)=> {
        setVelRybicky(e.target.value)
    }

    const inputJmenoRybicky=(e)=> {
        let rybka = e.target.value
        

        setJmenoRybicky(rybka)

    }

    useEffect(()=>{
        if (jmenoRybicky.trim().length===0) {setValidace(true)} else {setValidace(false)}
    },[jmenoRybicky])


    const pridatRybku=()=>{
        pridejRybku(jmenoRybicky,velRybicky)
        setJmenoRybicky("")

    }

    



  return (
    <div className='rybicky'>
        <h2>Seznam rybiček:</h2>
        <div className='seznamRybicek'>
            {
                data.map((rybka)=>{
                    return (<div key={rybka.id} className='rybka_radek'>
                        <span>{rybka.jmeno} / {rybka.velikost}</span>
                        <button onClick={()=>vymazRybku(rybka.id)}>X</button>

                    </div>
                    )
                })
            }

        </div>

        <br />
        <div className='jmryb'>

        <input className="" type="text" name='rybicky' placeholder='Jméno rybičky' value={jmenoRybicky} onChange={inputJmenoRybicky}/>
        <label htmlFor="mala">malá</label>
        <input type="radio" name="velikost_ryb" id="mala" value="mala" onChange={velikostRybicky}  checked={velRybicky==="mala"}/>
        <label htmlFor="velka">velka</label>
        <input type="radio" name="velikost_ryb" id="velka" value="velka" onChange={velikostRybicky} checked={velRybicky==="velka"}/>
        <button disabled={validace} onClick={pridatRybku}>Přidat</button>
        </div>

    </div>
  )
}

export default Rybicky