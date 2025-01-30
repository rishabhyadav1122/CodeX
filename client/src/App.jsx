import {BrowserRouter , Routes , Route, Navigate} from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Service } from "./pages/Service"
import { Contact } from "./pages/Contact"
import { Navbar } from "./components/Navbar"
import { Error } from "./pages/Error"
import { Footer } from "./components/Footer/Footer"
import { Logout } from "./pages/Logout"
import {WebDevelopment} from "./pages/WebDevelopment";
import {UIUXDesign} from "./pages/UIUXDesign";
import {WordPressDevelopment} from "./pages/WordPressDevelopment";
import {MobileAppDevelopment} from "./pages/MobileAppDevelopment";
import {ResponsiveWebDesign} from "./pages/ResponsiveWebDesign";
import {ECommerceDevelopment} from "./pages/ECommerceDevelopment";
import { toast } from "react-toastify"
import { VerifyEmail } from "./pages/VerifyEmail"
import { Profile } from "./pages/Profile"

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token"); // Replace with your auth logic
  if (!isLoggedIn) {
    toast.error("Please login or register first.");
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  return ( 
  <>
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      <Route path="/service" element={<PrivateRoute><Service /></PrivateRoute>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/verifyEmail" element={<VerifyEmail/>} />
      <Route path="/services/web-development" element={<PrivateRoute><WebDevelopment /></PrivateRoute>} />
      <Route path="/services/ui-ux-design" element={<PrivateRoute><UIUXDesign /></PrivateRoute>} />
      <Route path="/services/wordpress-development" element={<PrivateRoute><WordPressDevelopment /></PrivateRoute>} />
      <Route path="/services/mobile-app-development" element={<PrivateRoute><MobileAppDevelopment /></PrivateRoute>} />
      <Route path="/services/responsive-web-design" element={<PrivateRoute><ResponsiveWebDesign /></PrivateRoute>} />
      <Route path="/services/ecommerce-development" element={<PrivateRoute><ECommerceDevelopment /></PrivateRoute>} />
      <Route path="*" element={<PrivateRoute><Error /></PrivateRoute>} />
    </Routes>
    <Footer/>
   </BrowserRouter>
  </>
  )
}

export default App;

<Route path="/about" element={<PrivateRoute><About /></PrivateRoute>}/>