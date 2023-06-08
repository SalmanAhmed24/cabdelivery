"use client";
import "./navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();
  return (
    <nav className="navbar-wrap">
      <section className="logo-wrap">
        <Image
          onClick={() => router.push("/")}
          src="/images/logo.jpeg"
          width={100}
          height={100}
        />
      </section>
      <section className="links-wrap">
        <ul className="ulLinks">
          <li onClick={() => router.push("/services")}>Our Services</li>
          <li>
            <Link href="/#about">About Us</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
