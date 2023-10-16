"use client"
import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ParticlesConf from "./particlesConf.json"

const ParticlesBg = () => {
    async function loadParticles(main) {
        await loadFull(main)
    }
  return (
    <Particles 
        id='tsparticles'
        init={loadParticles}
        options={ParticlesConf}
    />
  )
}

export default ParticlesBg