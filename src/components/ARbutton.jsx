import React from 'react';
import Bg from './Bg';
import About from './About';
import VRbutton from './VRbutton';
import { Button } from 'react-bootstrap';



function ARbutton() {
  

  const handleClick = () => {
    window.open(url1, '_blank')
  };

  const url = 'https://maiaxmintlikedemo.onrender.com/'
  const url1 = "https://drive.google.com/file/d/1g-HYvCPu8PoOy56XKMkBHbtYL6WkD8jH/view?usp=drive_link"
  const handleClick1 = () => {
    window.open(url, '_blank')
  }

  return (
    <>
      <Bg />
      <About />
      <div className='arbtn' id= 'demo'>
        <section className='one' onClick={handleClick}>
        <img src = 'AR.png' />
        <Button>View In Argumented Reality</Button>
        
          
        </section>

        <section className='two' onClick={handleClick1}>
        <img src = 'desktop.png' />
        <Button>Desktop Walkthrough</Button>
          
        </section>


        
      </div>

     <VRbutton />

      
    </>
  );
}

export default ARbutton;
