import { Route, Routes } from 'react-router-dom'
import { MoviePage } from '../../pages/moviePage'
import { LoginPage } from '../../pages/LoginPage'
import { RegisterPage } from '../../pages/RegisterPage'


export const RouterMain = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route path="/moviePage/:id" element={<MoviePage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/registerPage" element={<RegisterPage />} />
        </Routes>
    </div>
  )
}
