import React, { useState } from 'react'
import SwitchOn from './on-button.png'
import SwitchOff from './off-button.png'

export default function Project3() {
    const [switchValue,setSwitch] = useState<boolean>(false)
    const [sliderValue, setSliderValue] = useState<number>(100)

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value)
    }

  return (
    <div className='pr3-main-div'>
        <div className="pr3-main-text">
            <h3>Simple, traffic-based pricing</h3>
            <h5>Sign-up for our 30-day trial. No credit card required.</h5>
        </div>
        <div className="pr3-card">
            <div className="pr3-card-first-text">
                <h4>{sliderValue === 0 ? 1 : sliderValue}K PAGEVIEWS</h4>
                <h4><span>${switchValue ? sliderValue * 0.3 : sliderValue * 0.4}</span>/month</h4>
            </div>
            <input type="range" min={0} max={200} step={10} className="pr3-slider" value={sliderValue} onChange={handleSliderChange}></input>
            <div className="pr3-card-billing">
                <h6>Monthly Billing</h6>
                <img src={switchValue ? SwitchOn : SwitchOff} onClick={()=>setSwitch(!switchValue)}/>
                <h6>Yearly Billing</h6>
                <h6>25% discount</h6>
            </div>
            <div className="pr3-card-start-trial">
                <div className="pr3-card-start-ben">
                    <h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
                        Unlimited websites</h6>
                    <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
                        100% data ownership</h6>
                    <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
                        Email reports</h6>
                </div>
                <button>Start my trial</button>
            </div>
        </div>
    </div>
  )
}
