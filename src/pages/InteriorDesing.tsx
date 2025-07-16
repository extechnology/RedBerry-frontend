import ServicePage from "@/components/services/ServicePage";



export default function InteriorDesing() {



    // Interior Desing Sections
    const InteriorDesing = [
        {
            title: "LUXURY VILLA DESIGNS",
            content:
                "Redberry Design is the top-rated villa design company in the Saudi Arabia. We craft living spaces that blend timeless elegance with modern interior comfort. Our expertise in modern villa design features contemporary aesthetic elements whereas classic villa design focuses on charm and sophistication. Each project features innovative solutions to ensure both visual appeal and maximum functionality for your villa.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBS-0qrL9_nBNR-eirfEeVVemiMa2xtoWcw&s",
        },
        {
            title: "Architectural Design",
            content: "We do Sadi Arabia villa design style architectures for you with precision expertise. We ensure aesthetic appeal and functionality for an optimal design.",
            image: "https://i.pinimg.com/736x/02/15/25/021525507a79c115108090ff2772476c.jpg",
        },
        {
            title: "Landscape Design",
            content:
                "Our luxury villa landscape design service transforms the outdoor spaces into serene retreats with blending greenery that matches your villa",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wV_bPBjVSm4u3Fszdzjy7f4TMYNNkfR8lA&s",
        },
        {
            title: "Electrical & Plumbing Design",
            content: "For a stress-free living experience, we employ the help of experienced professionals to integrate efficient systems for power and water flow.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
        {
            title: "Furniture & Decor Selection",
            content: "With custom-made furniture and bespoke decorative elements, we improve your villa's interior design in Saudi Arabia with modern trends and",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s",
        },
    ];




    return (


        <section className="w-full h-full">

            <ServicePage
                title="Interior Design"
                bannerimg="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
                leftimg="https://a.storyblok.com/f/165154/1280x720/d68ef76c7d/02_importance-maintaining-high-quality-printing-standards.jpg/m/"
                rightimg="https://media.gettyimages.com/id/114283866/photo/matching-the-colour.jpg?s=612x612&w=gi&k=20&c=B1C5wIdZMJT3fyG4S7gUG0PSpSOTlqOnJvA65fKSfHo="
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
