import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/ProjectsPage/Projects'
import Project1 from './components/1stProject/Project1'
import Project2 from './components/2ndProject/Project2'
import Project3 from './components/3rdProject/Project3'
import Project4 from './components/4thProject/Project4'
import Project5 from './components/5thProject/Project5'
import Project6 from './components/6thProject/Project6'
import Project7 from './components/7thProject/Project7'

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
        <Route path='/project4' element={<Project4 />} />
        <Route path='/project5' element={<Project5 />} />
        <Route path='/project6' element={<Project6 />} />
        <Route path='/project7' element={<Project7 />} />
      </Routes>
   </div>
  )
}

export default App
