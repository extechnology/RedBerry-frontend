import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Link } from "react-router-dom";



export default function PrintingServices() {



    // Service data
    const services = [
        {
            title: "Offset Printing",
            image:
                "/Uv Printing.jpg",
            description:
                "Redberry is a integrated offset printing & packaging company providing, total solutions to your requirements.Our clients include Pharmaceutical & Cosmetics Majors, Health & Personal Care, FMCG Companies,Food & Beverage, Hospitality, Real Estate, Consumer Products, Textiles and Lifestyle Brands.Housing the finest machinery, raw material, infrastructure and logistics, Redberry is propelling aheadwith complete dedication, vision & focus to excel in the future.",
        },
        {
            title: "Eco solvent printing",
            image:
                "/Eco solvent printing.jpg",
            description:
                "Eco-solvent printers from Roland, Mimaki, and Mutoh are a go-to for businesses focused on high-quality, vibrant, and long-lasting graphics, ideal for everything from vehicle wraps and banners to wall graphics and decals. These printers use eco-friendly, low-odor inks that produce stunning colors while being safe for indoor and outdoor applications. Perfect for print shops, sign makers, and graphic studios, eco-solvent printers combine high durability with incredible detail, giving creators the flexibility to produce impactful,professional results on various media types.",
        },
        {
            title: "Digital Printing",
            image:
                "/Digital Printing .jpg",
            description:
                "Redberry provides high quality digital printing services to bring your project to life.Whether you already have your own artwork to print, or need to sta the process from scratch, Redberry can help.",
        },
        {
            title: "Uv Printing",
            image:
                "/Uv Printing.jpg",
            description:
                "UV printing is a cutting-edge technology that uses ultraviolet light to cure or dry the ink as it is printed. This process allows for high-quality, vibrant prints on a wide range of materials, including paper, plastic, metal, and glass. UV printing is known for its quick turnaround times, durability, and ability to produce intricate designs with sharp details. It is ideal for creating promotional materials, packaging, signage, and custom products that require both speed and precision.",
        },
    ];



    // Other Priniting Services
    const features = [
        {
            label: "Screen Printing",
            image: "/screen-printing.jpg",
        },
        {
            label: "Sublimation Printing",
            image: "/sublimation-printing.jpg",
        },
        {
            label: "Canvas Printing",
            image: "/canvas-printing.jpg",
        },
        {
            label: "Embroidery",
            image: "/embroidary.jpg",
        },
    ];



    // State to manage active service
    const [active, setActive] = useState(0);



    return (


        <section className="w-full mx-auto pt-16">


            {/* Hero Section */}
            <BlurFade delay={0.25} inView>

                <section
                    className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('/banner-for-printing.jpg')`,
                    }}
                >

                    <div className="absolute inset-0 bg-black/60 z-0" />

                    <div className="relative z-10 text-center px-4">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Printing Services
                        </h1>

                        <nav className="inline-flex space-x-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                            <Link to="/" className="text-sm font-semibold text-white hover:underline transition">
                                Home
                            </Link>
                            <span className="text-sm text-white/70">/</span>
                            <span className="text-sm font-semibold text-white">Printing Services</span>
                        </nav>

                    </div>

                </section>

            </BlurFade>


            {/* Section Header */}
            <MotionEffect
                fade
                blur="10px"
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
                inView
            >

                <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-2 py-5 sm:py-14 gap-12">


                    {/* Left Side Menu */}
                    <div className="lg:w-1/2 w-full">


                        <h2 className="text-3xl font-bold mb-4">
                            Expert Care for Your <br />
                            Specific Needs
                        </h2>


                        <p className="text-gray-600 mb-8">
                            Redberry is a integrated offset printing & packaging company providing, total solutions to your requirements.
                        </p>


                        <div className="space-y-3">

                            {services.map((service, index) => (

                                <div
                                    key={index}
                                    onMouseEnter={() => setActive(index)}
                                    className={`cursor-pointer border-b hover:cursor-pointer py-3 text-xl transition duration-300 ${active === index
                                        ? "font-semibold text-black"
                                        : "text-gray-400 hover:text-black"
                                        }`}
                                >
                                    {service.title}

                                </div>

                            ))}

                        </div>

                    </div>



                    {/* Right Side Content */}
                    <div className="lg:w-1/2 w-full">


                        <AnimatePresence mode="wait">


                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="space-y-4"
                            >


                                <div className="overflow-hidden rounded-2xl">

                                    <img
                                        src={services[active].image}
                                        alt={services[active].title}
                                        loading="lazy"
                                        className="w-full h-80 object-cover rounded-2xl"
                                    />

                                </div>


                                <h3 className="text-2xl font-bold">{services[active].title}</h3>
                                <p className="text-gray-600">{services[active].description}</p>


                            </motion.div>


                        </AnimatePresence>


                    </div>

                </div>

            </MotionEffect>




            {/* Other Printing Services */}
            <section className="bg-white py-10 sm:py-10 border-t-2 border-dashed border-gray-300 px-2 sm:px-10 lg:px-20 text-black">


                {/* Section Header */}
                <MotionEffect
                    fade
                    blur="10px"
                    transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                    }}
                    inView
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Other Printing Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our mission is to drive progress and enhance the lives of our customers
                            by delivering superior products and services that exceed.
                        </p>
                    </div>
                </MotionEffect>



                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                    {features.map((item, idx) => (

                        <MotionEffect inView key={idx} slide={{ direction: 'down', }} fade zoom delay={0.4 + idx * 0.1}>

                            <div
                                key={idx}
                                className="rounded-3xl overflow-hidden relative group shadow-md"
                            >

                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-black/40"></div>

                                <div className="absolute bottom-4 left-4 text-white">

                                    <p className="text-md sm:text-xl font-medium mt-1">{item.label.toUpperCase()}</p>

                                </div>

                            </div>

                        </MotionEffect>

                    ))}


                </div>

            </section>



        </section>

    )

}
