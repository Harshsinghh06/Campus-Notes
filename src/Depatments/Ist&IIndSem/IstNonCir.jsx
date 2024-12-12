import React from 'react'

import { Container } from '../../components'

import { useNavigate } from 'react-router-dom'

const IstNonCir = () => {
    const navigate = useNavigate();
    const navNonCir1 = [
        {
            name : 'English',
            nev : 'Eng',
            slug : "/Eng",
            
        },
        {
            name: "Matrices and Calculus",
            nev : 'Mat',
            slug: "/Mat",
            
        },
        {
            name: "Chemistry",
            nev : 'Chem',
            slug: "/Chem",
            
        },
        {
            name: "Branch Specific Course",
            nev : 'Bsc',
            slug: "/Bsc",
            
        },
        {
            name: "Basics of Electrical and Electronics Engineering",
            nev : 'Beee',
            slug: "/Beee",
            
        },
        {
            name: "Engineering Graphics",
            nev : 'Eg',
            slug: "/Eg",
            
        },
       

    ]
    return (
        <div  className='h-screen w-full mt-8'>
            <h1 className='mx-2 my-5 text-3xl text-ellipsis font-serif text-purple-900 rounded-xl w-full py-3 px-10 bg-amber-400'>Please choose your desired subject</h1>
            <div className='py-3 shadow bg-red-900 rounded-xl bg-transparent border'>
            <Container>
                <nav className='flex justify-between'>
                <ul className='flex ml-auto flex-wrap w-full h-full overflow-auto'>
                        {navNonCir1.map((item)=>
                            
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

export default IstNonCir