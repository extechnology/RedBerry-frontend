import ServicePage from "@/components/services/ServicePage";




export default function ExhibitionService() {


    // Exhibition Sections
    const Exhibitions = [
        {
            title: "CUSTOM EXНІВITION STAND",
            content:
                "Build your own custom show stand or choose from our current range of styles and models. Our stands for the exhibition are lightweight structures covered in customprinted fabric graphics that make them simple to transport and install. Custom show stands can be designed to meet virtually any display or event branding specifications, including portable changing rooms, entrance features, custom workstations, pop-up shops, ec.",
            image: "/custom-exihibition-stand.jpg",
        },
        {
            title: "MODULAR EXHIBITION STAND",
            content: "Our modular exhibition display stands are lightweight, modular structures wrapped in color digitally printed fabric banners, making them easy to transport and install. They also do not require any tools to be assembled.The modular display stand can be designed to enable multiple layout configurations or different stand sizes using the same basic hardware, making it one of the most flexible and cost-effective display options available.",
            image: "/Modular Exihibition Stand.jpg",
        },
        {
            title: "POPUP EXHIBITION STAND",
            content:
                "Pop-up stands are often called pop-up banner stands,pull-up stands, and roll-up banners. But the thing is that they will leave a long-lasting impression on your marketing campaign in Saudi Arabia if used properly. The pop-up stands are a great marketing tool for your business. You can promote your own business products and services by using these stands in Jeddah, Riyadh, Yanbu, Khobar, Makkah, Madinah, and many other cities in Saudi Arabia.",
            image: "/popup-exihibition-stand.jpg",
        },
    ];



    return (


        <section className="w-full h-full">

            <ServicePage
                title="Exhibitions"
                bannerimg="/banner-exihibition.jpg"
                leftimg="/exihibition-hero-1.jpg"
                rightimg="/exihibition-hero-2.jpg"
                discription1="we have custom created event signage and exhibition banners designed to attract attention. Our exhibition stand designers will select the best solutions to create optimum results for your trade show display by incorporating your exhibition graphics and maximize the return on investment from your budget. Providing visitors with familiar logos can draw attendees to your exhibition stand. Thus, a perfectly visible logo or well-branded exhibition signs will give a momentary comfort for visitors. All our exhibition display graphics panels are printed and finished in-house to ensure the very highest quality of service. Promoting and advertising your brand to perfection by utilising our several years of experience and expertise in the field"
                discription2="We create elegance, from sophisticated minimalism to opulence. Optimise impact using layouts that are skillfully created. Your brand mayfascinate with its brightness on every inch of canvas.Smooth Logistics: Success without worry. We take care of the logistics, from planning to execution, so you can concentrate on your event.Tailored Solutions: Since no two brands are the same, why rely on off-the-rack options? We customise our solutions to fit your particular needs.Experiential Excellence: We construct experiences rather than merely create booths. Take your audience on a brand-discovery adventure."
                services={Exhibitions}
            />

        </section>


    )



}
