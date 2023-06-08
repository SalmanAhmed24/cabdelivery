import Image from "next/image";
import "./aboutUs.scss";
function AboutUs() {
  return (
    <main id="about" className="about-con">
      <section className="imageWrap">
        <Image
          src="/images/about-us.png"
          width={400}
          height={300}
          alt="Delivery Rider"
        />
      </section>
      <section className="contentWrap">
        <h1>About Us</h1>
        <p>
          Welcome to Noor AlBuraq Delivery Service, your trusted partner for
          fast and reliable delivery of food, groceries, and packages in Dubai.
          We take pride in simplifying your life by bringing your favorite
          meals, fresh groceries, and essential items right to your doorstep.
          With our dedicated team of delivery professionals, we ensure that your
          orders are handled with utmost care and delivered in a timely manner.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
