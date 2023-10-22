import './App.css';
import { Routes, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import CompetitionDetailsPage from './pages/CompetitionDetails/CompetitionDetailsPage';
import { useEffect, useState } from 'react';
import UserContext from './contexts/UserContext';
import * as userService from './services/userService';
import jwtDecode from 'jwt-decode';
import LoginPage from './pages/Login/LoginPage';
import Logout from './components/Logout/Logout';
import * as cookieService from './services/cookieService'

function App() {
  const [user, setUser] = useState({});

  const token = cookieService.getCookie('Auth-Token');

  useEffect(() => {
    if(token !== '')
    setUser(jwtDecode(token));
  }, [])

  const onLogin = async (username, password) => {
    var data = await userService.login(username, password);

    if(data.success) {
      cookieService.setCookie('Auth-Token', data.token, 3);
      const userData = jwtDecode(data.token);
      setUser(userData);
    }
  }

  const onLogout = async () => {
      cookieService.removeCookie('Auth-Token');
      setUser({});
  }

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/competitions/:id' element={<CompetitionDetailsPage />} />
          <Route path='/login' element={<LoginPage onLogin = {onLogin} />} />
          <Route path='/logout' element={<Logout onLogout = {onLogout} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
