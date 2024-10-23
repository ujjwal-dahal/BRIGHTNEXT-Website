import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/services/img1.png";
import image2 from "../assets/services/img2.png";
import image3 from "../assets/services/img3.png";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import useTitle from "./Hooks/useTitle";
import "../style/Services.scss"

const servicesData = [
  {
    image: image1,
    alt: "Web Development",
    title: "Web Development",
    backgroundColor: "#fe4ab8"
  },
  {
    image: image2,
    alt: "Mobile App Development",
    title: "Mobile App Development",
    backgroundColor: "#0026ff"
  },
  {
    image: image3,
    alt: "UI UX Design",
    title: "UI UX Design",
    backgroundColor: "#fd3e58"
  }
];

export default function Services() {
  useTitle("BRIGHTNEXT | Services");

  return (
    <div className="services" style={{ height: "80%", width: "100%" }}>
      <Carousel 
        infiniteLoop
        autoPlay
        interval={2000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        {servicesData.map((service, index) => (
          <div key={index}>
            <img src={service.image} alt={service.alt} />
            <p className="legend" style={{ backgroundColor: service.backgroundColor }}>
              {service.title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
