import github from '../assets/images/github.svg';
import css3 from '../assets/images/css3.svg';
import mongodb from '../assets/images/mongodb.svg';
import html from '../assets/images/html.svg';
import javascript from '../assets/images/javascript.svg';
import react from '../assets/images/react.svg';
import tailwind from '../assets/images/tailwind.svg';
import typescript from '../assets/images/typescript.svg'

const Skills = () => {
  return (
    <div id='skills' className="bg-gray-200 max-w-[1040px] m-auto md:pl-20 p-4 py-10">
    <h1 className='text-4xl font-bold text-center text-blue-950'>Skills</h1>
    <p className='text-center py-8 text-gray-900'>I have built responsive websites using TailwindCSS with a proven track record in creating visually appealing codes using JavaScript, React.js, TypeScript. I have an experience with document database such as MongoDB and in debugging, issue resolution, and collaborating with cross-functional teams. I am a quick learner, team player, and very much excited to embrace new challenges. Ready to connect with industry professionals and explore exciting opportunities!</p>
      <div className="max-auto flex justify-center py-4">
      <span className="flex justify-between px-6">
            <img src={github} className="h-16 w-16 mr-3" />
           <img src={css3} className="h-16 w-16 mr-3" />
           <img src={html}  className="h-16 w-16 mr-3"/> 
           <img src={javascript} className="h-16 w-16 mr-3"/>
           <img src={react}  className="h-16 w-16 mr-3"/>
            <img src={mongodb} className="h-16 w-16 mr-3"/>
            <img src={tailwind} className='h-16 w-16 mr-3' />
            <img src={typescript} className='h-16 w-16 mr-3' />
            </span>
        </div>
    </div>
     
  )
}

export default Skills