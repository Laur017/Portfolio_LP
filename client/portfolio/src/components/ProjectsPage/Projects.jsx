/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
    const navigate = useNavigate()
  return (
    <div className='projects-div'>
        <button onClick={()=> navigate('/project1')}>Project 1</button>
        <button>Project 2</button>
        <button>Project 3</button>
        <button>Project 4</button>
    </div>
  )
}
