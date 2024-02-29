import {FaTwitter, FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="container max-w-full bg-gray-500 text-center">
        <p className="text-center py-2 text-gray-900">&copy; Copyright 2024</p>
        <div className='font-bold flex justify-center px-10 items-center pt-6'>
            <a href='https://twitter.com/Bukolaf1925'><FaTwitter  size={20} className='cursor-pointer'/> </a>
            <a href='https://www.instagram.com/_bukola_f/'> <FaInstagram  size={20} className='cursor-pointer'/> </a>
            <a href='https://github.com/BukolaF'> <FaGithub  size={20} className='cursor-pointer '/> </a>
            <a href='https://www.linkedin.com/in/bukola-ojoye-favour/'> <FaLinkedinIn  size={20} className='cursor-pointer'/> </a>
            </div>
      <p className="text-center font-bold py-2 text-gray-900">
        Built by
        <a href="https://twitter.com/Bukolaf1925"> Bukola Ojoye</a>
      </p>
      
    </div>
  )
}

export default Contact