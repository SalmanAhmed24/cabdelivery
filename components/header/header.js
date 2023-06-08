import Image from "next/image";
import "./header.scss";
function Header() {
  return (
    <header className="header-wrap">
      <section className="contentWrap">
        <h1>Noor AlBuraq Delivery Service</h1>
        <p>
          Seamless delivery solutions for food and packages, bring convenience
          and delight to your door.
        </p>
      </section>
      <section className="mainHeadImg">
        <Image src="/images/home.jpg" width={500} height={400} alt="home" />
      </section>
    </header>
  );
}

export default Header;
