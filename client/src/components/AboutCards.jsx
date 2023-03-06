import React from 'react'

const AboutCards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-6'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://media.licdn.com/dms/image/D4E03AQEgQjr9B0okLg/profile-displayphoto-shrink_400_400/0/1668631358662?e=1683763200&v=beta&t=6bBhTlpSLX9rxDd4pz_5PLydkVNFqPE4KkFyRNu1ETs" alt='/'/>
          <h2 className='text-xl font-bold text-center'>Channel Harris</h2>
          <p className='text-center'>Full Stack Developer</p>
          <div className='py-8'>
            <p>General Assembly</p>
            <p>short about snippet</p>
          </div>
          <div>
            <button>LinkedIn</button>
            <button className='pl-2'>Github</button>
            <button className='pl-2'>Portfolio</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutCards