
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-12 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2 flex flex-col pr-8">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="DevStack Logo"
                className="h-8 md:h-10 w-auto"
              />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-6 text-sm font-semibold text-gray-700">
              <a href="#" className="hover:text-black transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-black transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider">
              PRODUCT
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Technologies
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Projects
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider">
              COMPANY
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Careers
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider">
              LEGAL
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
