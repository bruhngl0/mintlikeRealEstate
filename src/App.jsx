import React from 'react';
import ARbutton from './components/ARbutton';  // Path might differ based on your project structure
import Header from './components/Header';
import Footer from './components/Footer';
import Bg from './components/Bg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './styles/app.scss'
import './styles/header.scss'
import './styles/btn.scss'
import './styles/bg.scss'
import './styles/about.scss'
import './styles/footer.scss'
import './styles/mediaquery.scss'




function App() {


  return (
    <Router>
     <Header />
        <Routes>
            
           <Route path= '/' element={<ARbutton />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
