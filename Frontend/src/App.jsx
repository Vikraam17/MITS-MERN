import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="vikraam"/>}/>
        <Route path='/about' element={<About name="Vikraam" age={25} dept="CS&DS"/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>  
  )
}
export default App