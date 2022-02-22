import React, { createContext, useState } from 'react';
import Routers from "./Components/Routers/Routers";
import ScrollToTop from "react-scroll-to-top";


//* Context API's
export const UserLoginContext = createContext();


function App() {
  //* useState 
  const [isLoggedIn, SetIsLoggedIn] = useState({
    loginStateChange: (data) => {
      SetIsLoggedIn(data)
      // console.log(data);
    },
    // setLogOut : (data) => {
    //   SetIsLoggedIn(data)
    //   console.log("clicked")
    // }
  })
  console.log(isLoggedIn);

  
  return (
    <UserLoginContext.Provider value={isLoggedIn}>
      <ScrollToTop smooth />
      <Routers />
    </UserLoginContext.Provider>
  );
}

export default App;
