import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './pages/Herosection'
import Cardsection from './components/Cardsection'
import Footer from './components/Footer'
import Work from './components/Work'
import './App.css'
import NewSection from './components/NewSection'
import Signup from './pages/Signup'
import Products from './components/Products'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Notfound from './pages/Notfound'
import Api from './pages/Api'
import Signin from './pages/Signin'
import Formik from './pages/Formik'
import Form from './pages/Form'

const App = () => {
  let token = localStorage.token
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={token?<Herosection />:<Navigate to="/signin"/>} />
        <Route path='/my-about' element={<About />} />
        <Route path='/about' element={<Navigate to="/my-about" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/service' element={<Service />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/api' element={<Api />} />
        <Route path='/formik' element={<Formik />} />
        <Route path='/form' element={<Form />} />
        <Route />
      </Routes>

      {/* <Routes>
      <Route path='/' element={<Herosection/>}/>
      <Route path='/work-place' element={<Work/>}/>
      <Route path='/work' element={<Navigate to="/work-place" />}/>
      <Route path='/cardsection' element={<Cardsection/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/newsection' element={<NewSection/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes> */}
      {/* <Navbar/>
      <Herosection/>
      <Work/>
      <Cardsection/>
      <Footer/>
      <NewSection/>
      <Signup/>
      <Products/> */}
    </>
  )
}

export default App