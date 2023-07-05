/* eslint-disable no-unused-vars */
import { useState } from 'react'
import CardBack from './images_card/bg-card-back.png'
import CardFront from './images_card/bg-card-front.png'
import BgDesktop from './images_card/bg-main-desktop.png'
import BgMobile from './images_card/bg-main-mobile.png'

export default function Project1() {

  const [cardNumber, setCardNumber] = useState()
  const [cardHolder, setCardHolder] = useState()
  const [cardMonth, setCardMonth] = useState()
  const [cardYear, setCardYear] = useState()
  const [cvc, setCvc] = useState()

  const handleDetails = (e,aux) =>{
    if (aux === 1) {
      e.target.value.length <= 30 && setCardHolder(e.target.value.toUpperCase())
    } else if (aux === 2) {
      e.target.value.length < 17 && setCardNumber(e.target.value)
    } else if (aux === 3) {
      e.target.value.length < 3 && setCardMonth(e.target.value)
    } else if (aux === 4) {
      e.target.value.length < 3 && setCardYear(e.target.value)
    } else if (aux === 5) {
      e.target.value.length < 4 && setCvc(e.target.value)
    }
  }

  return (
    <div className='project1-div'>
      <img src={BgDesktop} />
      <div className="cards-div">
        <div className="card-div-front">
          <img src={CardFront} />
          <div>
            <h5>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h5>
            <div className='name-date-front-card'>
              <h6>{cardHolder? cardHolder : "Jane Appleseed"}</h6>
              <h6>{cardMonth ? cardMonth : "00"}/{cardYear ? cardYear: "00"}</h6>
            </div>
          </div>
        </div>
        <div className="card-div-back">
          <img src={CardBack} />
          <div>
            <h6>{cvc ? cvc : "000"}</h6>
          </div>
        </div>
      </div>

      <div className="form-div-card">
        <form>
          <label>
            <h5>CARHOLDER NAME</h5>
            <input type='text' placeholder='e.g. Jane Appleseed' value={cardHolder} onChange={(e)=> handleDetails(e,1)}/>
          </label>
          <label>
            <h5>CARD NUMBER</h5>
            <input type='text' placeholder='e.g. 1234 5678 9123 0000' value={cardNumber} onChange={(e)=> handleDetails(e,2)}/>
          </label>
          <div className="exp-date-card-cvc">
            <label>
              <h5>EXP. DATE (MM/YY)</h5>
              <input type='text' placeholder='MM' value={cardMonth} onChange={(e)=> handleDetails(e,3)}/>
              <input type='text' placeholder='YY' value={cardYear} onChange={(e)=> handleDetails(e,4)}/>
            </label>
            <label>
              <h5>CVC</h5>
              <input type='text' placeholder='e.g. 123' value={cvc} onChange={(e)=> handleDetails(e,5)}/>
            </label>
          </div>
          <button>Confirm</button>
        </form>
      </div>
    </div>
  )
}
