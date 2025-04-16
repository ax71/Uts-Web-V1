import { FaInstagram, FaYoutube, FaTwitch, FaTwitter } from "react-icons/fa";
import SocialIcon from "../atoms/SocialIcon";
import FooterTitle from "../atoms/FooterTitle";

const FooterSocials = () => (
  <div>
    <FooterTitle>Follow us on:</FooterTitle>
    <div className="flex space-x-3">
      <SocialIcon href="#" icon={FaInstagram} />
      <SocialIcon href="#" icon={FaYoutube} />
      <SocialIcon href="#" icon={FaTwitch} />
      <SocialIcon href="#" icon={FaTwitter} />
    </div>
  </div>
);

export default FooterSocials;
