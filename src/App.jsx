import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Main from './pages/Main'
import Inquiry from './pages/Inquiry'
import InquiryCreate from './pages/InquiryCreate'
import MyPage from './pages/MyPage'
import InquiryDetail from './pages/InquiryDetail'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/inquiry/create" element={<InquiryCreate />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/inquiry/:id" element={<InquiryDetail />} />
    </Routes>
  )
}

export default App
