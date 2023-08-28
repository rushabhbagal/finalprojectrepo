
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const user_id = window.sessionStorage.getItem("user_id");
  const userRole = sessionStorage.getItem('role'); // Get the user's role from local storage
  var login = window.sessionStorage.getItem("isUserLoggedIn")=== "true"; 

  useEffect(() => {
    showButton();
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            E-MED
            <i className="fas fa-hospital"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contacts' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          {login ? (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to={`/ViewProfile/${user_id}`} className="dropdown-item">
                  Profile
                </Link>
                {userRole === 'DOCTOR' && (
                  <>
                    <Link to={`/appointmemts/${user_id}`} className="dropdown-item">
                    Appointments
                    </Link>
                    <Link to="/Prescription" className="dropdown-item">
                      Prescription
                    </Link>
                    <Link to="/AddReview" className="dropdown-item">
                      Review
                    </Link>
                  </>
                )}
                {userRole === 'USER' && (
                  <>
                    <Link to={`/appointmemts/p/${user_id}`} className="dropdown-item">
                      Appointments
                    </Link>
                    <Link to="/GetPrescription" className="dropdown-item">
                      Prescription
                    </Link>
                    <Link to="/AddReview" className="dropdown-item">
                      Review
                    </Link>
                  </>
                )}
                <Link to="/SignOut" className="dropdown-item">
                  <button className="btn btn-outline-primary">Logout</button>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            ) : (
              <Button buttonStyle='btn--outline' destination='/SignIn'>SIGN IN</Button>
              )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;














// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);
//   const [button, setButton] = useState(true);

//   const [loggedIn, setLoggedIn] = useState(false); // Track user's login status

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   // Simulate a user login state change
//   const handleLogin = () => {
//     setLoggedIn(!loggedIn);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           E-MED
//           <i className="fas fa-hospital"></i>
//         </Link>
//         <div className={loggedIn ? 'menu-icon' : 'menu-icon-hidden'} onClick={handleClick}>
//           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>

//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'>
//             <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
//               About
//             </Link>
//           </li>

//           <li className='nav-item'>
//             <Link to='/Contacts' className='nav-links' onClick={closeMobileMenu}>
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             {loggedIn ? (
//               <Link to="/" className="nav-links-mobile" onClick={handleLogin}>
//                 Logout
//               </Link>
//             ) : (
//               <Link to='/SignIn' className='nav-links-mobile' onClick={closeMobileMenu}>
//                 Sign IN
//               </Link>
//             )}
//           </li>
//           {/* <li>
//             <Link to='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu}>
//               Sign Up
//             </Link>
//           </li> */}
//         </ul>
//         {loggedIn ? (
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//         ) : (
//           button && <Button buttonStyle='btn--outline' destination='/SignIn'>SIGN IN</Button>
//         )}
//         {/* {button && <Button buttonStyle='btn--outline' destination='/SignUp'>SIGN Up</Button>} */}
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
