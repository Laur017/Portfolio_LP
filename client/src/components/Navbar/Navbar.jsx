/* eslint-disable no-unused-vars */
import LightLogo from '../../assets/logo-white.png'
import DarkLogo from '../../assets/logo-dark.png'
import LightMode from '../../assets/light-mode.png'
import DarkMode from '../../assets/dark-mode.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const navigate = useNavigate()
    const [dark, setDark] = useState(false)

    useEffect(()=>{
        document.querySelector("body").setAttribute("data-theme", !dark ? "light" : "dark")
    },[dark])

  return (
    <nav>
        <h4 onClick={()=> navigate('/')}>home </h4>
        <h4>about me</h4>
        <h4 onClick={() => navigate('/projects')}>portfolio</h4>
        {/* <img src={!dark ? DarkLogo : LightLogo} onClick={()=> navigate('/')}/> */}
        <img src={!dark ? DarkMode : LightMode} onClick={()=>setDark(!dark)}/>
    </nav>
  )
}
