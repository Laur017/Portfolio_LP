import React from 'react'

export default function Pr6Cart({open, children}) {
    if (!open) return null
  return (
    <div className='pr6-cart'>
        <h4>Cart</h4>
        <hr />
        {children}
    </div>
  )
}
