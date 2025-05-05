import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          {/* <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> */}
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
