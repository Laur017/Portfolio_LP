import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Project1 from './1stProject/Project1'

function App() {
  const navigate = useNavigate()

  return (
   <div className="main-page">
      <h1>LP Portfolio</h1>
      <button onClick={navigate('/project1')}>1st Project</button>

      <Routes>
        <Route path='/project1' element={<Project1 />} />
      </Routes>
   </div>
  )
}

export default App
