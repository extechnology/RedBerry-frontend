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
            title: "Our Vision:",
            content:
                "At Redberry Advertising, our vision is to become a trusted leader in the branding and printing industry by delivering excellence, spreading knowledge, and upholding values that drive meaningful impact. We aim to be recognized not just for our creativity, but for the integrity and innovation that define our work. Our focus is on building long-term value for the company while nurturing enduring relationships with our clients. We strive to understand our clients’ unique business goals and needs, allowing us to align our strategies with their objectives and deliver solutions that foster growth, recognition, and lasting brand success.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBS-0qrL9_nBNR-eirfEeVVemiMa2xtoWcw&s",
        },
        {
            title: "Our Mission:",
            content:
                "To offer our clients good quality services and innovative integrated creative design and print solutions. To offer a truly marketing expertise and experience from client service to the nal product. To provide a one stop communication base offering consolidated services and products in marketing and communication . Consider working and serving our clients on time with meeting deadlines as per clients' requirements and orders.We take pride in the client relationships that have developed, resulting in interdependency and mutual growth.",
            image: "https://i.pinimg.com/736x/02/15/25/021525507a79c115108090ff2772476c.jpg",
        },
        {
            title: "Evolutionary Journey:",
            content:
                "We always prioritize a client-centric approach, which is at the heart of every project and creative process. We prioritize understanding our clients’ goals, brand identity, and specific needs to deliver tailored solutions that truly resonate. From initial consultation to final delivery, we focus on collaboration, transparency, and excellence. Our commitment ensures each creation not only meets expectations but also adds value to the client’s brand. By putting clients first, we build lasting relationships and impactful results.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wV_bPBjVSm4u3Fszdzjy7f4TMYNNkfR8lA&s",
        },
        {
            title: "Uninterrupted Approach:",
            content:
                "Central to our success is our unwavering focus on our clients. We understand that each project is unique, and we take the time to listen, understand, and tailor our services to meet the specific needs and objectives of our clients. Building lasting relationships based on trust, transparency, and exceptional service is at the heart of everything we do. Our client-centric approach ensures that every project we undertake is not only completed to the highest standards of quality but also exceeds our clients’ expectations, earning their trust and loyalty in the process.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
    ];




    return (


        <section className="bg-white text-black px-2 sm:px-8 md:px-16 sm:py-20 pt-20 pb-10">


            <BlurFade delay={0.25} inView>

                {/* Heading */}
                <div className="text-center max-w-7xl text-md mx-auto mb-5 sm:pt-5">
                    <p className="text-green-600 font-semibold">About Us</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
                        Where every pixel and print speaks quality <br className="hidden sm:block" />
                        We make your brand or Service unforgettable
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
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2">The Redberry's Journey Story</h3>
                    <p className="text-gray-700 mt-4 text-sm sm:text-base">
                        Redberry Advertising is a creative agency specializing in branding, promotion, and design. We deliver
                        impactful visual communication with a focus on results and client satisfaction. Our passionate team crafts
                        standout brand identities and campaigns that add value and elevate your business through creativity and strategic thinking.

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
                                Transforming ideas into impactful designs and print solutions. Through creative expertise and personalized service, we bring brands to life, ensuring every project reflects the client’s goals, identity, and message with clarity and excellence.
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
