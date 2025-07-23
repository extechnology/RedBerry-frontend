import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import ServicePage from "@/components/services/ServicePage";






export default function GiftandPrmo() {


    
    // Gift and Promotional Items Sections
    const GiftandPrmo = [
        {
            title: "Printed Gifts & Promotional",
            content:
                "We are committed to delivering high-quality printed gifts and promotional items that reflect your brand’s excellence. Each product is crafted with precision, using premium materials and advanced printing techniques to ensure durability and a professional finish. Our streamlined production and logistics ensure punctual delivery, meeting tight deadlines without compromising on quality. Whether for corporate events, giveaways, or brand promotions, Redberry guarantees reliable service, attention to detail, and timely execution to make your brand shine.",
            image: "/6.PRINTED GIFTS & PROMOTIONAL.jpg",
        },
        {
            title: "Crafted  Gifts & promotional Items",
            content:
                "Specializes in innovatively and uniquely designed crafted gifts and promotional items that captivate and impress. Each product is thoughtfully created with a blend of creativity, functionality, and premium craftsmanship to reflect your brand’s uniqueness. We prioritize quality in every detail and ensure every item meets high aesthetic and durability standards. With a strong commitment to punctual delivery, Redberry guarantees timely execution, making us a reliable partner for all your branding and gifting needs.",
            image: "/6.CRAFTED GIFTS & PROMOTIONAL ITEMS.jpg",
        },

    ];




    // Gallery images
    const GiftGallery = [
        {
            image: "/gift-gallery-1.jpg",
        },
        {
            image: "/gift-gallery-2.jpg",
        },
        {
            image: "/gift-gallery-3.jpg",
        },
        {
            image: "/gift-gallery-4.jpg",
        },
        {
            image: "/gift-gallery-5.jpg",
        },
    ];




    return (

        <section className="w-full h-full">


            {/* GiftandPrmo Service section */}
            <ServicePage
                title="Gifts & Promotional Items"
                bannerimg="/Gift-banner.jpg"
                leftimg="/6.Gift & promotional items-hero-1.jpg"
                rightimg="/6.Gift & promotional items-hero-2.jpg"
                discription1="We offer customized gift and promotional items tailored to elevate your brand identity. From corporate giveaways to event merchandise, we provide high-quality, creatively branded products that leave a lasting impression. Our solutions are designed to enhance visibility, build customer loyalty, and make your brand stand out effortlessly."
                discription2="Custom Printed T-Shirts | Personalized Mugs | Engraved Pens | Branded Notebooks| Keychains with Logo | Tote Bags & Eco Bags | Customized Water Bottles | Corporate Gift Boxes | USB Flash Drives | Printed Caps & Hats | Mouse Pads | Lanyards & ID Card Holders |Phone Holders & Stands | Wall & Desk Calendars |Custom Diaries & Planners | Ceramic Plates & Souvenirs | Printed Umbrellas | Magnetic Stickers & Badges | Wooden Engraved Awards"
                services={GiftandPrmo}
            />


            <div className="mx-auto px-2 py-8">


                {/* Section Header */}
                <MotionEffect
                    fade
                    blur="10px"
                    transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                    }}
                    inView
                >

                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
                            Delivered Items
                            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[120%] h-3">
                                <svg viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M2 5C30 10 170 0 198 5" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
                            Explore our gift and promotional items, designed to enhance your brand's visibility and engagement. From printed gifts to crafted items, we offer a variety of options to suit your promotional needs.
                        </p>
                    </div>


                </MotionEffect>



                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-0 px-0 sm:px-16">
                    {GiftGallery.map((image, index) => (

                        <MotionEffect inView key={index} slide={{ direction: 'down', }} fade zoom delay={0.4 + index * 0.1}>
                            <div className="relative">
                                <img
                                    src={image.image}
                                    alt={`Gallery ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </MotionEffect>
                    ))}
                </div>


            </div>


        </section>


    )


}
