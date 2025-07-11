import { Link } from "react-router-dom";
import { siteConfig } from "../assets/config";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className=" md:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src={siteConfig.images.logo}
              alt="logo"
              className="w-40 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              {siteConfig.footer.description}
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span>{" "}
                {siteConfig.contact.phone}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span>{" "}
                {siteConfig.contact.email}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Address:</span>{" "}
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {siteConfig.footer.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    onClick={() => scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} H&K Builders Construction. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {siteConfig.footer.socialLinks.map((social) => (
              <Link
                key={social.name}
                to={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
