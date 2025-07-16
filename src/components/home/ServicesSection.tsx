import { useState } from "react";
import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { Link } from "react-router-dom";


// Service data
const services = [
    { title: "Printing", href: "/printingservices" , image: "https://cdn.wedevs.com/uploads/2020/06/Business-Branding-feature-Images.png" },
    { title: "Indoor door & Outdoor Signages",  href: "/indoor&outdoorsignage" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGA7XCdHJkW4FUjIzeSHetB6X3Kbq-56W6tw&s" },
    { title: "Laser work", href: "/lasercutting&engraving" , image: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/parcels-packages-shipping_1940x900_33939.jpg" },
    { title: "Exhibitions", href: "/exhibitions" , image: "https://foyr.com/learn/wp-content/uploads/2018/12/indoors-3101776_1280.jpg" },
    { title: "Interior designs", href: "/interiordesing" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwj9i8Uc6X6FvWgvANWAbfHVAXOvIeSC0Pw&s" },
    { title: "Graphics Designs", href: "/graphicdesign" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwj9i8Uc6X6FvWgvANWAbfHVAXOvIeSC0Pw&s" },
];



export default function ServicesSection() {


    const [activeIndex, setActiveIndex] = useState<number | null>(0);



    return (


        <div className="min-h-screen py-10 border-t-2 border-dashed border-gray-300 w-full px-2 sm:px-10 lg:px-20 mx-auto bg-white text-white overflow-hidden">


            {/* Header */}
            <MotionEffect
                fade
                blur="10px"
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
                inView
            >
                <div className="text-black px-2 mb-5">
                    <h1 className="text-5xl font-black leading-tight">We offer the<br />Excellence Series!</h1>

                </div>

            </MotionEffect>


            {/* Service Rows */}
            <div className="flex flex-col">
                {services.map((service, idx) => (

                    <MotionEffect inView key={idx} slide={{ direction: 'down', }} fade zoom delay={0.4 + idx * 0.1}>

                        <Link to={`${service.href}`} >
                            <div
                                key={idx}
                                className="group hover:cursor-pointer relative w-full overflow-hidden transition-all duration-700 rounded-4xl"
                            >

                                <div
                                    className={`relative transition-all duration-700 ${activeIndex === idx ? "h-[320px]" : "h-[200px]"
                                        }`}
                                    onMouseEnter={() => setActiveIndex(idx)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >

                                    {/* Background image */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700"
                                    />


                                    {/* Overlay text */}
                                    <div className="absolute inset-0 bg-black/40 flex items-center px-6">
                                        <h2 className="text-4xl font-medium tracking-widest">{service.title.toUpperCase()}</h2>
                                    </div>

                                </div>

                            </div>

                        </Link>

                    </MotionEffect>
                ))}
            </div>

        </div >

    );

}
