import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider,createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Logof from './components/logof-page/Logof.jsx'
import Welcome from './components/welcome-page/Welcome.jsx'
import Desktop from './components/Desktop/Desktop.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home/>}/>
      <Route path='/logof' element={<Logof/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/desktop' element={<Desktop/>}/>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
