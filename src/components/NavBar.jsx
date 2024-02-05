import React from 'react';

import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
      console.log("here")
      
      // localStorage.removeItem('userEmail');
      // localStorage.removeItem('userPassword');
      navigate('/');
  };

  return (

    <nav className="flex items-center justify-between p-2 bg-gray-800 text-white z-10 sticky  border-b border-gray-light px-8 ">
      
        <div className="flex items-center h-16 w-20 p-2 bg-purple rounded-lg text-white uppercase">
          <span className="text-sm">Chatbot</span>
        </div>

        <button className="bg-purple text-white py-2 px-8 rounded-lg"  onClick={handleLogout}>
          Log out
        </button>
    </nav>

  );
};

export default NavBar;
