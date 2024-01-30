import React from 'react';

import { Button } from 'react-bootstrap';



function VRbutton() {
  



  const url = 'https://commiep.github.io/MAIADemoVR/'
  
  const handleClick = () => {
    window.open(url, '_blank')
  }
  const handleClick1 = () => {
    window.open(url, '_blank')
  }

  return (
    <>
      
      <div className='arbtn' id= 'demo'>
        <section className='one' onClick={handleClick}>
        <img src = 'vr.png' />
        <Button>View In Virtual Reality</Button>
        
          
        </section>

        <section className='two' onClick={handleClick1}>
        <img src = 'android.png' />
        <Button>Mobile Browser Walkthrough</Button>
          
        </section>


        
      </div>

     

      
    </>
  );
}

export default VRbutton;
