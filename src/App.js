import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './pages/AuthFiles/loginForm';
import RegistrationForm from './pages/AuthFiles/reg';
import { auth } from './firebase.js';
import { loginsuccess} from './reduxtoolkit/feature/authSlice';
import AdminPage from './pages/Home';
import HomePage from './pages/Homepage';
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginsuccess({
            email: user.email,
            password: null,
          })
        );
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route
            path="/login"
            element={user.isLoggedIn ? <Navigate to="/youtube" /> : <LoginForm />}
          />
          <Route
            path="/signup"
            element={user.isLoggedIn ? <LoginForm /> : <RegistrationForm />}
          />
          <Route
            path="/youtube"
            element={<AdminPage /> }
          />
          <Route
            path="*"
            element={<h1>404 Error</h1>}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
