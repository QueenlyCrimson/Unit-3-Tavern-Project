import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AboutCards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#1b1414] text-black'>
      <div className='text-center text-4xl pb-[2rem]'>
        <h1 className='font-Glock text-5xl'>Meet The Developers</h1>
      </div>
      <div className='max-w-[1240px] mx-auto grid  md:grid-cols-4 gap-6 py-10'>
        <div className='w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 h-20 rounded-full mx-auto mt-[-3rem] bg-white' src="https://media.licdn.com/dms/image/D4E03AQEgQjr9B0okLg/profile-displayphoto-shrink_400_400/0/1668631358662?e=1683763200&v=beta&t=6bBhTlpSLX9rxDd4pz_5PLydkVNFqPE4KkFyRNu1ETs" alt='/' />
          <h2 className='text-xl font-bold text-center pt-3'>Channel Harris</h2>
          <p className='text-center'>Full Stack Developer</p>
          <p className='text-center'>General Assembly</p>
          <div className='py-8 text-center font-medium'>
            <p>Meticulous problem solver with a passion for providing clean and proficient code for both users as well as other developers.</p>
          </div>
          <p className='font-bold text-center py-3'>Frontend</p>
          <div className='flex py-3 justify-center'>
            {/* <AiFillLinkedin size={40}/> */}
            <Link to={"https://www.linkedin.com/in/channelharris/"}><svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg></Link>
            <Link to={"https://github.com/NellyNel520"}><AiFillGithub size={40} /></Link>
            <Link to={"https://www.channelharris.com/"}><BsBriefcaseFill size={40} /></Link>
          </div>

        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 h-20 rounded-full mx-auto mt-[-3rem] bg-white' src="https://media.licdn.com/dms/image/D5635AQG3J0DNw3WEiQ/profile-framedphoto-shrink_400_400/0/1664424248308?e=1678723200&v=beta&t=FnwtUB8A8ld5js3Sd1OxQ896kboYxM1HtDOzjAcTxD0" alt='/' />
          <h2 className='text-xl font-bold text-center pt-3'> Chikodi Merenu</h2>
          <p className='text-center'>Full Stack Developer</p>
          <p className='text-center'>General Assembly</p>
          <div className='py-8 text-center font-medium'>
            <p>Efficient and solution-oriented data analyst driven to solve new problems every day. </p>
          </div>
          <p className='font-bold text-center py-4'>Frontend</p>
          <div className='flex py-3 justify-center'>
            {/* <AiFillLinkedin size={40}/> */}
            <Link to={"https://www.linkedin.com/in/chikodimerenu/"}><svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg></Link>
            <Link to={"https://github.com/CMerenu"}><AiFillGithub size={40} /></Link>
            {/* <BsBriefcaseFill size={40} /> */}
          </div>

        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 h-20 rounded-full mx-auto mt-[-3rem] bg-white' src="https://media.licdn.com/dms/image/D4E03AQHY8I1TP1_z9Q/profile-displayphoto-shrink_400_400/0/1673197304717?e=1683763200&v=beta&t=0yxYsX6B5pTP96Jf9Q1-CVtqMegMfeKPG2hFM-CeDMU" alt='/' />
          <h2 className='text-xl font-bold text-center py-3'>Joshua Ascolillo</h2>
          <p className='text-center'>Full Stack Developer</p>
          <p className='text-center'>General Assembly</p>
          <div className='py-8 text-center font-medium'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <p className='font-bold text-center py-4'>Backend</p>
          <div className='flex py-3 justify-center'>
            {/* <AiFillLinkedin size={40}/> */}
            <Link to={"https://www.linkedin.com/in/joshuaascolillo/"}><svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg></Link>
            <Link to={"https://github.com/jascolil01"}><AiFillGithub size={40} /></Link>
            {/* <BsBriefcaseFill size={40} /> */}
          </div>

        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 h-20 rounded-full mx-auto mt-[-3rem] bg-white' src="data:image/png;base64,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" alt='/' />
          <h2 className='text-xl font-bold text-center'>Erin Keys</h2>
          <p className='text-center'>Full Stack Developer</p>
          <p className='text-center'>General Assembly</p>
          <div className='py-8 text-center font-medium'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <p className='font-bold text-center py-4'>Backend</p>
          <div className='flex py-3 justify-center'>
            {/* <AiFillLinkedin size={40}/> */}
            <Link to={"https://www.linkedin.com/in/erin-keys-978798257/"}><svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg></Link>
            <Link to={"https://github.com/QueenlyCrimson"}><AiFillGithub size={40} /></Link>
            {/* <BsBriefcaseFill size={40} /> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutCards