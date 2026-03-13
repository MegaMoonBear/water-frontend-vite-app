// import { useState } from 'react'
import { useState } from 'react';

import './App.css'
import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'
import IntroInstruct from './components/IntroInstruct.jsx'
import ChooseUploadOutpAI from './components/ChooseUpload_OutpAI.jsx' 
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0); // Tracks the number of button clicks
  const [successfulUploads, setSuccessfulUploads] = useState(0); // Tracks successful uploads

  return (
    <div>
      <Navbar />
      <Header />

      <IntroInstruct />
      <ChooseUploadOutpAI 
        count={count} 
        setCount={setCount} 
        setSuccessfulUploads={setSuccessfulUploads} // Pass state setters to child component
      />

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <p>Button Clicks: {count}</p> {/* Display the number of button clicks */}
        <p>Successful Uploads: {successfulUploads}</p> {/* Display the number of successful uploads */}
        {count > successfulUploads && (
          <p style={{ color: 'red' }}>
            Warning: Not all uploads were successful!
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
