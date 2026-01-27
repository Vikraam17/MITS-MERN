import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Signup from './Auth/Signup'
import UseRef from './Hooks/UseRef'
const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="vikraam"/>}/>
        <Route path='/about' element={<About name="Vikraam" age={25} dept="CS&DS"/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* Hooks */}
        <Route path='/hook' element={<Hook/>}>
          <Route path='useState' element={<UseState/>}/>
          <Route path='useEffect' element={<UseEffect/>}/>
          <Route path='useEffectApi' element={<UseEffectApi/>}/>
          <Route path='useRef' element={<UseRef/>}/>
        </Route>
        
      </Routes>
    </>  
  )
}
export default App