import FooterSection from "../organisms/FooterSection";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <FooterSection />
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2022 Exstore
      </div>
    </footer>
  );
};

export default Footer;
