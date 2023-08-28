import React, { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session storage
    window.sessionStorage.clear();

    // Redirect to the SignIn page after logging out
    navigate("/");
 
    window.location.reload() ;
  }, []);

  return (
    <div>
      {/* You can optionally display a message or loading indicator here */}
      Logging out...
    </div>
  );
}

export default SignOut;
