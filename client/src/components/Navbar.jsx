// import { NavLink } from "react-router-dom"
// import "./Navbar.css"
// import { useAuth } from "../store/auth"

// export const Navbar = () =>{
//    const {isLoggedIn} = useAuth()
//     return <>
//       <header>
//         <div className="container-nav">
//             <div className="logo-brand">
//                 <NavLink className="navlink" to="/">CodeX</NavLink>
//             </div>

//             <nav>
//                 <ul>
//                     <li><NavLink className="navlink" to="/">Home</NavLink></li>
//                     <li><NavLink className="navlink" to="/about">About</NavLink></li>
//                     <li><NavLink className="navlink" to="/service">Service</NavLink></li>
//                     <li><NavLink className="navlink" to="/contact">Contact</NavLink></li>
//                     {isLoggedIn ? 
                    
//                     <li><NavLink className="navlink" to="/logout">Logout</NavLink></li>
//                     : <>
//                     <li><NavLink className="navlink" to="/register">Register</NavLink></li>
//                     <li><NavLink className="navlink" to="/login">Login</NavLink></li>
                    
//                     </>
//                 }
//                 </ul>
//             </nav>
//         </div>
//       </header>
//     </>
// }


import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <div className="container-nav">
          <div className="logo-brand">
            <NavLink className="navlink" to="/">
              CodeX
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/service">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/contact">
                  Contact
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink className="navlink" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                  <li className="nav-profile-icon">
                    <NavLink className="navlink profile-icon" to="/profile">
                      <FaUserCircle size={24} />
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink className="navlink" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navlink" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
