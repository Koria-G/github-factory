import Login from './pages/Login'
import Layout from './pages/Layout'
import Laylist from './pages/Laylist'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">首页</Link>
        <Link to='login'>登录</Link>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='login' element={<Login />} />
          <Route path='details' element={<Laylist />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
