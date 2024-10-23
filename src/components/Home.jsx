import "../style/Home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import useTitle from "./Hooks/useTitle";

export default function Home() {
  const [typewriterText] = useTypewriter({
    words: ["Your ultimate solution to all tech problems."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 90,
    delaySpeed: 1000,
  });

  useTitle("BRIGHTNEXT");

  return (
    <>
      {/* Hero Section */}
      <section className="home" id="home">
        <main>
          <h1>BrightNext</h1>
          <p>
            {typewriterText}
            <Cursor cursorStyle="|" />
          </p>
        </main>
      </section>

      {/* About Section */}
      <section className="home2">
        <img src={vg} alt="Technology Graphics" />
        <div>
          <p>
            As a leading tech company, we embrace the evolving landscape of technology, taking on everyday challenges with creativity and expertise. Our mission is to empower the next generation by nurturing essential problem-solving skills in children, equipping them to thrive in a technology-driven world. We believe that by instilling these skills early on, we can help shape a future where innovation knows no bounds. Our approach combines hands-on learning, cutting-edge tools, and a deep understanding of digital trends, ensuring that children are not just passive consumers of technology but active creators who will lead in the digital age.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="home3" id="about">
        <div>
          <h1>Who We Are</h1>
          <p>
            We are innovators committed to solving everyday tech challenges. As a leading tech company, we aim to provide long-term solutions that empower individuals and businesses. Our focus on children helps develop their problem-solving skills and prepares them to become the innovators of tomorrow, equipped to master the complexities of the digital age.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            {[
              { icon: <AiFillGoogleCircle />, name: "Google" },
              { icon: <AiFillAmazonCircle />, name: "Amazon" },
              { icon: <AiFillYoutube />, name: "YouTube" },
              { icon: <AiFillInstagram />, name: "Instagram" },
            ].map((brand, index) => (
              <div key={index} style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                {brand.icon}
                <p>{brand.name}</p>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
