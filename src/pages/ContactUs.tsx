import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { BlurFade } from "@/components/magicui/blur-fade";





export default function ContactUs() {


    return (


        <div className="bg-white text-gray-900 pt-16">


            {/* Hero Section */}
            <BlurFade delay={0.25} inView>

                <section
                    className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('/Contact Us-banner.jpg')`,
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

            </BlurFade>



            {/* Contact Section */}
            <BlurFade delay={0.25 * 2} duration={0.7} inView>
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
                            Get in touch with us and we will get back to you as soon as possible.
                        </p>


                        <div className="space-y-6 text-md">


                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-black mt-1" />
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-gray-500">Jeddah, Khalid Bin Waleed<br />St., Kingdom of Saudi Arabia</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-black mt-1" />
                                <div>
                                    <p className="font-medium">Email us</p>
                                    <p className="text-gray-500"><a href="mailto:shameer.k@redberryksa.com" target="_blank" className="hover:underline hover:font-medium transition duration-200">shameer.k@redberryksa.com</a></p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-black mt-1" />
                                <div>
                                    <p className="font-medium">Call us</p>
                                    <p className="text-gray-500"><a href="tel:+966503476840" target="_blank" className="hover:underline hover:font-medium transition duration-200">+966 50 347 6840</a></p>
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

            </BlurFade>


            {/* Google Map Section */}
            <BlurFade delay={0.25 * 3} duration={0.7} inView>
                <div className="w-full h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.49249792079044!2d39.19171717824809!3d21.526394661727593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfcdf40d3945%3A0xa444c501e45d087e!2sREDBERRY%20Advertising%20co.!5e1!3m2!1sen!2sin!4v1752841370689!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location">

                    </iframe>
                </div>
            </BlurFade>

        </div>

    );

}
