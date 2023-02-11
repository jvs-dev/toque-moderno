import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import Starter from '@/pages/Starter'
import { Routes as Router, Route } from 'react-router-dom'

export const Routes = () => {

  return <Router>
    <Route path='/' element={<Starter />} />
    <Route path='/login' element={<Login />} />
    <Route path='/home' element={<Home />} />
  </Router>
}