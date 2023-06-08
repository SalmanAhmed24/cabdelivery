import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Noor Alburaq Delivery Service",
  description:
    "Noor Alburaq Delivery Service trusted partner for fast and reliable delivery of food, groceries, and packages in Dubai. We take pride in simplifying your life by bringing your favorite meals, fresh groceries, and essential items right to your doorstep. With our dedicated team of delivery professionals, we ensure that your orders are handled with utmost care and delivered in a timely manner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
