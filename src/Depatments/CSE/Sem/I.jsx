import React from 'react'

import { Container } from '../../../components';

import { useNavigate } from 'react-router-dom'

const I = () => {
    const navigate = useNavigate();
    const navCir1 = [
        {
            name : 'Energy and Environmental Engineering',
            nev : 'Eee',
            slug : "/Eee",
            
        },
        {
            name: "Linear Algebra and Calculus",
            nev : 'Lac',
            slug: "/Lac",
            
        },
        {
            name: "Physics",
            nev : 'Phy',
            slug: "/Phy",
            
        },
        {
            name: "Introduction to Computer Programming",
            nev : 'Icp',
            slug: "/Icp",
            
        },
        {
            name: "Basics of Mechanical Engineering",
            nev : 'Bmm',
            slug: "/Bmm",
            
        },
        {
            name: "Engineering Practice",
            nev : 'Ep',
            slug: "/Ep",
            
        },
        {
            name: "Basics of Civil Engineering",
            nev : 'Bce',
            slug: "/Bce",
            
        },
       

    ]
    return (
        <div  className='h-screen w-full mt-8'>
            <h1 className='mx-2 my-5 text-3xl text-ellipsis font-serif text-purple-900 rounded-xl w-full py-3 px-10 bg-amber-400'>Please choose your desired subject</h1>
            <div className='py-3 shadow bg-red-900 rounded-xl bg-transparent border'>
            <Container>
                <nav className='flex justify-between'>
                <ul className='flex ml-auto flex-wrap w-full h-full overflow-auto'>
                        {navCir1.map((item)=>
                            
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

export default I