import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-blue-950'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12 py-6 px-6 shadow-xl shadow-gray-700 rounded-xl'>
            <img className='rounded-xl hover:scale-110 ease-in duration-200  cursor-pointer' src={project1} title='landingpage' />
            <img className='rounded-xl hover:scale-110 ease-in duration-200  cursor-pointer' src={project2} title='movieproject'/>
            <img className='rounded-xl hover:scale-110 ease-in duration-200  cursor-pointer' src={project3} title='contactpage'/>
            <img className='rounded-xl hover:scale-110 ease-in duration-200  cursor-pointer' src={project4} title='aboutpage'/>
        </div>


        </div>
  )
}

export default Projects