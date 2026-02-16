import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/result/:categoryId" element={<Result />} />
      </Routes>
    </MainLayout>
  )
}

export default App
