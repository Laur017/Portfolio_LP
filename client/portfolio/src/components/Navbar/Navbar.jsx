/* eslint-disable no-unused-vars */
import LightLogo from '../../assets/logo-white.png'
import DarkLogo from '../../assets/logo-dark.png'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <nav>
        <img src={DarkLogo} onClick={()=> navigate('/')}/>
    </nav>
  )
}
