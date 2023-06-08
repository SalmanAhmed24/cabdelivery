import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import AboutUs from "@/components/aboutUs/aboutUs";
import OurServices from "@/components/ourServices/ourServices";
import ContactUs from "@/components/contactUs/contactUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutUs />
      <OurServices />
      <ContactUs />
    </main>
  );
}
