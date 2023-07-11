import React from 'react'



export default function Pr6Modla({onClose, open, children}) {
    if (!open) return null

  return (
    <>
    <div className="pr6-overlay" onClick={onClose}></div>
    <div className='pr6-modal'>
        <button onClick={onClose}>X</button>
        {children}
    </div>
    </>
  )
}
