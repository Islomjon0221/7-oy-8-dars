import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Series from './pages/Series'
import Register from "./pages/Register"
import Movies from "./pages/Movies"
import Bookmarks from "./pages/Bookmarks"
import About from "./pages/About"
import Error from "./pages/Error"
import Home from "./pages/Home"
import MainLayout from './pages/layout/MainLayout'
import { useEffect, useState } from 'react'

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register" && location.pathname != "") {
      navigate("/login")
    }
  }, [])


  function ProtectedRoute({ children, redirectTo = "/login", isAuthentication }) {
    if (!isAuthentication) {
      navigate(redirectTo)
    }

    return children
  }
  return (
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>

      <Route path='/' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Home></Home>
          </MainLayout>
        </ProtectedRoute>
      }></Route>

      <Route path='/series' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Series></Series>
          </MainLayout>
        </ProtectedRoute>
      }></Route>

      <Route path='/movies' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Movies></Movies>
          </MainLayout>
        </ProtectedRoute>
      }></Route>

      <Route path='/bookmarks' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Bookmarks></Bookmarks>
          </MainLayout>

        </ProtectedRoute>
      }></Route>

      <Route path='/movies/about/:id' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <About></About>
          </MainLayout>

        </ProtectedRoute>
      }></Route>
    </Routes>
  )
}

export default App
