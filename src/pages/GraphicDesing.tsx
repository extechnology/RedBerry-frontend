import ServicePage from "@/components/services/ServicePage";




export default function GraphicDesing() {



    // Graphic Desing Sections
    const GraphicDesing = [
        {
            title: "Print design",
            content: "Print design is a valuable asset to any business,even those that predominantly use digital advertising.The key to success is in reaching the widest possible audience, and by using print design in tandem with digital advertising, your chances will increase significantly.At edirect, we recognise the importance of print design which is why we offer it as one of our core services.",
            image: "/print design-graphic.jpg",
        },
        {
            title: "Signage Design For Your Brand",
            content: "Not many employees will work to promote your brand and business 24 hours a day, 7 days a week, 365 days a year.But a well- designed, strategically placed sign will! Signage is an investment that will pay for itself many times over, as it attracts customers and generates profits.What's more is that the beauty of signage is that doesn't even need to be placed at your business.In fact, signage can be strategically positioned almost anywhere a high-volume of footfall is expected. From the side of a busy road to an advertising hoarding at a large public event, a well-placed sign can put you in touch with hundreds, if not thousands of potential customers. Better still, depending on where it is positioned, most signage requires only an initial investment making it far more cost-effective in the long run.",
            image: "/signage design for your brand-graphic.jpg",
        },
        {
            title: "Video Editing",
            content:"Engaging reels polished with the touch of professional editing.are one click away from getting your videos out there. Create more content, reach more people, sell more, engage more, DO MORE." ,
            image: "/video editing-graphic.jpg",
        },
        {
            title: "Motion Design",
            content: "Captivate your audience with Redberry motion design services. Get moving with a team of fully stacked motion designers and enhance your brand's assets across your website, digital campaigns ads and more.",
            image: "/motion design-graphic.jpg",
        },
        {
            title: "Illustration Design Services",
            content: "Ignite the force of visual storytelling, from bespoke illustrations to captivating infographics, our talented artists sculpt mesmerizing designs that deeply connect with your audience and amplify your brand's message.",
            image: "/illustration design-graphic.jpg",
        },
        {
            title: "Presentation Design",
            content: "Engage, persuade and delight with Redberry Presentation Design Services. From on-point PowerPoints to pitch-perfect pitch decks, we craft custom presentations and templates that suit your needs.",
            image: "/Presentation-graphic.jpg",
        },
    ];



    return (


        <section className="w-full h-full">


            <ServicePage
                title="Graphic Design"
                bannerimg="/BANNER-graphicsDesing.jpg"
                leftimg="/Grahic design-hero1.jpg"
                rightimg="/Grahic design-hero2.jpg"
                discription1="Using our in-house expert graphic design team, we are able to offer our clients bespoke and
contemporary graphic design services, including branding, print design, and digital design. Unlike other
graphic design company, every design created by Redberry will be completely bespoke to you and your
business and will not recycle any pre-existing designs."

                discription2="Every design will be created using the latest software and will be completely tailored to the needs ofyour
business. The design process will be planned in detail between you and our graphic designer, who will
create and adjust a wide range of designs to meet your specifications and needs. There will also be a
quality control process in which every design will be stringently checked to ensure it matches the
customer's expectations and helps maximize your brand's potential."
                services={GraphicDesing}
            />


        </section>


    )



}
