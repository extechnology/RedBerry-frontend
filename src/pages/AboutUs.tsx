import { Building2, Globe2, Hammer, Landmark, Award, ArrowRight } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { InView } from 'react-intersection-observer';
import { BlurFade } from "@/components/magicui/blur-fade";


export default function AboutUs() {


    // Stats
    const stats = [
        { value: 100, label: "Employees", icon: Building2 },
        { value: 15, label: "Countries", icon: Globe2 },
        { value: 60, label: "Projects done", icon: Hammer },
        { value: 5, label: "Offices", icon: Landmark },
        { value: 25, label: "Project Awards", icon: Award },
    ];



    // Vision Sections
    const Vision = [
        {
            title: "Inception Vision:",
            content:
                "VisionCrafters was founded on a collective vision shared among seasoned professionals who sought to redefine excellence in the construction industry. With decades of experience under their belts, our founders established a company that prioritizes innovation, integrity, and unwavering dedication to client satisfaction. This initial vision served as the driving force behind the creation of VisionCrafters, setting the stage for the company’s remarkable journey.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBS-0qrL9_nBNR-eirfEeVVemiMa2xtoWcw&s",
        },
        {
            title: "Evolutionary Journey:",
            content:
                "From its humble beginnings as a startup to its current standing as a respected industry leader, VisionCrafters has undergone a remarkable evolutionary journey. Throughout this process, the company has remained steadfast in upholding its core values while continuously embracing opportunities for growth and improvement. This commitment to evolution has allowed VisionCrafters to adapt to changing landscapes, overcome challenges, and emerge as a dynamic and forward-thinking organization.",
            image: "https://i.pinimg.com/736x/02/15/25/021525507a79c115108090ff2772476c.jpg",
        },
        {
            title: "Commitment to Excellence:",
            content:
                "At VisionCrafters, excellence is not merely a goal to be achieved but a fundamental aspect of our company culture. Every member of our team, from skilled craftsmen to experienced project managers, is deeply committed to delivering outstanding quality and craftsmanship in every project we undertake. This dedication to excellence is reflected in our meticulous attention to detail, our adherence to the highest industry standards, and our unwavering commitment to exceeding client expectations.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wV_bPBjVSm4u3Fszdzjy7f4TMYNNkfR8lA&s",
        },
        {
            title: "Client-Centric Approach:",
            content:
                "Central to our success is our unwavering focus on our clients. We understand that each project is unique, and we take the time to listen, understand, and tailor our services to meet the specific needs and objectives of our clients. Building lasting relationships based on trust, transparency, and exceptional service is at the heart of everything we do. Our client-centric approach ensures that every project we undertake is not only completed to the highest standards of quality but also exceeds our clients’ expectations, earning their trust and loyalty in the process.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
    ];




    return (


        <section className="bg-white text-black px-2 sm:px-8 md:px-16 sm:py-20 pt-20 pb-10">


            <BlurFade delay={0.25} inView>

                {/* Heading */}
                <div className="text-center max-w-3xl text-md mx-auto mb-5 sm:pt-5">
                    <p className="text-green-600 font-semibold">About Us</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
                        Bringing Your Vision to Life <br className="hidden sm:block" />
                        with Expertise and Dedication
                    </h2>
                </div>


                {/* Image */}
                <div className="w-full rounded-lg overflow-hidden mb-5 sm:mb-10">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmr6ZqsrxMGdZpRJmtuMsnV05bIpPA6a_6jA&s" // replace this with actual imported image or public path
                        alt="Team"
                        loading="lazy"
                        className="w-full h-[80vh] object-cover"
                    />
                </div>


            </BlurFade>



            <BlurFade delay={0.25} duration={0.6} inView>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 bg-black text-white p-6 rounded-xl text-center mb-10 sm:mb-14">
                    {stats.map((stat, idx) => (
                        <InView key={idx} triggerOnce threshold={0.5}>
                            {({ inView, ref }) => (
                                <div ref={ref}>
                                    <stat.icon className="mx-auto mb-2" size={28} />
                                    {inView ? (
                                        <NumberTicker value={stat.value} className="text-white text-2xl font-bold" />
                                    ) : (
                                        <div className="text-white text-2xl font-bold">0</div>
                                    )}
                                    <p className="text-sm text-gray-300">{stat.label}</p>
                                </div>
                            )}
                        </InView>
                    ))}
                </div>

            </BlurFade>



            <BlurFade delay={0.25 * 3} duration={0.6} inView>

                {/* Story Section */}
                <div className="text-center max-w-3xl mx-auto mb-6">
                    <p className="text-green-600 font-semibold">Crafting Excellence</p>
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2">The VisionCrafters Journey Story</h3>
                    <p className="text-gray-700 mt-4 text-sm sm:text-base">
                        At VisionCrafters, our journey began with a simple yet powerful vision to transform the landscape of construction
                        by combining innovation, craftsmanship, and integrity. Founded 12 years ago by a team of passionate industry veterans,
                        VisionCrafters quickly established itself as a trusted name. Our story is one of perseverance, excellence, and bold vision.
                    </p>
                </div>

            </BlurFade>



            {/* Visions */}
            <section className="bg-[#f4f7fb] py-10 sm:py-16 px-2 sm:px-6 lg:px-12 rounded-2xl">

                <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">

                    {Vision.map((section, index) => (

                        <BlurFade delay={0.25 * 3} duration={0.7} inView>

                            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">

                                <img
                                    src={section.image}
                                    alt={section.title}
                                    loading="lazy"
                                    className={`w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-md ${index % 2 === 1 ? "md:order-last" : ""
                                        }`}
                                />

                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>

                            </div>

                        </BlurFade>

                    ))}

                </div>

            </section>





            <section className="pt-10 sm:pt-16 px-1 sm:px-6 lg:px-0">


                <BlurFade delay={0.25 * 3} duration={0.7} inView>


                    <div className="bg-gradient-to-r from-[#d8f6da] to-[#e4ecf9] rounded-3xl p-4 sm:p-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 shadow-lg">


                        {/* Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/046/025/400/small_2x/business-center-building-isolated-on-transparent-background-free-png.png"
                                alt="Modern Building"
                                loading="lazy"
                                className="w-full h-[60vh] max-w-sm sm:max-w-md md:max-w-full object-contain"
                            />
                        </div>


                        {/* Text Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left">

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Empowering Your <br className="hidden sm:block" />
                                Vision: <span className="text-red-600">Request Quote</span>
                            </h2>

                            <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-md">
                                Ready to bring your vision to life? Requesting a quote from VisionCrafters is the first step towards turning your dreams into reality. Our team of experts is standing by to provide you with a personalized estimate tailored to your project’s needs.
                            </p>

                            <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">

                                <button className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:cursor-pointer transition">
                                    Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                                </button>

                                <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 text-sm font-semibold rounded-full border hover:cursor-pointer border-gray-300 hover:bg-gray-100 transition">
                                    Learn More
                                </button>

                            </div>

                        </div>

                    </div>

                </BlurFade>

            </section>

        </section>

    )

}
