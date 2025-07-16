import { BlurFade } from "@/components/magicui/blur-fade";
import { Link } from "react-router-dom";



// TypeScript interface for props
interface ServicePageProps {

    services: { title: string; content: string; image: string}[]
    bannerimg: string
    title : string
    leftimg : string
    rightimg: string
    discription1: string
    discription2: string

}



export default function ServicePage({ services , bannerimg , title , leftimg , rightimg , discription1 , discription2 }: ServicePageProps) {



    return (


        <section className="w-full mx-auto pt-16 bg-[#f4f7fb]">


            {/* Banner */}
            <BlurFade delay={0.25} inView>

                <section
                    className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('${bannerimg}')`,
                    }}
                >


                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-0" />


                    <div className="relative z-10 text-center px-4">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            {title}
                        </h1>

                        <nav className="inline-flex space-x-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                            <Link to="/" className="text-sm font-semibold text-white hover:underline transition">
                                Home
                            </Link>
                            <span className="text-sm text-white/70">/</span>
                            <span className="text-sm font-semibold text-white">{title}</span>
                        </nav>

                    </div>

                </section>


            </BlurFade>



            {/* Hero Section */}
            <BlurFade delay={0.25 * 3} duration={0.7} inView>


                <section className="max-w-7xl mx-auto px-2 py-10 sm:py-16 grid md:grid-cols-2 gap-10 items-center">


                    {/* Left Side Images */}
                    <div className="grid grid-cols-2 gap-4 relative">


                        {/* Left image */}
                        <img
                            src={leftimg}
                            alt="Worker"
                            loading="lazy"
                            className="rounded-tl-[80px] rounded-br-2xl object-cover h-[500px] w-full"
                        />


                        {/* Right image with slight curve */}
                        <img
                            src={rightimg}
                            alt="Roof Work"
                            loading="lazy"
                            className="rounded-br-[80px] rounded-tl-2xl object-cover h-[500px] w-full"
                        />

                    </div>



                    {/* Right Side Content */}
                    <div className="space-y-6">

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                           {title?.toUpperCase()}
                        </h2>


                        <p className="text-gray-600 text-base text-justify">
                            {discription1}
                        </p>


                        <p className="text-gray-600 text-base text-justify">
                            {discription2}
                        </p>

                    </div>

                </section>

            </BlurFade>



            {/* Services */}
            <section className="bg-[#f4f7fb] border-t-2 border-dashed border-gray-200 py-10 sm:pb-16 px-2 sm:px-6 lg:px-12 rounded-2xl">


                <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">


                    {services?.map((section, index) => (


                        <BlurFade delay={0.25 * 3} duration={0.7} inView>


                            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">

                                <img
                                    src={section?.image}
                                    alt={section?.title}
                                    loading="lazy"
                                    className={`w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-md ${index % 2 === 1 ? "md:order-last" : ""
                                        }`}
                                />

                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                                        {section?.title.toUpperCase()}
                                    </h3>
                                    <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed">
                                        {section?.content}
                                    </p>
                                </div>

                            </div>

                        </BlurFade>

                    ))}

                </div>

            </section>


        </section>

    )


}
