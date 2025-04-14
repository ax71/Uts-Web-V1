import { FaInstagram, FaYoutube, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white">
            <span className="text-blue-600">eX</span>Store
          </h2>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Order tracking</li>
            <li>Store location</li>
            <li>Return policy</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Blog</li>
            <li>Help center</li>
            <li>Documentation</li>
            <li>Guidelines</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow us on:</h3>
          <div className="flex space-x-3">
            <a href="#">
              <FaInstagram className="text-gray-400 hover:text-white text-xl" />
            </a>
            <a href="#">
              <FaYoutube className="text-gray-400 hover:text-white text-xl" />
            </a>
            <a href="#">
              <FaTwitch className="text-gray-400 hover:text-white text-xl" />
            </a>
            <a href="#">
              <FaTwitter className="text-gray-400 hover:text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2022 Exstore
      </div>
    </footer>
  );
};

export default Footer;
