import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from "./Auth";
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
    <div className='home' style={{width:"500px" }}>
      <div className="p-4 box mt-3 text-center">
        Hello! <br />
        Welcome <br />
        {user && user.email}
        <div className="d-grid gap-2">
        <button type="button" class="btn btn-primary btn-sm" variant="primary" style={{width:"400px"}} onClick={handleLogout}>
          Log out
        </button>
      </div>
      </div>
      
      </div>
      <div>
        <Giphy />
      </div>
    </>
  );
}

export default Homepage;