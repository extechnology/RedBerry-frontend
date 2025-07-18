import ServicePage from "@/components/services/ServicePage";



export default function LaserService() {



    // Laser Sections
    const Lasers = [
        {
            title: "ACRYLIC LETTER WORK",
            content:
                "specializes in premium Acrylic Letter Work, offering high-quality, customized signage that enhances brand visibility. Our precision-cut letters are durable, weather-resistant, and available in various colors, sizes, and finishes. Ideal for indoor and outdoor branding, we ensure professional installation and eye-catching designs that make your business stand out effortlessly.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBS-0qrL9_nBNR-eirfEeVVemiMa2xtoWcw&s",
        },
        {
            title: "PHENOLIC TAG",
            content:
                "We offers durable and precise Phenolic Tag services, ideal for industrial labeling and equipment identification. Made from high-quality phenolic material, these tags resist heat, chemicals, and wear. Perfect for electrical panels, machinery, and safety signs, our phenolic tags ensure long-lasting clarity, professional appearance, and reliable performance in harsh environments",
            image: "https://i.pinimg.com/736x/02/15/25/021525507a79c115108090ff2772476c.jpg",
        },
        {
            title: "SS TAG",
            content:
                "We provide high-quality Stainless Steel (SS) Tag services for durable and long-lasting identification needs. Ideal for industrial, marine, and outdoor applications, our SS tags are corrosion-resistant, weatherproof, and precisely engraved. They’re ideal for labeling equipment, tracking assets, marking valves, and ensuring safety compliance in demanding environments and harsh conditions.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wV_bPBjVSm4u3Fszdzjy7f4TMYNNkfR8lA&s",
        },
    ];




    return (


        <section className="w-full h-full">

            <ServicePage
                title="Laser Cutting & Engraving"
                bannerimg="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
                leftimg="https://a.storyblok.com/f/165154/1280x720/d68ef76c7d/02_importance-maintaining-high-quality-printing-standards.jpg/m/"
                rightimg="https://media.gettyimages.com/id/114283866/photo/matching-the-colour.jpg?s=612x612&w=gi&k=20&c=B1C5wIdZMJT3fyG4S7gUG0PSpSOTlqOnJvA65fKSfHo="
                discription1="Acrylic signs combine elegance with endurance. Their sleek finish and durable nature make them a
                            favorite for businesses aiming for a modern, polished look. Perfect for both indoor and outdoor settings,
                            these signs lend a touch of sophistication, reflecting a brand's commitment to quality and contemporary
                            aesthetics."
                discription2="Choosing Redberry for your acrylic signage needs is a step towards perfection. Our craftsmen mold and
                            finish each sign with precision, ensuring a flawless look that stands the test of time. By merging artistry
                            with acrylic's natural charm, we create signs that are as robust as they are refined. Experience the blend
                            of beauty and brilliance with Redberry' acrylic sign solution"
                services={Lasers}
            />


        </section>



    )


}
