import { useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

const defaultContactFormData = {
    username:"",
    email:"",
    message:""
}

export const Contact = () => {
    const [contact,setContact] = useState(defaultContactFormData)

    const [userData , setUserData] = useState(true)

    const {user} = useAuth()

    if(userData && user){
  
        setContact({
            username: user.username,
            email : user.email,
            message : "",
        })

        setUserData(false)
    }

    const handleInput = (e)=>{
        const name = e.target.name 
        const value = e.target.value

        setContact({
            ...contact,
            [name]:value 
        })

    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
         const response = await fetch("https://code-x-sigma.vercel.app/api/form/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(contact)
         })  

         if(response.ok)
         {
            setContact((prevState) => ({
                ...prevState,
                message: "",
              }));
              
            const data = await response.json();
            console.log(data)
            toast.success("Message sent successfully")
         }

        } catch (error) {
            return res.status(500).json({message:"Message not delivered"})
        }
    }

    return <>
    <section className="section-contact">
        <div className="contact-content container">
            <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
            <div className="contact-image">
                <img src="/images/support.png" alt="We are always ready to help" />
            </div>

            {/* contact form content actual */}
            <section className="section-form">
                <form onClick={handleSubmit} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username"  value={contact.username} onChange={handleInput} autoComplete="off" required/>
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" value={contact.email} onChange={handleInput} autoComplete="off" required/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" value={contact.message} onChange={handleInput} autoComplete="off" required></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </div>
        <section className="mb-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.0321774751137!2d85.38963227498985!3d23.387053178919963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3f73caf059b%3A0x35c1634fa356ac73!2sIIIT%20RANCHI%20(KHELGAON%20CAMPUS)!5e0!3m2!1sen!2sin!4v1737404560444!5m2!1sen!2sin"
            width="100%" 
            height="450" 
            allowFullScreen 
            loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>  
        </section>


    </section>
    </>
}
