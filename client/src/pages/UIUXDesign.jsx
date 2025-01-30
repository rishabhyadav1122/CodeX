import { handleContactClick } from '../store/contact-mail';

export const UIUXDesign = () => {
    return (
      <div className="service-page">
        <h1>UI/UX Design Services</h1>
        <p>
          Our UI/UX design services focus on creating user-centered interfaces that are both beautiful and functional. We believe that a well-designed user experience is essential for any successful website or mobile app.
        </p>
        <h2>Our Process:</h2>
        <ul>
          <li>User research and analysis</li>
          <li>Information architecture and sitemap creation</li>
          <li>Wireframing and prototyping</li>
          <li>Visual design and branding</li>
          <li>Usability testing and refinement</li>
        </ul>
        <p>
          We work closely with our clients to understand their target audience and business goals. This allows us to create user interfaces that are not only aesthetically pleasing but also intuitive and easy to use.
        </p>
        <button onClick={ handleContactClick }>Contact Us</button>
      </div>
    );
  };
  
