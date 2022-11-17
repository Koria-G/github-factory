import Login from './pages/Login'
import GeekLayout from './pages/Layout'
import Laylist from './pages/Laylist'
import { AuthRoute } from './components/AuthRoute'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/">首页</Link>
        <Link to='login'>登录</Link> */}
        <Routes>
          {/* 只有登录成功才能进入layout界面 */}
          <Route path='/layout' element={
            <GeekLayout />
          } />
          <Route path='/' element={<Login />} index />
          <Route path='details' element={<Laylist />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
