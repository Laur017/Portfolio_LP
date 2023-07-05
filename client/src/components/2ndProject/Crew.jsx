/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Om1 from './crew/image-douglas-hurley.png'
import Om2 from './crew/image-mark-shuttleworth.png'
import Om3 from './crew/image-victor-glover.png'
import Om4 from './crew/image-anousheh-ansari.png'

const crewArray = [
    {
        name: "DOUGLAS HURLEY",
        desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        role: "COMMANDER"
    },
    {
        name: "MARK SHUTTLEWORTH",
        desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        role: "MISSION SPECIALIST "
    },
    {
        name: "VICTOR GLOVER",
        desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        role: "PILOT"
    },
    {
        name: "ANOUSHEH ANSARI",
        desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        role: "FLIGHT ENGINEER"
    }
]

export default function Crew() {
    const [crew, setCrew] = useState(0)
  return (
    <div className="pr2-crew">
        <div className="pr2-crew-text">
            <h3>02 MEET YOUR CREW</h3>

            <div className="pr2-crew-context">
                <h3>{crewArray[crew].role}</h3>
                <h1>{crewArray[crew].name}</h1>
                <p>{crewArray[crew].desc}</p>
            </div>

            <div>
                <input type='radio' name='crew' onChange={()=>setCrew(0)} checked={crew === 0}/>
                <input type='radio' name='crew' onChange={()=>setCrew(1)}/>
                <input type='radio' name='crew' onChange={()=>setCrew(2)}/>
                <input type='radio' name='crew' onChange={()=>setCrew(3)}/>
            </div>
        </div>
        <img src={crew === 0 ? Om1 : crew === 1 ? Om2 : crew === 2 ? Om3 : Om4} />
    </div>
  )
}
