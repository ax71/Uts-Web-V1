import Image from "next/image";

interface WhyUsItemIconProps {
  src: string;
  alt: string;
}

const WhyUsItemIcon = ({ src, alt }: WhyUsItemIconProps) => (
  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
    <Image src={src} width={50} height={50} alt={alt} />
  </div>
);

export default WhyUsItemIcon;
