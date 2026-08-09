import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import CompleteProfile from './pages/CompleteProfile';
import Flashback from './pages/Flashback';
import Settings from './pages/Settings';
import Network from './pages/Network';
import Chat from './pages/Chat';
import UserProfile from './pages/UserProfile';
import Feed from './pages/Feed';
import Reunions from './pages/Reunions';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';
import Donation from './pages/Donation';
import Internships from './pages/Internships';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/complete-profile"
              element={
                <PrivateRoute>
                  <CompleteProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/flashback"
              element={
                <PrivateRoute>
                  <Flashback />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/network"
              element={
                <PrivateRoute>
                  <Network />
                </PrivateRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              }
            />
            <Route
              path="/feed"
              element={
                <PrivateRoute>
                  <Feed />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/:userId"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/reunions"
              element={
                <PrivateRoute>
                  <Reunions />
                </PrivateRoute>
              }
            />
            <Route
              path="/gallery"
              element={
                <PrivateRoute>
                  <Gallery />
                </PrivateRoute>
              }
            />
            <Route
              path="/feedback"
              element={
                <PrivateRoute>
                  <Feedback />
                </PrivateRoute>
              }
            />
            <Route
              path="/donation"
              element={
                <PrivateRoute>
                  <Donation />
                </PrivateRoute>
              }
            />
            <Route
              path="/internships"
              element={
                <PrivateRoute>
                  <Internships />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/flashback" replace />} />
            <Route path="*" element={<Navigate to="/flashback" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
