import "../style/Contact.scss";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import contact from "../assets/contact.png";
import useTitle from "./Hooks/useTitle";

export default function Contact() {
  useTitle("BRIGHTNEXT | Contact")
  return (
    <>
      <main className="contact-main">
        <div className="contact-container">
          <p className="title">Contact us</p>
          <div className="name">
            <IoPerson className="icon" />
            <input type="text" placeholder="Name" className="input-box" />
          </div>
          <div className="email">
            <MdEmail className="icon" />
            <input type="email" placeholder="Email" className="input-box" />
          </div>
          <textarea name="" id="message-box" placeholder="Message"></textarea>
          <button className="send-btn">Send Message</button>
        </div>
        <div className="img-container">
          <img src={contact} alt="Contact-Image" className="image" />
        </div>
      </main>
    </>
  );
}
