import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/ProjectsPage/Projects'
import Project1 from './components/1stProject/Project1'
import Project2 from './components/2ndProject/Project2'
import Project3 from './components/3rdProject/Project3'

function App() {

  return (
   <div className="main-page">
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project1' element={<Project1 />} />
        <Route path='/project2' element={<Project2 />} />
        <Route path='/project3' element={<Project3 />} />
      </Routes>
   </div>
  )
}

export default App
