import React from 'react'
import Particles from './Particles'
import SplitText from "./SplitText"

const About = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className='bg-black' style={{ width: '100%', height: '800px', position: 'relative' }}>
<SplitText
  text="Hello Coders!"
  className="text-7xl font-semibold text-center absolute top-52 left-80"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
<Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={300}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={50}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
  )
}

export default About