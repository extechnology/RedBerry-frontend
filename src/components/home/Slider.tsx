import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';



// Slides data
const slides = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3lmF0e-YURLIKDoJ4X3T5Ek2RyuiuynZ4Q&s',
        title: 'Innovate Boldly',
        subtitle: 'Crafting future-forward solutions for a connected world',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbBo8pAFktLjJo8Ew4WblSZ11l7sNTmlLEQ&s',
        title: 'Design with Purpose',
        subtitle: 'Elevating ideas through clean, functional aesthetics',
    },
    {
        image: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMHdhbGxwYXBlcnN8ZW58MHx8MHx8fDA%3D',
        title: 'Empower Your Brand',
        subtitle: 'From concept to reality — we help you grow',
    },
];



export default function Slider() {


    const [activeIndex, setActiveIndex] = useState(0);



    return (

        <div className="w-full h-[108%]  relative pt-20 overflow-hidden">

            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full"
            >


                {slides.map((slide, index) => (


                    <SwiperSlide key={index}>


                        <div className="relative w-full h-full">

                            <img
                                src={slide.image}
                                alt={slide.title}
                                loading='lazy'
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40" />


                            {/* Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

                                <h2 className="text-white text-3xl sm:text-5xl font-bold drop-shadow mb-2 transition-opacity duration-1000 opacity-100">
                                    {slide.title}
                                </h2>

                                <p className="text-white text-sm sm:text-lg max-w-xl drop-shadow transition-opacity duration-1000 delay-200 opacity-100">
                                    {slide.subtitle}
                                </p>

                            </div>


                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

            {/* Slider dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_: any, index: number) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Curved bottom section */}
            <div className="relative w-full h-[15%]">
                <div className="absolute -top-12 w-full overflow-hidden z-20">
                    <svg
                        viewBox="0 0 1440 320"
                        className="w-full h-24"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>

        </div>

    )

}
