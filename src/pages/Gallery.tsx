import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import { BlurFade } from "@/components/magicui/blur-fade";


export default function Gallery() {



    // project data
    const projects = [
        {
            title: "Prismic Gallery",
            subtitle: "Development & Design | 2024 | Prismic Integration",
            year: 2024,
            image: "https://images.prismic.io/prismic-main/ZyGdsq8jQArT0Aen_HERO.png?auto=format%2Ccompress&fit=max&w=3840",
            bgColor: "bg-yellow-100",
        },
        {
            title: "Code Screenshot",
            subtitle: "Development & Design",
            year: 2024,
            image: "https://generatepress.com/wp-content/uploads/2025/02/great-hero-featured-image.png",
            bgColor: "bg-pink-100",
        },
        {
            title: "iPhone 15 Pro",
            subtitle: "Development & Design",
            year: 2024,
            image: "https://i.ytimg.com/vi/flAcHu-squc/maxresdefault.jpg",
            bgColor: "bg-gray-100",
        },
        {
            title: "Ochi Design",
            subtitle: "Development & Design",
            year: 2024,
            image: "https://i.ytimg.com/vi/LJbkLdtEW00/maxresdefault.jpg",
            bgColor: "bg-green-100",
        },
        {
            title: "Snapalyzer",
            subtitle: "Development & Design",
            year: 2024,
            image: "https://t3.ftcdn.net/jpg/08/83/37/74/360_F_883377429_mHDU0PY3n0rrIkGTfGH1IjRbt0aVoo8W.jpg",
            bgColor: "bg-indigo-100",
        },
    ];


    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);




    return (


        <section className="px-2 sm:px-8 lg:px-20 py-20 relative">



            {/* Hero Section */}
            <BlurFade inView delay={0.25}>
                <motion.section
                    className="text-center mx-auto pb-12 pt-2 px-2 sm:pt-5 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >

                    <h2 className="text-3xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                        <span className="text-black">
                            Explore Our <LineShadowText className="italic">
                                Creations
                            </LineShadowText>
                        </span>
                    </h2>

                    <p className="text-base italic sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                        A curated collection of designs and projects we've crafted with creativity, care, and purpose. Hover to dive into each experience.
                    </p>

                </motion.section>
            </BlurFade>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">

                {projects.map((project, index) => {

                    const isFaded = hoveredIndex !== null && hoveredIndex !== index;

                    return (

                        <MotionEffect inView key={index} slide={{ direction: 'down', }} fade zoom delay={0.4 + index * 0.1}>

                            <motion.div
                                key={index}
                                className={clsx(
                                    "relative p-4 sm:p-6 rounded-2xl transition duration-300 hover:cursor-pointer",
                                    project.bgColor,
                                )}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                animate={{
                                    opacity: isFaded ? 0.9 : 1,
                                    scale: hoveredIndex === index ? 1.02 : 1,
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >


                                <div className="rounded-xl overflow-hidden shadow-xl">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-auto object-cover rounded-xl"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: hoveredIndex === index ? 1.03 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 font-medium">{project.subtitle}</p>
                                    <p className="text-sm text-gray-700 font-medium">{project.year}</p>
                                </div>


                                {/* White overlay only on faded cards */}
                                {isFaded && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/25 backdrop-blur-xs rounded-2xl pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                            </motion.div>

                        </MotionEffect>

                    );

                })}

            </div>

        </section>

    )



}
