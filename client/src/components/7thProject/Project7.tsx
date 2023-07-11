import React, { useEffect, useState } from 'react'
import Dice from './img/icon-dice.svg'
import Divider from './img/pattern-divider-desktop.svg'

export default function Project7() {
    const [data, setData] = useState<any>({})

    const handleAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setData(data.slip))
    }

    // useEffect(() => {
    //     handleAdvice()
    // }, [])

    return (
        <div className='pr7-main-div'>
            {data.id ? (
                <>
                    <h5>ADVICE #{data.id}</h5>
                    <h3>"{data.advice}"</h3>
                </>
            ): <>Press to get an advice</>}
            <img src={Divider} />
            <button onClick={handleAdvice}><img src={Dice} /></button>
        </div>
    )
}
