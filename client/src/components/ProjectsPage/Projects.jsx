/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
    const navigate = useNavigate()
  return (
    <div className='projects-div'>
        <button onClick={()=> navigate('/project1')}>Project 1</button>
        <button onClick={()=> navigate('/project2')}>Project 2</button>
        <button onClick={()=> navigate('/project3')}>Project 3</button>
        <button onClick={()=> navigate('/project4')}>Project 4</button>
        <button onClick={()=> navigate('/project5')}>Project 5</button>
        <button onClick={()=> navigate('/project6')}>Project 6</button>
    </div>
  )
}
