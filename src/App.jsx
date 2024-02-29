import Contact from './components/Contact'
import Mainpage from './components/Mainpage'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {

  return (
    <div>
      <Sidenav />
      <Mainpage />
      <Work />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
