import React from 'react'
import { Canvas } from '@react-three/fiber'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Model3d } from '../components/model3d' 
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/loader'
import { Float } from '@react-three/drei'

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 853})
    return (
      <section id="hero" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
        <HeroText/>
        <ParallaxBackground/>
        <figure 
         className="absolute inset-0"
         style={{width: '100vw', height: '100vh'}}>                  
          <Canvas camera={{ position: [0, 1, 3] }}>
             <Suspense fallback={<Loader/>}>
              <Float>
              <Model3d
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}/>
              </Float>
            <Rig/>
           </Suspense>
          </Canvas>
        </figure>
      </section>
    )
}
        



function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(state.camera.position, [state.mouse.x / 2, 1 + state.mouse.y / 2, 3], 0.5, delta)
    })
}
export default Hero