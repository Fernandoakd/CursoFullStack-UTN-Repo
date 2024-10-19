import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages'
import "./styles.css"




function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>

    </>
  )
}

export default App
