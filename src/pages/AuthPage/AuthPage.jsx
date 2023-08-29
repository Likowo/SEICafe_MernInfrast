import React from 'react'
import SignUpForm from '../../component/SignUpForm/SignUpForm';
import LogInForm from '../../component/LogInForm/LogInForm';
import { useState } from 'react';

const AuthPage = ({setUser}) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div>
        <h1>Auth Page</h1>
        <button
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
     {/* use tenary to make the boxes icebox item to display only one of the forms at a time */}
      {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm  setUser={setUser} />}
    </main>
  );
}

export default AuthPage