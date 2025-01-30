import { handleContactClick } from '../store/contact-mail';

export const ECommerceDevelopment = () => {
    return (
      <div className="service-page">
        <h1>E-commerce Website Development</h1>
        <p>
          We can help you build a powerful and user-friendly e-commerce website that will drive sales and grow your business. Our e-commerce solutions include features such as:
        </p>
        <ul>
          <li>Product catalog management</li>
          <li>Shopping cart and checkout</li>
          <li>Payment gateway integration</li>
          <li>Order tracking and fulfillment</li>
          <li>Inventory management</li>
          <li>Marketing and promotions</li>
        </ul>
        <p>
          We can also help you with e-commerce marketing and optimization to ensure that your online store is successful.
        </p>
        <button onClick={ handleContactClick }>Contact Us</button>
      </div>
    );
  };
  
