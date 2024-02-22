import React from 'react'
import "./Toggler.css"

function Toggler({aktivni,volbaCasti}) {

    const klik =(e)=> {
        
        volbaCasti(e.target.name)
    }

  return (
    <div className='toggler'>
        <button name='ryby' className={`${aktivni===1 ? "aktivni":"neaktivni"}`}     onClick={klik}>Rybičky</button>
        <button name="akvarium" className={`${aktivni===2 ? "aktivni":"neaktivni"}`} onClick={klik}>Akvárium</button>
    </div>
  )
}

export default Toggler