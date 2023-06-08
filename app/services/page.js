import Image from "next/image";
import "./service.scss";
function Services() {
  return (
    <main className="services-main-wrap">
      <section className="header-wrap">
        <h1>Noor AlBuraq</h1>
        <h2>Delivery Service</h2>
        <p>The best and fast delivery</p>
      </section>
      <section className="food-del-col">
        <div className="content-wrap">
          <h2>Food delivery</h2>
          <h3>Say goodbye to long queues, traffic woes, and parking hassles</h3>
          <p>
            Introducing Noor Alburaq Delivery Service, your premier destination
            for fast and reliable food delivery. We understand your cravings and
            are committed to bringing the culinary delights from your favorite
            restaurants straight to your doorstep. With our dedicated team of
            delivery professionals, we ensure that your food arrives hot, fresh,
            and on time, so you can enjoy a restaurant-quality meal in the
            comfort of your own home. Place your order today and let us satisfy
            your hunger with our exceptional delivery service.
          </p>
          <p>
            With Noor Alburaq, you have a plethora of options at your
            fingertips. From mouthwatering appetizers to savory entrees and
            decadent desserts, our extensive menu caters to all tastes and
            preferences. Whether you&apos;re craving comfort food, international
            cuisine, or healthy alternatives, we have you covered.
          </p>
        </div>
        <div className="image-wrap">
          <Image
            src="/images/food-del.jpg"
            alt="food deliver"
            width={300}
            height={300}
          />
        </div>
      </section>
      <section className="food-del-col reverse-col">
        <div className="image-wrap">
          <Image
            src="/images/package.jpg"
            alt="food deliver"
            width={300}
            height={300}
          />
        </div>
        <div className="content-wrap">
          <h2>Package delivery</h2>
          <h3>
            Experience the convenience of Noor Alburaq Delivery Service for all
            your package delivery needs
          </h3>
          <p>
            Noor Alburaq Delivery Service takes pride in providing seamless and
            reliable door-to-door package delivery. We understand the importance
            of secure and efficient shipping for your valuable items, and our
            dedicated team is committed to ensuring a hassle-free experience.
          </p>
          <p>
            With our extensive network of trusted couriers, we offer a range of
            delivery options to suit your needs. Whether it&apos;s small
            parcels, documents, or larger packages, we handle them all with
            utmost care and professionalism. Our streamlined process ensures
            that your packages are picked up from your location and promptly
            delivered to the intended destination.
          </p>
          <p>
            At Noor Alburaq, we prioritize safety and security. Our trained
            professionals handle your packages with diligence, employing
            industry-standard protocols to protect against damage or loss during
            transit. Additionally, we provide insurance options for added peace
            of mind.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Services;
