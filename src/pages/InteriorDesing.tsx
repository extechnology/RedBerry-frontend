import ServicePage from "@/components/services/ServicePage";



export default function InteriorDesing() {



    // Interior Desing Sections
    const InteriorDesing = [
        {
            title: "LUXURY VILLA DESIGNS",
            content:
                "Redberry Design is the top-rated villa design company in the Saudi Arabia. We craft living spaces that blend timeless elegance with modern interior comfort. Our expertise in modern villa design features contemporary aesthetic elements whereas classic villa design focuses on charm and sophistication. Each project features innovative solutions to ensure both visual appeal and maximum functionality for your villa.",
            image: "/luxury-villa-design-interior.jpg",
        },
        {
            title: "Architectural Design",
            content: "We do Sadi Arabia villa design style architectures for you with precision expertise. We ensure aesthetic appeal and functionality for an optimal design.",
            image: "/architectural-interior.jpg",
        },
        {
            title: "Landscape Design",
            content:
                "Our luxury villa landscape design service transforms the outdoor spaces into serene retreats with blending greenery that matches your villa",
            image: "/8. Landscape Design .jpg",
        },
        {
            title: "Electrical & Plumbing Design",
            content: "For a stress-free living experience, we employ the help of experienced professionals to integrate efficient systems for power and water flow.",
            image: "/electrical,plumbing-interior.jpg",
        },
        {
            title: "Furniture & Decor Selection",
            content: "With custom-made furniture and bespoke decorative elements, we improve your villa's interior design in Saudi Arabia with modern trends and",
            image: "/furniture-interior.jpg",
        },
    ];




    return (


        <section className="w-full h-full">

            <ServicePage
                title="Interior Design & Work"
                bannerimg="/interior-banner.jpg"
                leftimg="/interior-design-hero-1.jpg"
                rightimg="/interior-design-hero-2.jpg"
                discription1="Redberry is an interior design and contracting company built on a full-scale approach that covers
conceptual design, contracting, furniture, and consultancy. Based in Jeddah, our services expand to
commercial and residential projects, including luxurious developments and simple, comfortable
homes, starting from foundational sketching, and reaching the last detail of finishing works."
                discription2="Ready to elevate your space intoa masterpiece? Experience the Redberry Design World difference.
Schedule your complimentary design consultation now to discover how we can transform your vision
into reality. Your dream space awaits-let's bring it to life together."
                services={InteriorDesing}
            />

        </section>


    )


}
