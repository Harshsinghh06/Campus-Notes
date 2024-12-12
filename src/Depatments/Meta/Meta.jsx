import React from 'react'
import { Container } from '../../components'

import { useNavigate } from 'react-router-dom'

const Meta = () => {
    const navigate = useNavigate();
    const navMeta = [
        {
            name : '1st Sem',
            nev : 'I',
            slug : "/I",
            
        },
        {
            name: "2nd Sem",
            nev : 'II',
            slug: "/II",
            
        },
        {
            name: "3rd Sem",
            nev : 'III',
            slug: "/III",
            
        },
        {
            name: "4th Sem",
            nev : 'IV',
            slug: "/IV",
            
        },
        {
            name: "5th Sem",
            nev : 'V',
            slug: "/V",
            
        },
        {
            name: "6th Sem",
            nev : 'VI',
            slug: "/VI",
            
        },
        {
            name: "7th Sem",
            nev : 'VII',
            slug: "/VII",
            
        },
        {
            name: "8th Sem",
            nev : 'VIII',
            slug: "/VIII",
            
        },

    ]
  return (
    <div  className='h-screen w-full mt-8'>
        <h1 className='mx-2 my-5 text-3xl text-ellipsis font-serif text-purple-900 rounded-xl w-full py-3 px-10 bg-amber-400'>Empowering Minds, One Semester at a Time. <br /> Navigate Your Academic Journey – Select Your Semester!</h1>
        <div className='py-3 shadow bg-red-900 rounded-xl bg-transparent border'>
        <Container>
            <nav className='flex justify-between'>
            <ul className='flex ml-auto flex-wrap w-full h-full overflow-auto'>
                    {navMeta.map((item)=>
                        
                         (
                            <li key ={item.name} className='w-1/2 h-1/3 p-2 '>
                                <button
                                className='flex px-6 py-2 w-full bg-lime-600 font-mono text-gray-950 text-xl duration-200 hover:bg-blue-100 rounded-full'
                                onClick={()=>navigate(item.slug)}>
                                    {item.name}
                                </button>
                            </li>
                         )
                        
                    )}

                    

                </ul>

            </nav>
        </Container>
       
    </div>
        
    </div>
  )
}

export default Meta