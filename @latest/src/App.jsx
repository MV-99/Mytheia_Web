
import './App.css'
import Home, { Navbar } from '../src/pages/home/home.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//rutas 
import Goddess from './pages/goddess/goddess.jsx'
import Stoicism from '../src/pages/stoicism/stoicism.jsx'
import About from '../src/pages/about/about.jsx'
import Contact from '../src/pages/contact/contact.jsx'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/goddess" element={<Goddess/>}/>
        <Route path="/stoicism" element={<Stoicism/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
