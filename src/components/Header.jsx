import React from 'react'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <nav className='header'>
        
        
        
        <img src= 'one.png' className='maia' />
        
        <main>
            <HashLink to= '/#home'>Home</HashLink>
            <HashLink to= '/#demo'>Demo</HashLink>
            <HashLink to= '/#about'>About</HashLink>
            <HashLink to= '/#contact'>Contact</HashLink>
        </main>
    </nav>
  )
}

export default Header