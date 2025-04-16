import Image from "next/image";

const Logo = () => (
  <Image src="/logos/logo.png" alt="Logo" width={130} height={50} priority />
);

export default Logo;
