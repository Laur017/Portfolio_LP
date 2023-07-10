import React, { useState } from 'react'
import Arrow from './arrow.png'

export default function Project4() {
    const [insDay, setInsDay] = useState<string>("")
    const [insMonth, setInsMonth] = useState<string>("")
    const [insYear, setInsYear] = useState<string>("")
    const [finalDay, setFinalDay] = useState<number>()
    const [finalMonth, setFinalMonth] = useState<number>()
    const [finalYear, setFinalYear] = useState<number>()
    const [month, date, year] = new Date().toLocaleDateString("en-US").split("/")

    console.log(date, month, year)
    console.log(parseInt(year) - 2001, parseInt(month) - 8, parseInt(date) - 17  )
  
    const handleResult = () =>{
        if(parseInt(month)<parseInt(insMonth)){
            setFinalYear(parseInt(year)-parseInt(insYear) - 1)
        } else {
            setFinalYear(parseInt(year)-parseInt(insYear))
        }
        if(parseInt(date)<parseInt(insDay)){
            setFinalDay(parseInt(date))
        } else {
            setFinalDay(parseInt(date) - parseInt(insDay))
        }
        if(parseInt(month)<parseInt(insMonth)){
            setFinalMonth(parseInt(month))
        } else {
            setFinalMonth(parseInt(month) - parseInt(insMonth))
        }
    }

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
            <img src={Arrow} onClick={handleResult}/>
        </div>

        <div>
            <h1><span>{!finalYear ? "--":finalYear}</span> years</h1>
            <h1><span>{!finalMonth ? "--":finalMonth}</span> months</h1>
            <h1><span>{!finalDay ? "--":finalDay}</span> days</h1>
        </div>
    </div>
  )
}
