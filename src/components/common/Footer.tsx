import { Link } from "react-router-dom";



export default function Footer() {


  return (


    <section className="bg-gradient-to-br from-[#0d0d0d] via-[#141313] to-[#000000] text-white border-t border-gray-800 pt-3">


      {/* Top Footer Section */}
      <div className="mx-auto grid gap-y-12 gap-x-8 px-6 py-16 sm:px-12 md:grid-cols-2 lg:grid-cols-4">


        {/* Logo and Description */}
        <div>

          <div className="mb-6 flex h-16 items-center space-x-2">
            <img className="h-full object-contain" src="/Nav-white-logo.png" alt="Company Logo" loading="lazy" />
          </div>

          <p className="text-sm text-gray-300">
            At Redberry Advertising, our service continues even after project delivery, with a full
            range of after-sales support to meet your needs.
          </p>

        </div>


        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link className="hover:text-white hover:underline hover:font-medium transition duration-200" to={'/'}>Home</Link></li>
            <li><Link className="hover:text-white hover:underline hover:font-medium transition duration-200" to={'/about'}>About Us</Link></li>
            <li><Link className="hover:text-white hover:underline hover:font-medium transition duration-200" to={'/printingservices'}>Services</Link></li>
            <li><Link className="hover:text-white hover:underline hover:font-medium transition duration-200" to={'/faqs'}>FAQ</Link></li>
            <li><Link className="hover:text-white hover:underline hover:font-medium transition duration-200" to={'/gallery'}>Gallery</Link></li>
          </ul>
        </div>



        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Contact Info</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Jeddah, Khalid Bin Waleed </li>
            <li>St., Kingdom of Saudi Arabia</li>
            <li>Phone: <a href="tel:+966503476840" target="_blank" className="hover:text-white hover:underline hover:font-medium transition duration-200">+966 50 347 6840</a></li>
            <li>Email: <a href="mailto:shameer.k@redberryksa.com" target="_blank" className="hover:text-white hover:underline hover:font-medium transition duration-200">shameer.k@redberryksa.com</a></li>
          </ul>
        </div>


        {/* Social Media */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Support Us</h3>
          <div className="flex flex-wrap items-center gap-4">

            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>


            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>


            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-x-twitter fa-xl"></i>
            </a>


            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>


            <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-youtube fa-xl"></i>
            </a>


            <a href="#" aria-label="Pinterest" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-pinterest fa-xl"></i>
            </a>

          </div>

        </div>

      </div>


      {/* Bottom Footer Section */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-6 py-6 text-gray-300 sm:px-12 lg:flex-row lg:justify-between lg:text-left">

          <p className="text-xs text-center">© 2025 RedBerry, All Rights Reserved</p>

          <p className="order-first lg:order-none font-semibold text-sm text-center text-white"><a href="https://extechnology.in" className="hover:text-white hover:font-bold transition" target="_blank">Powered by extechnology</a></p>

          <div className="flex gap-x-4 justify-center lg:justify-end text-xs">
            <a href="#" className="hover:underline hover:text-white hover:font-medium transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-white hover:font-medium transition">Terms of Service</a>
          </div>

        </div>
      </div>



    </section>


  )


}


