import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';




// Slies data for the slider
const slides = [
    {
        image: '/Slider-1.jpg',
        subtitle: 'Where Every Pixel And Print Speaks Quality',
        title: 'We Make Your Brand Or Service Unforgettable',
        projectimg: "/Gallery - 2.jpg"

    },
    {
        image: '/Slider-2.jpg',
        subtitle: 'Your Ideas, Our Graphics, Flawless Print',
        title: 'From Concept To Creation Graphics That Deliver.',
        projectimg: "/Gallery - 4.jpg"
    },
    {
        image: '/Slider-3.jpg',
        subtitle: 'We Turn Designs Into Lasting Impressions,',
        title: 'Creatives Delivered For Standout Brands',
        projectimg: "/Gallery - 1.jpg"
    },
];




export default function Slider() {


    return (


        <div className="w-full h-screen relative overflow-hidden pt-16 px-2 sm:px-3">

            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full h-full rounded-4xl"
            >

                {slides.map((slide, index) => (


                    <SwiperSlide key={index}>


                        <div className="relative w-full h-full">


                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt="Slide"
                                loading='lazy'
                                className="w-full h-full object-cover"
                            />


                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/50" />


                            {/* Heading and Buttons */}
                            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-14 z-10 text-white max-w-[850px]">

                                <p className="text-sm mb-3 text-white/70">
                                    {slide.subtitle}
                                </p>

                                <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">

                                    {(() => {
                                        const words = slide.title.split(" ");
                                        return (
                                            <>
                                                {words.slice(0, 2).join(" ")}<br />
                                                {words.slice(2).join(" ")}
                                            </>
                                        );
                                    })()}

                                </h1>


                                <div className="mt-8 flex gap-4 flex-wrap">

                                    <Link to={"/contact"} className="bg-white text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
                                        Get in touch
                                    </Link>

                                    <Link to="/printingservices" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
                                        Our services →
                                    </Link>

                                </div>

                            </div>


                            {/* Floating Card */}
                            <div className="hidden md:block absolute right-6 sm:right-12 top-[30%] bg-white/10 backdrop-blur-md p-4 rounded-2xl text-white w-[250px] shadow-md">

                                <Link to="/gallery" className="flex flex-col">

                                    <img
                                        src={slide.projectimg}
                                        alt="Project"
                                        loading='lazy'
                                        className="w-full h-[140px] object-cover rounded-xl mb-3"
                                    />

                                    <div className="flex justify-between items-center">
                                        <p className="text-base font-medium leading-snug">
                                            Discover Our<br />Recent Project
                                        </p>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>

                                </Link>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>



        </div>
    );
}
