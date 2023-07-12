import React, { useState } from 'react'
import Image1 from './tog.png'
import Image2 from './tog2.png'

const SIGNS = ["+", "-", "*", "/"]

export default function Project8() {
    const [selectTheme, setSelectTheme] = useState<boolean>(false)
    const [expres, setExpres] = useState<string>("")

    const handleResult = () => {
        const numbers: number[] = [];
        const signs: string[] = [];
        let result = 0
        
        let currentNumber = "";
        for (let i = 0; i < expres.length; i++) {
            if (SIGNS.includes(expres[i])) {
                signs.push(expres[i]);
                if (currentNumber !== "") {
                    numbers.push(parseFloat(currentNumber));
                    currentNumber = "";
                }
            } else if (!isNaN(parseFloat(expres[i]))) {
                // Found a digit, add it to the current number
                currentNumber += expres[i];
            }
        }
        
        if (currentNumber !== "") {
            numbers.push(parseFloat(currentNumber));
        }

        for(let j=0;j<signs.length; j++){
            if(signs[j]==="*"){
                result += numbers[j] * numbers[j+1]
            }
        }

        setExpres(result.toString())
        
    }

  return (
    <div className={`pr8-main-div ${selectTheme && 'pr8-second'}`}>
        <div className="pr8-top">
            <h4>calc</h4>
            <div>
                <h6>THEME</h6>
                <span>
                    <h5>1 2</h5>
                    <img src={selectTheme ? Image1 : Image2} onClick={()=>setSelectTheme(!selectTheme)}/>
                </span>
            </div>
        </div>
        <div className="pr8-mid">
            <h2>{expres.length ? expres : "0"}</h2>
        </div>
        <div className="pr8-bottom">
            <button onClick={() => setExpres(prev => prev + "7")}>7</button>
            <button onClick={() => setExpres(prev => prev + "8")}>8</button>
            <button onClick={() => setExpres(prev => prev + "9")}>9</button>
            <button className='pr8-col1' onClick={() => setExpres(str => str.slice(0, -1))}>DEL</button>
            <button onClick={() => setExpres(prev => prev + "4")}>4</button>
            <button onClick={() => setExpres(prev => prev + "5")}>5</button>
            <button onClick={() => setExpres(prev => prev + "6")}>6</button>
            <button onClick={() => setExpres(prev => prev + "+")}>+</button>
            <button onClick={() => setExpres(prev => prev + "1")}>1</button>
            <button onClick={() => setExpres(prev => prev + "2")}>2</button>
            <button onClick={() => setExpres(prev => prev + "3")}>3</button>
            <button onClick={() => setExpres(prev => prev + "-")}>-</button>
            <button onClick={() => setExpres(prev => prev + ",")}>.</button>
            <button onClick={() => setExpres(prev => prev + "0")}>0</button>
            <button onClick={() => setExpres(prev => prev + "/")}>/</button>
            <button onClick={() => setExpres(prev => prev + "*")}>x</button>
            <button className='pr8-col1' onClick={()=>setExpres("")}>RESET</button>
            <button className='pr8-col2' onClick={handleResult}>=</button>
        </div>
    </div>
  )
}
