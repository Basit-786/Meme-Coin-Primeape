import React from 'react'

import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='flex items-center justify-center px-4 min-h-screen flex-wrap-reverse my-20 md:my-12 max-w-7xl mx-auto'>
      <motion.div 
      initial={{ x: -300 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}
      className='flex justify-center items-center w-full lg:w-[50%] gap-12'>
        <img src='/hero.png' alt='LOGO' className='w-full h-full'/>
      </motion.div>
      <motion.div 
      initial={{ x: 300 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}
      className='py-8 md:px-6  w-full lg:w-[50%]'>
        <h1 className='text-4xl md:text-5xl text-outline uppercase text-center pb-5 logo'>What is PRMAPE</h1>
        <p className='text-xl leading-10 text-center'>
        Everyone loves Pokemon and especially PrimeApe which uses its anger to fuel it energy. PrimeApe is going to make every rugged person in crypto feel home. Don’t worry, this Ape is not going to leave your side. PrimeApe doesn’t believe in constant updates over telegram or discord but when time comes, this Ape is going to launch everything. <br /> Elon love PrimeApe, Biden loves PrimeApe, who doesn’t love this beautiful Pokemon. When nervous, can’t sleep at night, had a fight with wifey, close your eyes, take a deep breath and think of this Ape. Apes come and go, PrimeApe stays forever!!!!
        </p>
      </motion.div>
    </div>
  )
}

export default About