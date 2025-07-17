import Slider from "@/components/home/Slider";
import BentoGrid from "@/components/home/BentoGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesSection from "@/components/home/ServicesSection";
import Cta from "@/components/home/Cta";
import { BlurFade } from "@/components/magicui/blur-fade";



export default function Home() {



    return (


        <section className="w-full flex-col items-center justify-center">



            {/* Hero Section */}
            <div className="w-full h-full">
                <BlurFade delay={0.25} duration={0.5} inView>
                    <Slider />
                </BlurFade>
            </div>


            {/* BentoGrid Section */}
            <div className="w-full h-full">
                <BentoGrid />
            </div>


            {/* Services Section */}
            <div className="w-full h-full">
                <ServicesSection />
            </div>


            {/* Why Choose Us Section */}
            <div className="w-full h-full">
                <WhyChooseUs />
            </div>


            {/* Call to Action Section */}
            <div className="w-full h-full">
                <Cta />
            </div>


        </section>


    );

}
