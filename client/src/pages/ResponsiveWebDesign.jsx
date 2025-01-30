import { handleContactClick } from '../store/contact-mail';

export const ResponsiveWebDesign = () => {
    return (
      <div className="service-page">
        <h1>Responsive Web Design</h1>
        <p>
          In today's multi-device world, it's crucial that your website looks great on all devices, from desktops and laptops to tablets and smartphones. Our responsive web design services ensure that your website adapts seamlessly to any screen size.
        </p>
        <h2>Benefits of Responsive Design:</h2>
        <ul>
          <li>Improved user experience across all devices</li>
          <li>Better search engine rankings</li>
          <li>Increased website traffic and conversions</li>
          <li>Cost-effective solution for maintaining a single website</li>
        </ul>
        <p>
          We use the latest techniques and technologies to create websites that are not only visually appealing but also function flawlessly on all devices.
        </p>
        <button onClick={ handleContactClick }>Contact Us</button>
      </div>
    );
  };
  
