import './App.css'
import {Routes, Route} from 'react-router-dom'
import Project1 from './components/1stProject/Project1'
import Home from './components/Home/Home'

function App() {

  return (
   <div className="main-page">
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project1' element={<Project1 />} />
      </Routes>
   </div>
  )
}

export default App
