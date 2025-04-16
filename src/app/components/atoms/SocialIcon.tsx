import { IconType } from "react-icons";

interface SocialIconProps {
  icon: IconType;
  href: string;
}

const SocialIcon = ({ icon: Icon, href }: SocialIconProps) => (
  <a href={href}>
    <Icon className="text-gray-400 hover:text-white text-xl" />
  </a>
);

export default SocialIcon;
