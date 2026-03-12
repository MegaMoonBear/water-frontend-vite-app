// import { useState } from 'react'
import { useState } from 'react';

import './App.css'
import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'
import IntroInstruct from './components/IntroInstruct.jsx'
import ChooseUploadOutpAI from './components/ChooseUpload_OutpAI.jsx' 
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  // useState to keep photo if refresh before Submit or AI output, but not yet implemented.

  return (
  <div>

    <Navbar />
    <Header />

    <IntroInstruct />
    <ChooseUploadOutpAI />

    <Footer />
    </div>
  )
}

export default App
