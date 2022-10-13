import { Outlet } from 'react-router-dom'
import NavBar from './../nav-bar/NavBar'
import Footer from './../footer/Footer'

import { MdDarkMode } from 'react-icons/md'
import { FaUserSecret } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiTireIronCross } from 'react-icons/gi'
import { useEffect, useState } from 'react'

const Main = () => {
  const [theme, setTheme] = useState(false)
  const [navToggle, setNavToggle] = useState(false)
  useEffect(() => {
    theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <div className='bg-white dark:bg-black dark:text-white overflow-x-hidden'>
      <div className={navToggle ?
        'absolute top-0 right-0 lg:hidden w-4/6 h-full border-l bg-white dark:bg-gray-900 ease-in duration-700' : 'absolute top-0 right-full w-4/6 h-full border-l bg-white dark:bg-gray-900  ease-in duration-700'}>
        <div className=' absolute z-20 w-full '>
          <NavBar theme={theme} />
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='hidden lg:block lg:col-span-2  border-r-2 border-gray-400 bg-white dark:bg-gray-900 dark:border-neutral-400 h-screen'>
          <NavBar theme={theme} />
        </div>
        <div className='col-span-12 lg:col-span-10'>
          <div className='border-b border-gray-200 dark:border-neutral-400 py-4 '>
            <div className='w-11/12 mx-auto flex  items-center justify-between lg:justify-end'>
              <div className='lg:hidden'>
                {
                  navToggle ?
                    <button onClick={() => { setNavToggle(!navToggle) }}><GiTireIronCross /></button>
                    :
                    <button onClick={() => { setNavToggle(!navToggle) }}><GiHamburgerMenu /></button>
                }
              </div>
              <div className='flex gap-3 lg:gap-8 items-center'>
                <div className='flex gap-2 items-center'>
                  <span className='text-sm lg:text-lg'>Mode </span>
                  {
                    theme ?
                      <button onClick={() => { setTheme(!theme) }}><MdDarkMode className='text-xl' /></button>
                      :
                      <button onClick={() => { setTheme(!theme) }}><BsFillSunFill className='text-xl' /></button>
                  }
                </div>
                <div className='flex items-center gap-2 lg:gap-3 text-base lg:text-lg font-merriweather'>
                  <p>welcome</p>
                  <FaUserSecret className='text-lg lg:text-3xl' />
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main