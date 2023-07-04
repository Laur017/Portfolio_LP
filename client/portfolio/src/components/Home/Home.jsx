import {useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='home-div'>
        <h1>LP Portfolio</h1>
        <button onClick={() => navigate('/projects')}>Projects</button>
    </div>
  )
}
