import React from 'react'
import { Container, Logo} from  '../index'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
function Header() {
    

    const navigate = useNavigate();

    

  return (
    <header className='py-3 shadow bg-gray-500 rounded-full '>
        <Container>
            <nav className='flex justify-between'>
                <div className=' flex justify-start items-center gap-2'>
                  
                    <button key='Home' onClick={()=>navigate("/")} className='ml-4 bg-blue-600 text-lg font-medium text-white px-5 py-2 duration-200 hover:bg-blue-100 rounded-full'> Home </button>
                </div>
                <div  className='flex justify-end items-center gap-2'>
                    <button key='about' onClick={()=>navigate("/about-us")} className=' bg-blue-600 text-lg font-medium text-white px-5 py-2 duration-200 hover:bg-blue-100 rounded-full'> About Us </button>
                    <button key='contact' onClick={()=>navigate("/contact-us")} className=' bg-blue-600 text-lg font-medium text-white px-5 py-2 duration-200 hover:bg-blue-100 rounded-full'> Contact Us </button>
                </div>
               

            </nav>
        </Container>
       
    </header>
  )
}

export default Header