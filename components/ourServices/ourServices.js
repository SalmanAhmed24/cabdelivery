import Image from "next/image";
import Link from "next/link";
import "./ourServices.scss";
function OurServices() {
  return (
    <section className="services-con">
      <h1>Our Services</h1>
      <section className="ser-card-wrap">
        <div className="cardSer">
          <Image
            src="/images/food.png"
            alt="Food Delivery"
            width={320}
            height={300}
          />
          <h2>Food delivery </h2>
          <p>Get Your Favorites Food Delivered at Your Doorstep</p>
          <Link className="btn-link" href="/services">
            Read More
          </Link>
        </div>
        <div className="cardSer">
          <Image
            src="/images/package.png"
            alt="Package Delivery"
            width={320}
            height={300}
          />
          <h2>Package delivery</h2>
          <p>
            Reliable, hassle-free package delivery. Door-to-door convenience.
          </p>
          <Link className="btn-link" href="/services">
            Read More
          </Link>
        </div>
      </section>
    </section>
  );
}

export default OurServices;
