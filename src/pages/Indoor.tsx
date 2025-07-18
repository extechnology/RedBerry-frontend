import ServicePage from "@/components/services/ServicePage";



export default function Indoor() {



    // Indoor Sections
    const Indoor = [
        {
            title: "ACRYLIC SIGNAGE",
            content:
                "Redberry offers high-quality Acrylic Signage services, delivering sleek, modern, and durable signage solutions for businesses. Crafted with precision and available in various colors and finishes, our acrylic signs enhance brand visibility both indoors and outdoors. We provide end-to-end service including design, fabrication, and installation tailored to your brand identity.",
            image: "/acrylic-signage-indoor.jpg",
        },
        {
            title: "WOOD SIGNAGE",
            content:
                "We deliver premium Indoor and Outdoor Wood Signage services, combining natural elegance with lasting durability. Ideal for branding, décor, and directional use, our wood signs are crafted from high-quality materials and customized with engraving, painting, or laser work. They add warmth, uniqueness, and rustic charm to any space.",
            image: "/wood-signage-indoor.jpg",
        },
        {
            title: "METAL SIGNAGE",
            content:
                "Durable and stylish Indoor and Outdoor Metal Signage solutions, ideal for corporate, retail, and industrial branding. Crafted from high-quality materials like stainless steel, brass, and aluminum, our metal signs are weather-resistant, corrosion-proof, and fully customizable. We ensure precise cutting, professional finishes, and long-lasting visual impact.",
            image: "/metal-signage-indoor.jpg",
        },
        {
            title: "DIGITAL SCREENS",
            content: "As leaders in the digital screen industry, Redberry combines 5 years of experience with a passion for innovation to deliver exceptional solutions tailored to meet the unique needs of each client. Our team of experts specializes in everything from concept development and design to installation and maintenance, ensuring a seamless and stress-free experience from start to finish.",
            image: "/digital-screen-indoor.jpg",
        },
        {
            title: "DIGITAL SIGNAGE",
            content: "From sleek LED displays to vibrant LCD video walls, our digital signage solutions are perfect for retail environments, corporate lobbies, restaurants, and more. Showcase promotions, share information, and create immersive brand experiences with ease.",
            image: "/digital-signage-indoor.jpg",
        },
        {
            title: "CONSTRUCTION SIGNS",
            content: "Construction signs play a vital role in maintaining safety and organisation on building sites. These signs provide clear instructions, warn of potential hazards, and help control site access. Without proper signage, construction sites become more dangerous, increasing the risk of accidents and injuries.",
            image: "/construction-signage-indoor.jpg",
        },
        {
            title: "TRAFFIC SIGNAGE",
            content: "Redberry Company can provide all types of safety and traffic signage.Our work covers a wide range of highly durable and carefully printed headers and application specific safety products that can be done in the language you need.If your company needs to comply with specific features, you can always tell us about them. We work with different materials, colors, and digital graphics to ensure your safety signage becomes more visible and better represents the values of your brand.",
            image: "/traffic-signage-indoor.jpg",
        },
    ];




    return (


        <section className="w-full h-full">

            <ServicePage
                title="Indoor & Outdoor Signage"
                bannerimg="/indor-banner.jpg"
                leftimg="/indore-hero-1.jpg"
                rightimg="/indore-hero-2.jpg"
                discription1="Whether you're a small business seeking to make a big impact or a multinational
                            corporation aiming to redefine the landscape of your industry, we have the expertise
                            and resources to turn your dreams into reality. With a comprehensive range of
                            services spanning design, fabrication, installation, and maintenance, we offer a
                            seamless end-to-end experience tailored to your specific requirements."
                discription2="Signages such as Front illuminated 3D Letters, Backlighted letters, Acrylic letters,
                            Aluminum channel letters, Brass signs, Edge lighted letters, Acrylic illuminated
                            letters, Led neon, Shop front signages, Building identifications signages, ACP cпc
                            cut flushed type letters, Acrylic push through letters"
                services={Indoor}
            />

        </section>

    )

}
