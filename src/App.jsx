import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';


function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/about" element={<AboutUs />} ></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
