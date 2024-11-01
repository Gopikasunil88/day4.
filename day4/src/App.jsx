import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import UserTable from './components/UserTable'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Listmap from './components/Listmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
   
     <Routes> 
     
        <Route path='/b' element={<Blog/>}/>
        <Route path='/u' element={<UserTable/>}/>
        <Route path='/l' element={<Listmap/>}/>
        
     </Routes> 

    </>
  )
}

export default App
