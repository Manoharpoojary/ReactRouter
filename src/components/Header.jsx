import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='m-3'>
        <div>
            <div className='flex justify-center gap-2.5 text-black '>
                <NavLink to='/' className={({isActive})=>`font-mono ${isActive?'text-orange-400':'text-gray-700'} `}>home</NavLink>
                <NavLink to='/about' className={({isActive})=>`font-mono ${isActive?'text-orange-400':'text-black'} `}>About</NavLink>
                <NavLink to='/contact' className={({isActive})=>`font-mono ${isActive?'text-orange-400':'text-black'} `}>Contact</NavLink>
                <NavLink to='/github' className={({isActive})=>`font-mono ${isActive?'text-orange-400':'text-black'} `}>GitHub</NavLink>

            </div>
        </div>
    </div>
  )
}

export default Header