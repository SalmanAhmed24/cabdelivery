import Image from "next/image";
import "./service.scss";
function Services() {
  return (
    <main className="services-main-wrap">
      <section className="header-wrap">
        <h1>Our Services</h1>
      </section>
      <section className="food-del-col">
        <div className="content-wrap">
          <h2>Food delivery</h2>
          <p>
            We seamlessly bridge the gap between your favorite restaurants and
            your doorstep, ensuring your cravings are met with swift and
            reliable delivery. Sit back, relax, and let us bring the flavors you
            love straight to you.
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
      <section className="food-del-col">
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
          <p>
            Your trusted partner for hassle-free package delivery. From small
            parcels to large shipments, we ensure seamless door-to-door
            delivery, saving you time and effort. Experience reliable and
            efficient service that connects you with your packages, right at
            your doorstep.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Services;
