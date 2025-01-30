import { handleContactClick } from '../store/contact-mail'; // Assuming you save this function in a separate file

export const MobileAppDevelopment = () => {
    return (
      <div className="service-page">
        <h1>Mobile App Development</h1>
        <p>
          In today's mobile-first world, having a well-designed mobile app is essential for any business. We can create custom mobile apps for iOS and Android devices that will help you reach a wider audience and engage with your customers on a deeper level.
        </p>
        <h2>Our Mobile App Development Process:</h2>
        <ul>
          <li>Concept and strategy development</li>
          <li>User interface and user experience design</li>
          <li>App development and testing</li>
          <li>App store submission and launch</li>
        </ul>
        <p>
          We use the latest technologies and frameworks to develop high-performance mobile apps that are both visually appealing and user-friendly. We also have a team of experienced app developers who can ensure that your app is submitted and launched smoothly.
        </p>
        <button onClick={ handleContactClick }>Contact Us</button>
      </div>
    );
  };
  
