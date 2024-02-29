import { useState } from 'react';
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import { MdOutlineWork, MdWork, MdContactPhone, MdOutlinePerson3 } from 'react-icons/md' ;

const Sidenav = () => {
    const [showNav, setShowNav] = useState(false);


    const handleNav = () => {
        setShowNav(!showNav);
    }
  return (
    <div>
    <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] text-gray-900 text-2xl md:hidden' />
    { showNav ? (
        <div className='fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href='main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-500 shadow-gray-800 m-6 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '><AiOutlineHome size={20}/>
            <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href='work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-500 shadow-gray-800 m-6 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '><MdOutlineWork size={20}/>
            <span className='pl-4'>Work</span>
            </a>
            <a onClick={handleNav} href='skills' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-500 shadow-gray-800 m-6 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '><MdOutlinePerson3 size={20}/>
            <span className='pl-4'>Skills</span>
            </a>
            <a onClick={handleNav} href='projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-500 shadow-gray-800 m-6 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '><MdWork size={20}/>
            <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav} href='contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-500 shadow-gray-800 m-6 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '><MdContactPhone size={20}/>
            <span className='pl-4'>Contact</span>
            </a>
        </div>
        ) : (
        ''
        )}
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
              <a href='main' className='rounded-full shadow-lg bg-gray-400 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineHome size={20} />
                </a>  
                <a href='work' className='rounded-full shadow-lg bg-gray-400 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <MdOutlineWork size={20} />
                </a> 
                <a href='skills' className='rounded-full shadow-lg bg-gray-400 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <MdOutlinePerson3 size={20} />
                </a> 
                <a href='projects' className='rounded-full shadow-lg bg-gray-400 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                  <MdWork size={20}/>
                </a>
                <a href='contact' className='rounded-full shadow-lg bg-gray-400 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <MdContactPhone size={20} />
                </a> 
            </div>
        </div>
    </div>
  )
}

export default Sidenav