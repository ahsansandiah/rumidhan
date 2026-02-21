import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Mission from './pages/Mission'
import Calendar from './pages/Calendar'
import Session from './pages/Session'
import Settings from './pages/Settings'
import HijaiyahIntro from './pages/HijaiyahIntro'
import Materi from './pages/Materi'
import MateriEnglish from './pages/MateriEnglish'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/result/:categoryId" element={<Result />} />
        <Route path="/mission/:dayNumber" element={<Mission />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/session/:dayNumber/:sessionType" element={<Session />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/materi/english" element={<MateriEnglish />} />
        <Route path="/hijaiyah-intro" element={<HijaiyahIntro />} />
      </Routes>
    </MainLayout>
  )
}

export default App
