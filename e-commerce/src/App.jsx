import React from 'react'
import Navigation from './Component.jsx/Navigation'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Shop from './Component.jsx/Shop'
import Home from './Component.jsx/Home'
import About from './Component.jsx/About'
import Contact from './Component.jsx/Contact'


function App() 
{

  return (
    <>
      <RouterProvider router=
      {
        createBrowserRouter([
          {
            path:'/',
            element:<><Navigation/><Home/></>
          },
          {
            path:'/shop',
            element:<><Shop/></>
          },
          {
            path:'/about',
            element:<><About/></>
          },
          {
            path:'/contact',
            element:<><Contact/></>
          },
        ])
      }/>
    </>
  )
}

export default App

