import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/index'
import Jobs from './components/Jobs/index'
import DetailedJobs from './components/DetailedJobs/index'
import Login from './components/Login/index'
import NotFound from './components/NotFount/index'
import ProtectedRoute from './components/ProtectedRoute'
import { Component } from 'react'

const App =()=>{

  return(
    <Routes>
      <Route path='/' element={<ProtectedRoute Component={Home}/>}></Route>
      <Route path='/jobs' element={<ProtectedRoute Component={Jobs}/>}></Route>
      <Route path='/jobs/:id' element={<ProtectedRoute Component={DetailedJobs}/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App;