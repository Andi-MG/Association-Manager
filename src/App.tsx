import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./components/login/Login.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import AnnouncementBoard from "./components/announcementBoard/AnnouncementBoard.tsx";


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<AnnouncementBoard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
  )
}

export default App;
