import { handleContactClick } from '../store/contact-mail';

export const WordPressDevelopment = () => {
    return (
      <div className="service-page">
        <h1>WordPress Website Development</h1>
        <p>
          WordPress is a popular content management system (CMS) that allows you to easily create and manage your website. We are experts in WordPress development and can create a custom website that meets your specific needs.
        </p>
        <h2>Benefits of WordPress:</h2>
        <ul>
          <li>Easy to use and manage</li>
          <li>SEO-friendly</li>
          <li>Scalable and secure</li>
          <li>Wide range of plugins and themes available</li>
        </ul>
        <p>
          Whether you need a simple blog or a complex e-commerce website, WordPress can be a great solution. We can help you choose the right theme and plugins, customize your website to your liking, and ensure that it is properly optimized for search engines.
        </p>
        <button onClick={ handleContactClick }>Contact Us</button>
      </div>
    );
  };
  
