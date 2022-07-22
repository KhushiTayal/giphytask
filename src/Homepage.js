import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from "./Auth";
import {url1, url2} from './config'
import Axios from 'axios';

import Spinner from './components/Spinner'
import Giffs from './components/Giffs'
import Footer from './components/Footer'
import GiffSelected from './components/GiffSelected'
import Header from './components/Header'
import Giphy from './Giphy';

function Homepage  ()  {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <button variant="primary" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <div>
        <Giphy />
      </div>
    </>
  );
}

export default Homepage;