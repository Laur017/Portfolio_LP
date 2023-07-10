import React, { useState } from 'react'
import Cart from './shopping-cart.png'
import Image from '../Home/img/tip_buletin.png'
import Photo1 from './img/image-product-1.jpg'
import Photo2 from './img/image-product-2.jpg'
import Photo3 from './img/image-product-3.jpg'
import Photo4 from './img/image-product-4.jpg'

export default function Project6() {
    const [counter,setCounter] = useState<number>(0)
    const [imageNum, setImageNum] = useState<number>(1)

    const handleCounter = (aux) => {
        aux === 1 ?
            counter > 0 ?
                setCounter(counter - 1) :
                setCounter(0):
            setCounter(counter + 1)
    }

  return (
    <div className='pr6-main-div'>
        <div className="pr6-nav">
            <div className="pr6-nav-left">
                <h3>sneakers</h3>
                <h5>Collections</h5>
                <h5>Men</h5>
                <h5>Women</h5>
                <h5>About</h5>
                <h5>Contact</h5>
            </div>
            <div className="pr6-nav-right">
                <img src={Cart} />
                <img src={Image} />
            </div>
        </div>

        <div className="pr6-content">
            <div className="pr6-left">
                <img src={imageNum === 1 ? Photo1 : imageNum === 2 ? Photo2 : imageNum === 3 ? Photo3 : Photo4} />
                <div className="pr6-carrousel">
                    <img src={Photo1} onClick={()=>setImageNum(1)} className={imageNum === 1 ? 'pr6-active' : ''}/>
                    <img src={Photo2} onClick={()=>setImageNum(2)} className={imageNum === 2 ? 'pr6-active' : ''}/>
                    <img src={Photo3} onClick={()=>setImageNum(3)} className={imageNum === 3 ? 'pr6-active' : ''}/>
                    <img src={Photo4} onClick={()=>setImageNum(4)} className={imageNum === 4 ? 'pr6-active' : ''}/>
                </div>
            </div>
            <div className="pr6-right">
                <h5>SNEAKER COMPANY</h5>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>These low-profile sneakers are your perfect
                    casual wear companion. Featuring a durable rubber
                    outer sole, they'll withstand everything the 
                    weather can offer
                </p>
                <h3>$125.00  <span>50%</span></h3>
                <p className='pr6-taiat'>$250.00</p>
                <div className="pr6-pay">
                    <div>
                        <button onClick={()=>handleCounter(1)}>-</button>
                        <h3>{counter}</h3>
                        <button onClick={()=>handleCounter(2)}>+</button>
                    </div>
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
