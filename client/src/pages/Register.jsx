import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

const URL = "http://localhost:5000/api/auth/register"


export const Register = () =>{

  const [user , setUser] = useState(
      {
          username:"",
          email:"",
          phone:"",
          password:"",
      }
  )



  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth()

  const handleInput = (e) =>{
      console.log(e)
      let name = e.target.name
      let value = e.target.value

      setUser({
          ...user ,
          [name] :value,
      })
  }

  //Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const res_data = await response.json();
      console.log("res from server:", res_data);
  
      if (response.ok) {
        // Registration is successful but requires email verification
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
  
        toast.success("Registration successful. Please verify your email.");
        navigate(`/verifyEmail?email=${user.email}`); // Redirect to a verification instruction page if necessary
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };
  
  return <>
  <section>
      <main>
          <div className="section-registration">
              <div className="container grid grid-two-cols">
                  <div className="registration-image">
                      <img src="/images/register.png" alt="Regitration Photo" width="500" height="500" />
                  </div>
                  <div className="registration-form">
                      <h1 className="main-heading mb-3">Registration Form</h1>
                      <br />
                      <form onSubmit={handleSubmit}>
                          <div className="field-container">
                              <label htmlFor="username">username</label>
                              <input type="text" name="username"   placeholder="username" id="username" required autoComplete="off" value={user.username} onChange={handleInput}/>
                          </div>
                          <div className="field-container">
                              <label htmlFor="email">email</label>
                              <input type="email" name="email"   placeholder="Enter your Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
                          </div>
                          <div className="field-container">
                              <label htmlFor="phone">phone</label>
                              <input type="number" name="phone"   placeholder="Enter your phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput}/>
                          </div>
                          <div className="field-container">
                              <label htmlFor="password">password</label>
                              <input type="password" name="password"   placeholder="Enter your password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                          </div>
                          <br />
                          <button type="submit" className="btn btn-submit">Register Now</button>
                      </form>
                  </div>
              </div>
          </div>
      </main>
  </section>
  </>
}