/* eslint-disable no-unused-vars */
import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree, extend } from "@react-three/fiber"
import { Html, useProgress, OrbitControls } from '@react-three/drei'
import Laurentiu from './Laurentiu'
import React_logo from './React_logo'
import Laptop from './Voxel_web_development'

const Loader = () => {
    const { progress } = useProgress()
    return <Html center >{progress}%</Html>
}

export default function HomeModels() {
    
  return (
    <Canvas >
    {/* <OrbitControls /> */}
    <Suspense fallback={<Loader />}>
      {/* <React_logo scale={0.4} position={[-4, 2, 0]} rotation={[0.1,0,0]}/> */}
      <Laurentiu scale={10} position={[0, -1, 0]} rotation={[0, 2.5, 0]}/>
      {/* <Laptop scale={0.3} position={[2.4, 1, 0]} rotation={[0.5, 0, 0]}/> */}
      <ambientLight intensity={0.8} />
      {/* <directionalLight /> */}
    </Suspense>
  </Canvas>
  )
}