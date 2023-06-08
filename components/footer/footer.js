import moment from "moment";
import "./footer.scss";
function Footer() {
  return (
    <footer className="footer-wrap">
      <p>&copy; {moment().format("YYYY")} nabdeliveryservices.com </p>
    </footer>
  );
}

export default Footer;
