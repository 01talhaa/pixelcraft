"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ["Photo Editing", "Graphic Design", "Web Design", "Brand Identity", "Motion Graphics", "Print Design"],
    Company: ["About Us", "Our Team", "Careers", "Contact", "Blog", "Case Studies"],
    Resources: ["Design Tips", "Tutorials", "Free Assets", "Style Guide", "FAQ", "Support"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Refund Policy", "License"],
  }

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Behance", icon: "🎨", url: "#" },
    { name: "Dribbble", icon: "🏀", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    PixelCraft
                  </span>
                  <span className="text-white ml-1">Studio</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                We're a creative design studio specializing in photo editing and graphic design. Our passion is
                transforming your vision into stunning visual experiences that captivate and inspire.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Stay Creative</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button className="bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 rounded-r-lg font-semibold hover:shadow-lg transition-all duration-300 text-black">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-110"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-6 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                      >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PixelCraft Studio. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {/* <span>Made with ❤️ for creative minds</span> */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
