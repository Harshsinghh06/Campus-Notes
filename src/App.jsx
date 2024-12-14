
import './App.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './components/Home'
import AboutUs from './components/About Us/AboutUs'
import Chem from './Depatments/Chem/Chem'
import Mech from './Depatments/Mech/Mech'
import Civil from './Depatments/Civil/Civil'
import  Prod  from './Depatments/Prod/Prod'
import  Meta  from './Depatments/Meta/Meta'
import  Cse  from './Depatments/CSE/Cse'
import Ece from './Depatments/ECE/ECE'
import { Ice } from './Depatments/ICE'
import Eee from './Depatments/EEE/EEE'

import IstCir from './Depatments/Ist&IIndSem/IstCir'
import IIndCir from './Depatments/Ist&IIndSem/IIndCir'
import IstNonCir from './Depatments/Ist&IIndSem/IstNonCir'
import IInsNonCir from './Depatments/Ist&IIndSem/IInsNonCir'
import DeptLayOut from './Layout/DeptLayOut'









function App() {


  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'about-us',
          element: <AboutUs />,
        },
        {
          path: 'Chem',
          element: <Chem />,
          
        },
        {
          path: 'Prod',
          element: <Prod />,
          children: [
            { path: ':sem', element: <IstNonCir /> },
            { path: 'II', element: <IInsNonCir /> },
          ],
         
        },
        {
          path: 'Meta',
          element: <Meta />,
         
        },
        {
          path: 'Civil',
          element: <Civil />,
         
        },
        {
          path: 'Mech',
          element: <Mech />,
          
        },
        {
          path: 'Cse',
          element: <DeptLayOut />,
          children: [
            {path : '', element : <Cse/>},
            { path: 'I', element: <IstCir /> },
            { path: 'II', element: <IIndCir /> },
            // { path: 'III', element: <IIISem /> },
            // { path: 'IV', element: <IVSem /> },
            // { path: 'V', element: <VSem /> },
            // ...So More till 8th sem

          ],
        },
        {
          path: 'Ece',
          element: <Ece />,
        },
        {
          path: 'Eee',
          element: <Eee />,
        },
        {
          path: 'Ice',
          element: <Ice />,
        },
        {
          path : '*',
          element : <div className='flex justify-center items-center rounded-md h-96'> <p className='text-5xl h-min w-full p-5 text-red-900 bg-orange-200 '>Error 404! Page Not Found </p> </div>
        }
      ],
    },
  ]);
  

  



 

  return(

    <div>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
