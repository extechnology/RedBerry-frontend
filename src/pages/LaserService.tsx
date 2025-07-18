import ServicePage from "@/components/services/ServicePage";



export default function LaserService() {



    // Laser Sections
    const Lasers = [
        {
            title: "ACRYLIC LETTER WORK",
            content:
                "specializes in premium Acrylic Letter Work, offering high-quality, customized signage that enhances brand visibility. Our precision-cut letters are durable, weather-resistant, and available in various colors, sizes, and finishes. Ideal for indoor and outdoor branding, we ensure professional installation and eye-catching designs that make your business stand out effortlessly.",
            image: "/acrylic-letter-word-laser.jpg",
        },
        {
            title: "PHENOLIC TAG",
            content:
                "We offers durable and precise Phenolic Tag services, ideal for industrial labeling and equipment identification. Made from high-quality phenolic material, these tags resist heat, chemicals, and wear. Perfect for electrical panels, machinery, and safety signs, our phenolic tags ensure long-lasting clarity, professional appearance, and reliable performance in harsh environments",
            image: "/phenolic-tag-laser.jpg",
        },
        {
            title: "SS TAG",
            content:
                "We provide high-quality Stainless Steel (SS) Tag services for durable and long-lasting identification needs. Ideal for industrial, marine, and outdoor applications, our SS tags are corrosion-resistant, weatherproof, and precisely engraved. They’re ideal for labeling equipment, tracking assets, marking valves, and ensuring safety compliance in demanding environments and harsh conditions.",
            image: "/ss-tag-laser.jpg",
        },
    ];




    return (


        <section className="w-full h-full">

            <ServicePage
                title="Laser Cutting & Engraving"
                bannerimg="/banner-laser.jpg"
                leftimg="/laser-hero-1.jpg"
                rightimg="/laser-hero-2.jpg"
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
