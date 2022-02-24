import React from 'react';
import Routers from "./Components/Routers/Routers";
import ScrollToTop from "react-scroll-to-top";
import AuthProvider from './Components/LoginSignUpPage/AuthContext';


function App() {
  return (
    //* Auth Context Provider
    <AuthProvider>
      <ScrollToTop smooth />
      <Routers />
    </AuthProvider>
  );
}


export default App;
