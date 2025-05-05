import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#1e1f29] text-[#a1a1aa] border-t border-[#2e2f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Company</h3>
              <p className="text-sm">
                Creating innovative solutions for modern businesses.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="hover:text-white transition-colors"
                    aria-label={social}
                  >
                    <i className={`bx bxl-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Contact Us</h3>
              <address className="not-italic space-y-2 text-sm">
                <p className="flex items-start">
                  <i className="bx bx-map mr-2 mt-0.5"></i>
                  123 Business Ave, Suite 456<br />New York, NY 10001
                </p>
                <p className="flex items-center">
                  <i className="bx bx-phone mr-2"></i>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <i className="bx bx-envelope mr-2"></i>
                  info@example.com
                </p>
              </address>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Newsletter</h3>
              <p className="text-sm">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-[#2e2f3a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-[#2e2f3a]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs">
                &copy; {new Date().getFullYear()} All Rights Reserved. Designed by{' '}
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-400 hover:text-white transition-colors"
                >
                  Razi Ahmed
                </a>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-xs">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'GDPR'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg border border-indigo-400 z-50"
          aria-label="Back to top"
        >
          <i className="bx bx-chevron-up text-xl text-white"></i>
        </button>
      )}
    </footer>
  );
}
