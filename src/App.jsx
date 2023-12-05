import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './Components/About'
import Certification from './Components/Certification'
import Nav from './Components/Nav'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Media from './Components/Media'
import { Body } from './Components/styled'
import './index.css'
import {SocialMedia} from '../src/Components/styled'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/certification' element={<Certification/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Nav/>
      <SocialMedia>
      <Media/>
      </SocialMedia>
      </BrowserRouter>
    </>
  )
}

export default App
