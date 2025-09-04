import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio/Portfolio'
import { Default } from './components/Default/Default'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { Resume } from './components/Resume/Resume'
import { About } from './components/Home/About'
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton'

function App() {

  return (
    <>
      <BrowserRouter>
        <div
          className="w-full h-80 bg-cover bg-center absolute top-[0px] relative top-0 mx-auto"
          style={{ backgroundImage: "url('/images/home-top-bg.jpg')" }}
        ></div>
        <div className='w-[95%] md:w-[90%] lg:w-[80%] flex flex-col xl:flex-row mx-auto'>
          <Default />
          <div className='p-2 md:p-6 w-full'>
            <Navbar />
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
        <WhatsAppFloatingButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
