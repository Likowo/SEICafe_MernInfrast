//imports
import {useState} from 'react';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { getUser } from "./utilities/users-service";
//pages
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage  from './pages/OrderHistoryPage/OrderHistoryPage'
//components
import NavBar from './component/NavBar/NavBar';
//css
import './App.css';



function App() {
//array destructuring
const [ user, setUser] = useState(getUser());

  return (
    <main className="App">
     {
      user?
      <>
      <NavBar user={user}  setUser={setUser} />
      <Routes>
         <Route path="/orders/new" element={<NewOrderPage setUser={setUser}  user={user}  />} />
         <Route path="/orders" element={<OrderHistoryPage setUser={setUser} user={user} />} />         
         {/* <Route path="/auth" element={<AuthPage />} />          */}
      </Routes>
      </>
      :
      <AuthPage setUser={setUser} />
     }
    </main>
  );
}

export default App;
