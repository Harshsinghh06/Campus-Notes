import React from 'react'
import { Link } from 'react-router-dom'
import Container from './container/Container'

import { useNavigate } from 'react-router-dom'
import Welcome from './Welcome'

const Home = () => {
    const navigate = useNavigate();
    const navItems = [
        {
            name : 'Computer Science and Engineering',
            nev : 'Cse',
            slug : "/Cse",
            
        },
        {
            name: "Electronics and Electrical Engineering",
            nev : "Ece",
            slug: "/Ece",
            
        },
        {
            name: "Electrical and Electronics Engineering",
            nev : "Eee",
            slug: "/Eee",
            
        },
        {
            name: "Instrumentation and Control Engineering",
            nev : "Ice",
            slug: "/Ice",
            
        },
        {
            name: "Mechanical Engineering",
            nev : "Mech",
            slug: "/Mech",
            
        },
        {
            name: "Civil Engineering",
            nev : "Civil",
            slug: "/Civil",
            
        },
        {
            name: "Production Engineering",
            nev : "Prod",
            slug: "/Prod",
            
        },
        {
            name: "Chemical Engineering",
            nev : "Chem",
            slug: "/Chem",
            
        },
        {
            name: "Metallurgical and Materials Engineering",
            nev : 'Meta',
            slug: "/Meta",
            
        },
      

    ]
  return (
    <div className='h-screen w-full mt-8'>
        
        <div className='py-3 shadow bg-red-900 rounded-xl bg-transparent border'>
        <Container>
            <nav className='flex justify-between'>
            <ul className='flex ml-auto flex-wrap h-full overflow-auto'>
                    {navItems.map((item)=>
                        
                         (
                            <li key ={item.name} className='w-1/2 h-1/3 p-2 '>
                                <button
                                className='flex px-6 py-2 w-full bg-lime-600 font-mono text-gray-950 text-xl duration-200 hover:bg-blue-100 rounded-full'
                                onClick={()=>navigate(item.slug)}
                                type="button">
                                    {item.name}
                                </button>
                            </li>
                         )
                        
                    )}

                    

                </ul>

            </nav>
        </Container>
       
    </div>


    <div className='py-3'>

      <Welcome />
    </div>
    </div>
  )
}

export default Home
