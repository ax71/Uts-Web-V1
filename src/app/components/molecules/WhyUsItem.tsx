import WhyUsItemIcon from "../atoms/WhyUsIcon";

interface WhyUsItemProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

const WhyUsItem = ({ iconSrc, iconAlt, text }: WhyUsItemProps) => (
  <div className="flex flex-col items-center gap-4">
    <WhyUsItemIcon src={iconSrc} alt={iconAlt} />
    <p className="text-gray-800 font-semibold">{text}</p>
  </div>
);

export default WhyUsItem;
