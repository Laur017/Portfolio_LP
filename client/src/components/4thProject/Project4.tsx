import React, { useState } from 'react'
import Arrow from './arrow.png'

export default function Project4() {
    const [insDay, setInsDay] = useState<string>("")
    const [insMonth, setInsMonth] = useState<string>("")
    const [insYear, setInsYear] = useState<string>("")
  return (
    <div className='pr4-main-div'>
        <div>
            <label>
                <h5>DAY</h5>
                <input type='text' placeholder='DD' value={insDay} onChange={(e)=>setInsDay(e.target.value)}/>
            </label>
            <label>
                <h5>MONTH</h5>
                <input type='text' placeholder='MM' value={insMonth} onChange={(e)=>setInsMonth(e.target.value)}/>
            </label>
            <label>
                <h5>YEAR</h5>
                <input type='text' placeholder='YYYY' value={insYear} onChange={(e)=>setInsYear(e.target.value)}/>
            </label>
            <img src={Arrow} />
        </div>

        <div>
            <h1><span>{!insYear ? "--":insYear}</span> years</h1>
            <h1><span>{!insMonth ? "--":insMonth}</span> months</h1>
            <h1><span>{!insDay ? "--":insDay}</span> days</h1>
        </div>
    </div>
  )
}
