import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";



export default function ContactUs() {


    return (


        <div className="bg-white text-gray-900 pt-20">


            {/* Hero Section */}
            <section
                className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url('https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-0" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <nav className="inline-flex space-x-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                        <Link to="/" className="text-sm font-semibold text-white hover:underline transition">
                            HOME
                        </Link>
                        <span className="text-sm text-white/70">/</span>
                        <span className="text-sm font-semibold text-white">CONTACT US</span>
                    </nav>
                </div>
            </section>


            {/* Contact Section */}
            <div className="max-w-7xl mx-auto sm:py-20 py-10 px-3 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">


                {/* Contact Form */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 md:p-10 animate-fade-up">


                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Send us a message</h2>


                    <p className="text-gray-600 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>


                    <form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Name" />
                            <Input placeholder="Company" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Phone" />
                            <Input placeholder="Email" type="email" />
                        </div>

                        <Input placeholder="Subject" />

                        <Textarea placeholder="Message" rows={5} />

                        <Button type="submit" className="bg-black flex items-center hover:scale-105 hover:cursor-pointer  text-white w-full">
                            <Mail className="w-4 h-4" /> Send Message
                        </Button>

                    </form>

                </div>



                {/* Contact Info */}
                <div className="animate-fade-up animation-delay-200">


                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Get in touch</h2>


                    <p className="text-gray-500 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>


                    <div className="space-y-6 text-md">


                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-black mt-1" />
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-gray-500">Jalan Cempaka Wangi No 22<br />Jakarta - Indonesia</p>
                            </div>
                        </div>


                        <div className="flex items-start gap-4">
                            <Mail className="w-5 h-5 text-black mt-1" />
                            <div>
                                <p className="font-medium">Email us</p>
                                <p className="text-gray-500">support@yourdomain.tld<br />hello@yourdomain.tld</p>
                            </div>
                        </div>


                        <div className="flex items-start gap-4">
                            <Phone className="w-5 h-5 text-black mt-1" />
                            <div>
                                <p className="font-medium">Call us</p>
                                <p className="text-gray-500">+6221.2002.2012<br />+6221.2002.2013 (Fax)</p>
                            </div>
                        </div>


                        <div>

                            <p className="font-medium mt-6 mb-2">Follow our social media</p>

                            <div className="flex space-x-4">

                                <a href="#" aria-label="Instagram" className="text-black hover:scale-110 transition-all duration-300">
                                    <i className="fa-brands fa-instagram fa-xl"></i>
                                </a>


                                <a href="#" aria-label="Facebook" className="text-black hover:scale-110 transition-all duration-300">
                                    <i className="fa-brands fa-facebook fa-xl"></i>
                                </a>


                                <a href="#" aria-label="Twitter" className="text-black hover:scale-110 transition-all duration-300">
                                    <i className="fa-brands fa-x-twitter fa-xl"></i>
                                </a>


                                <a href="#" aria-label="LinkedIn" className="text-black hover:scale-110 transition-all duration-300">
                                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                                </a>


                                <a href="#" aria-label="YouTube" className="text-black hover:scale-110 transition-all duration-300">
                                    <i className="fa-brands fa-youtube fa-xl"></i>
                                </a>


                                <a href="#" aria-label="Pinterest" className="text-black hover:scale-110 transition-all duration-300">
                                    <i className="fa-brands fa-pinterest fa-xl"></i>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Google Map Section */}
            <div className="w-full h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.11627826403!2d-0.1357!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333dfaad7f%3A0x4c83940002993689!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                ></iframe>
            </div>


        </div>

    );

}
