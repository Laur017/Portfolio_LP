/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Moon from './destination/image-moon.png'
import Europa from './destination/image-europa.png'
import Titan from './destination/image-titan.png'
import Mars from './destination/image-mars.png'

const planetArray = [
    {
    name:"MOON",
    description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    dist:"384.400 KM",
    time:"3 DAYS"
    },
    {
    name:"MARS",
    description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    dist:"225 MIL. KM",
    time:"9 MONTHS"
    },
    {
    name:"EUROPA",
    description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    dist:"628 MIL. KM",
    time:"3 YEARS"
    },
    {
    name:"TITAN",
    description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    dist:"1.6 BIL. KM",
    time:"7 YEARS"
    } 
]

export default function Destination() {
    const [planet, setPlanet] = useState(0)

  return (
    <div className='pr2-destination-div'>
        <div className="pr2-image-planet">
            <h3>01 PICK YOUR DESTINATION</h3>
            <img src={planet === 0 ? Moon : planet === 1 ? Mars : planet === 2 ? Europa : Titan} />
        </div>  
        <div className="pr2-text-planet">
            <div className="planet-nav">
                <button onClick={()=>setPlanet(0)}>MOON</button>
                <button onClick={()=>setPlanet(1)}>MARS</button>
                <button onClick={()=>setPlanet(2)}>EUROPA</button>
                <button onClick={()=>setPlanet(3)}>TITAN</button>
            </div>
            <h1>{planetArray[planet].name}</h1>
            <p>{planetArray[planet].description}</p>
            <hr />
            <div className="pr2-distance-planet">
                <div>
                    <h6>AVG. DISTANCE</h6>
                    <h4>{planetArray[planet].dist}</h4>
                </div>
                <div>
                    <h6>EST. TRAVEL TIME</h6>
                    <h4>{planetArray[planet].time}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
