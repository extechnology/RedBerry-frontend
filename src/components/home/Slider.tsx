import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';




// Slies data for the slider
const slides = [
    {
        image: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMHdhbGxwYXBlcnN8ZW58MHx8MHx8fDA%3D',
        subtitle: '#1 Energy provider in the world',
        title: 'New Energy for the Future',
        projectimg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"

    },
    {
        image: 'https://img.freepik.com/free-photo/solitude-despair-sitting-shadows-generated-by-ai_188544-26133.jpg?semt=ais_hybrid&w=740',
        subtitle: '#1 Energy provider in the world',
        title: 'Powering Progress with Clean Energy',
        projectimg: "https://static.vecteezy.com/system/resources/thumbnails/030/648/135/small_2x/a-dark-hallway-with-a-door-and-a-person-standing-free-photo.jpg"
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
                            <div className="absolute inset-0 bg-black/40" />


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

                                    <Link to="/services" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
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
