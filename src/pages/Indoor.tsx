import { BlurFade } from "@/components/magicui/blur-fade";
import { Link } from "react-router-dom";




export default function Indoor() {



    // Indoor Sections
    const Indoor = [
        {
            title: "ACRYLIC SIGNAGE",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBS-0qrL9_nBNR-eirfEeVVemiMa2xtoWcw&s",
        },
        {
            title: "WOOD SIGNAGE",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://i.pinimg.com/736x/02/15/25/021525507a79c115108090ff2772476c.jpg",
        },
        {
            title: "METAL SIGNAGE",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wV_bPBjVSm4u3Fszdzjy7f4TMYNNkfR8lA&s",
        },
        {
            title: "DIGITAL SCREENS",
            content: "As leaders in the digital screen industry, Redberry combines 5 years of experience with a passion for innovation to deliver exceptional solutions tailored to meet the unique needs of each client. Our team of experts specializes in everything from concept development and design to installation and maintenance, ensuring a seamless and stress-free experience from start to finish.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
        {
            title: "DIGITAL SIGNAGE",
            content: "From sleek LED displays to vibrant LCD video walls, our digital signage solutions are perfect for retail environments, corporate lobbies, restaurants, and more. Showcase promotions, share information, and create immersive brand experiences with ease.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
        {
            title: "CONSTRUCTION SIGNS",
            content: "Construction signs play a vital role in maintaining safety and organisation on building sites. These signs provide clear instructions, warn of potential hazards, and help control site access. Without proper signage, construction sites become more dangerous, increasing the risk of accidents and injuries.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
        {
            title: "TRAFFIC SIGNAGE",
            content: "Redberry Company can provide all types of safety and traffic signage.Our work covers a wide range of highly durable and carefully printed headers and application specific safety products that can be done in the language you need.If your company needs to comply with specific features, you can always tell us about them. We work with different materials, colors, and digital graphics to ensure your safety signage becomes more visible and better represents the values of your brand.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
    ];



    return (


        <section className="w-full mx-auto pt-16 bg-[#f4f7fb]">


            {/* Banner */}
            <BlurFade delay={0.25} inView>

                <section
                    className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg')`,
                    }}
                >


                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-0" />


                    <div className="relative z-10 text-center px-4">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Indoor & Outdoor Signage
                        </h1>

                        <nav className="inline-flex space-x-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                            <Link to="/" className="text-sm font-semibold text-white hover:underline transition">
                                Home
                            </Link>
                            <span className="text-sm text-white/70">/</span>
                            <span className="text-sm font-semibold text-white">Indoor & Outdoor Signage</span>
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
                            src="https://a.storyblok.com/f/165154/1280x720/d68ef76c7d/02_importance-maintaining-high-quality-printing-standards.jpg/m/"
                            alt="Worker"
                            loading="lazy"
                            className="rounded-tl-[80px] rounded-br-2xl object-cover h-[500px] w-full"
                        />


                        {/* Right image with slight curve */}
                        <img
                            src="https://media.gettyimages.com/id/114283866/photo/matching-the-colour.jpg?s=612x612&w=gi&k=20&c=B1C5wIdZMJT3fyG4S7gUG0PSpSOTlqOnJvA65fKSfHo="
                            alt="Roof Work"
                            loading="lazy"
                            className="rounded-br-[80px] rounded-tl-2xl object-cover h-[500px] w-full"
                        />

                    </div>



                    {/* Right Side Content */}
                    <div className="space-y-6">

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                            INDOOR & OUTDOOR SIGNAGE
                        </h2>


                        <p className="text-gray-600 text-base text-justify">
                            Whether you're a small business seeking to make a big impact or a multinational
                            corporation aiming to redefine the landscape of your industry, we have the expertise
                            and resources to turn your dreams into reality. With a comprehensive range of
                            services spanning design, fabrication, installation, and maintenance, we offer a
                            seamless end-to-end experience tailored to your specific requirements.
                        </p>


                        <p className="text-gray-600 text-base text-justify">
                            Signages such as Front illuminated 3D Letters, Backlighted letters, Acrylic letters,
                            Aluminum channel letters, Brass signs, Edge lighted letters, Acrylic illuminated
                            letters, Led neon, Shop front signages, Building identifications signages, ACP cпc
                            cut flushed type letters, Acrylic push through letters
                        </p>


                    </div>

                </section>
                
            </BlurFade>



            {/* Services */}
            <section className="bg-[#f4f7fb] border-t-2 border-dashed border-gray-200 py-10 sm:pb-16 px-2 sm:px-6 lg:px-12 rounded-2xl">


                <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">


                    {Indoor.map((section, index) => (


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


        </section>


    )


}
