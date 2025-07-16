import { useState } from "react";
import { AlignLeft, Mail, X } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";



const Navbar = () => {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);




  // Using useLocation to get the current path 
  const location = useLocation();


  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };




  // Define services with icons and descriptions
  const services = [
    {
      title: "Printing",
      description: "High-quality printing services for all your business needs",
      icon: "https://media.istockphoto.com/id/941664964/vector/man-worker-at-plotter-printing-wide-format-large-banner-vector-illustration.jpg?s=612x612&w=0&k=20&c=W9JfyBycnPnlmyQcqZDMoiLCKXxxyqg3rsbok_e2854=",
      href: "/printingservices"
    },
    {
      title: "Indoor & Outdoor Signage",
      description: "Custom signage solutions for indoor and outdoor use",
      icon: "https://media.istockphoto.com/id/941664964/vector/man-worker-at-plotter-printing-wide-format-large-banner-vector-illustration.jpg?s=612x612&w=0&k=20&c=W9JfyBycnPnlmyQcqZDMoiLCKXxxyqg3rsbok_e2854=",
      href: "/indoor&outdoorsignage"
    },
    {
      title: "Laser Work",
      description: "Precision laser cutting and engraving services",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPDMt-qxz9I26TV12afkB4u7EcEmj_-5o_A&s",
      href: "/lasercutting&engraving"
    },
    {
      title: "Exhibitions",
      description: "Custom exhibition stands and displays for your events",
      icon: "https://static.vecteezy.com/system/resources/previews/025/770/432/non_2x/art-exhibition-illustration-vector.jpg",
      href: "/exhibitions"
    },
    {
      title: "Interior Design",
      description: "Professional interior design and consultation",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/000/217/378/small_2x/vector-interior-design-illustration.jpg",
      href: "/interiordesing"
    },
    {
      title: "Graphic Design",
      description: "Creative graphic design solutions for your brand",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG-kXG6ev9q3QEb0GXPgXwdRs5Coq1casmA&s",
      href: "/graphicdesign"
    }
  ];



  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faqs" },
    { name: "Gallery", href: "/gallery" },
  ];



  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ">


      <div className="max-w mx-auto px-4 sm:px-6 lg:px-14">


        <div className="flex items-center justify-between h-16">


          {/* Logo */}
          <div className="flex-shrink-0">

            <Link to="/" className="flex items-center space-x-2">

              <img src="/Nav-black-logo.png" alt="nav-logo" className="h-12 sm:h-12 w-full object-contain" />

            </Link>

          </div>



          {/* Desktop Navigation */}
          <div className="hidden md:block">

            <NavigationMenu>

              <NavigationMenuList className="space-x-3">

                {navItems.slice(0, 2).map((item) => (

                  <NavigationMenuItem key={item.name}>

                    <NavigationMenuLink
                      href={item.href}
                      className={cn(location.pathname === item.href
                        ? "text-black font-bold text-md"
                        : "text-gray-700 font-medium",
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>

                  </NavigationMenuItem>

                ))}



                {/* Services Dropdown */}
                <NavigationMenuItem>

                  <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:bg-accent text-sm font-medium transition-colors">
                    Services
                  </NavigationMenuTrigger>


                  <NavigationMenuContent className="[&[data-state=open]]:shadow-lg">

                    <div className="grid gap-3 p-6 w-[600px]">

                      <div className="row-span-3">

                        <NavigationMenuLink asChild>
                          <div
                            className="flex h-full w-full select-none flex-col justify-end rounded-md 
             bg-gradient-to-b from-[#001224] via-[#4B0B12] to-[#D6040B] 
             p-6 no-underline outline-none focus:shadow-md transition duration-300 hover:scale-[1.02]"
                          >
                            <div className="mb-2 mt-4 text-lg font-semibold text-white drop-shadow">
                              Our Services
                            </div>
                            <p className="text-sm leading-tight text-gray-100 drop-shadow-sm">
                              Comprehensive solutions for all your business needs
                            </p>
                          </div>

                        </NavigationMenuLink>

                      </div>


                      <div className="grid grid-cols-2 gap-2">

                        {services.map((service) => (

                          <NavigationMenuLink key={service.title} asChild>

                            <Link
                              to={service.href}
                              className="group grid grid-cols-[60px_1fr] gap-3 rounded-md p-0 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >

                              <img
                                src={service.icon}
                                loading="lazy"
                                alt={service.title}
                                className="w-14 h-14 object-contain"
                              />

                              <div>
                                <div className="text-sm font-medium leading-none group-hover:underline">
                                  {service.title}
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                  {service.description}
                                </p>
                              </div>

                            </Link>

                          </NavigationMenuLink>

                        ))}


                      </div>

                    </div>

                  </NavigationMenuContent>

                </NavigationMenuItem>



                {navItems.slice(2).map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(location.pathname === item.href
                        ? "text-black font-bold text-md"
                        : "text-gray-700 font-medium",
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

              </NavigationMenuList>

            </NavigationMenu>

          </div>



          {/* Contact Button */}
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900 text-white font-medium text-sm
             hover:bg-zinc-900 hover:shadow-lg hover:scale-[1.03] hover:cursor-pointer
             active:scale-[0.97] transition-all duration-300 ease-in-out">
            <Mail size={14} className="transition-transform duration-300 group-hover:-rotate-6" />
            Contact Us
          </Link>




          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <AlignLeft className="block h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>


        </div>



        {/* Mobile Navigation Menu */}
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          navItems={navItems}
          services={services}
        />


      </div>


    </nav>
  );
};

export default Navbar;