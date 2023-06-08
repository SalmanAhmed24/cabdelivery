import Image from "next/image";
import "./contactUs.scss";
function ContactUs() {
  return (
    <section className="contactUs-wrap">
      <h1>Contact Us</h1>
      <section className="contact-card-wraps">
        <div className="cards">
          <Image src="/images/phone.png" width={64} height={64} alt="phone" />
          <h2>575258872</h2>
        </div>
        <div className="cards">
          <Image src="/images/email.png" width={64} height={64} alt="phone" />
          <h2>nooralburaqdeliveryservices@gmail.com</h2>
        </div>
      </section>
    </section>
  );
}

export default ContactUs;
