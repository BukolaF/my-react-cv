import background from '../assets/images/background.jpg';
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Mainpage = () => {
  return (
    <div id="main">
         <img src={background} className="w-full h-screen object-cover object-left scale-x-[-1]" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-7xl font-extrabold font-serif pl-10 text-gray-950 lg:mt-10'>I'm Bukola Ojoye</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 pl-10 font-serif text-gray-950'>I'm a 
            <TypeAnimation
            sequence={[
                'Software Engineer',        
                1000, 
                'Tech Enthusiast',
                1000,
            ]}
            wrapper="div"
            cursor={true}
            style={{ fontSize: '2em', paddingLeft: '5px' }}
            repeat={Infinity}
            />
            </h2>
            <div className='font-extrabold flex justify-between pt-6 max-w-[200px] pl-10 w-full'>
            <a href='https://twitter.com/Bukolaf1925'><FaTwitter  size={20} className='cursor-pointer'/> </a>
            <a href='https://www.instagram.com/_bukola_f/'> <FaInstagram  size={20} className='cursor-pointer'/> </a>
            <a href='https://github.com/BukolaF'> <FaGithub  size={20} className='cursor-pointer '/> </a>
            <a href='https://www.linkedin.com/in/bukola-ojoye-favour/'> <FaLinkedinIn  size={20} className='cursor-pointer'/> </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Mainpage