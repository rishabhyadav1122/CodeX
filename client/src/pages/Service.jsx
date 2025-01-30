import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

export const Service = () => {
    const { services } = useAuth();
    const navigate = useNavigate();

    const handleCardClick = (service) => {
        const paths = {
            "Web Development": "/services/web-development",
            "UI/UX Design Services": "/services/ui-ux-design",
            "WordPress Website Development": "/services/wordpress-development",
            "Mobile App Development": "/services/mobile-app-development",
            "Responsive Web Design": "/services/responsive-web-design",
            "E-commerce Website Development": "/services/ecommerce-development",
        };

        const path = paths[service];
        if (path) {
            navigate(path);
        } else {
            console.error("No path defined for this service");
        }
    };

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-cols">
                {services.map((curElem, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => handleCardClick(curElem.service)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="card-img">
                            <img
                                src="/images/design.png"
                                alt="designer"
                                width="200"
                            />
                        </div>
                        <div className="card-details">
                            <div className="grid grid-two-cols">
                                <p>{curElem.provider}</p>
                                <p>{curElem.price}</p>
                            </div>
                            <h2>{curElem.service}</h2>
                            <p>{curElem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
