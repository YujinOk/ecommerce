import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold text-gray-900 text-lg">Coolstuff</p>
          <p className="text-sm text-gray-400">Made in Korea</p>
        </div>

        <div className="flex gap-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <Link to="/cart" className="hover:text-black transition-colors">Cart</Link>
          <span className="text-gray-300 cursor-default">Shipping</span>
          <span className="text-gray-300 cursor-default">Returns</span>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Coolstuff. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
