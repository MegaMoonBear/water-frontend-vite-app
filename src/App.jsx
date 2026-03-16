import { useState, useEffect } from 'react';

import './App.css'
import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'
import IntroInstruct from './components/IntroInstruct.jsx'
import ChooseUploadOutpAI from './components/ChooseUpload_OutpAI.jsx' 
import Footer from './components/footer.jsx'

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await get('/api/get-photo-fact');
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <Navbar />
      <Header />

      <IntroInstruct />
      <ChooseUploadOutpAI />

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <p>Data from Backend:</p>
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </div>

      <Footer />
    </div>
  );
}

export default App;
