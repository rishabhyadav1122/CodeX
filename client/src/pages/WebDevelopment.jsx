import { handleContactClick } from '../store/contact-mail';
 
 export const WebDevelopment = () => {
    return (
        <div className="service-page">
            <h1>Web Development</h1>
            <p>
                Our web development services are tailored to meet your needs, offering custom-built websites 
                and web applications designed to be efficient, scalable, and user-friendly.
            </p>
            
            <h2>Features:</h2>
            <ul>
                <li>Custom designs for unique branding</li>
                <li>SEO-optimized websites for better search engine visibility</li>
                <li>Secure and scalable solutions</li>
            </ul>

            <p>
                Whether you are a small business or a large enterprise, we ensure your web presence 
                is as robust as your business. We specialize in delivering websites that are both 
                aesthetically pleasing and functionally rich.
            </p>

            <button onClick={ handleContactClick }>Contact Us</button>
        </div>
    );
};


