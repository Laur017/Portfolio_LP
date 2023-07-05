/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'

export default function Project2() {
    const [page,setPage] = useState(1)
  return (
    <div className={`pr2-home-div ${page === 1 ? "first" : page===2 ? "second": page === 3 ? "third" : "fourth"}-planet-background`}>
        <div className='pr2-nav'>
            <button onClick={()=>setPage(1)}><strong>00</strong> HOME</button>
            <button onClick={()=>setPage(2)}><strong>01</strong> DESTINATION</button>
            <button onClick={()=>setPage(3)}><strong>02</strong> CREW</button>
            <button onClick={()=>setPage(4)}><strong>03</strong> TECHNOLOGY</button>
        </div>
        {page === 1 ? <div>
            <div className="pr2-home">
                <div className="pr2-home-context">
                   <h5>SO, YOU WANT TO TRAVEL TO </h5> 
                   <h1>SPACE</h1>
                   <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <button onClick={()=>setPage(2)}>EXPLORE</button>
            </div>

        </div>: page === 2 ? <Destination />:
        page === 3 ? <Crew /> : <Technology />}
    </div>
  )
}
