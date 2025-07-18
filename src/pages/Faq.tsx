import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BlurFade } from "@/components/magicui/blur-fade";


// Sample data
const faqs = [
    {
        question: "What services does Redberry offer ?",
        answer: "Redberry provides comprehensive solutions including printing, indoor and outdoor signages, laser cutting, exhibition setups, interior design, and graphic design services tailored to elevate your brand."
    },
    {
        question: "Can I get customized signage for my business ?",
        answer: "Absolutely! We specialize in custom-designed indoor and outdoor signage using materials like acrylic, metal, ACP, and LED to suit your branding and space requirements."
    },
    {
        question: "Do you offer large format printing ?",
        answer: "Yes, we provide high-quality large format printing for banners, hoardings, backdrops, posters, and exhibition graphics, ensuring vibrant visuals and weather durability."
    },
    {
        question: "What types of laser cutting services do you provide ?",
        answer: "We offer precision laser cutting and engraving on materials such as acrylic, wood, MDF, leather, and metal for tags, branding elements, signage, and décor."
    },
    {
        question: "How do I request a quote for a project ?",
        answer: "You can contact us through our website’s enquiry form, email, or call us directly with your project details. Our team will provide a prompt and personalized quotation."
    },
];



export default function FaqSection() {


    return (


        <div className="text-white py-16">


            <BlurFade delay={0.25} inView>

                {/* Hero Section */}
                <section
                    className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('https://t4.ftcdn.net/jpg/03/37/96/37/360_F_337963757_t4TFoOt1DV3UkSn5NvV8nTSghntFpFJZ.jpg')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-0" />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h1>
                        <nav className="inline-flex space-x-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                            <Link to="/" className="text-sm font-semibold text-white hover:underline transition">
                                HOME
                            </Link>
                            <span className="text-sm text-white/70">/</span>
                            <span className="text-sm font-semibold text-white">FAQ</span>
                        </nav>
                    </div>
                </section>

            </BlurFade>



            <BlurFade delay={0.25 * 2} duration={0.7} inView>

                {/* Content Section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-start mt-10 sm:mt-16 px-2 sm:px-6 lg:px-8">



                    {/* Left Image */}
                    <div className="flex justify-center">
                        <img
                            src="/Faq Image.jpg"
                            alt="People Working"
                            loading="lazy"
                            className="rounded-lg w-full max-w-md sm:max-w-md h-auto object-cover"
                        />
                    </div>


                    {/* Right FAQs */}
                    <div>

                        <h4 className="text-sm font-semibold text-gray-500 tracking-widest mb-2 uppercase">
                            FAQS
                        </h4>

                        <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold mb-8 leading-tight">
                            Frequently asked questions
                        </h2>

                        <Accordion type="single" collapsible className="w-full space-y-4">

                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-gray-300 rounded-lg overflow-hidden"
                                >
                                    <AccordionTrigger className="px-6 py-5 hover:cursor-pointer !hover:underline text-gray-900 text-left text-base sm:text-lg font-semibold [&[data-state=open]>svg]:rotate-180">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 py-4 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}


                            {/* Bottom Contact Section */}
                            <section className="w-full mt-10 px-2 sm:px-0">
                                <div className="max-w-xl text-start">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                                        Still have questions?
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        Can’t find the answer you’re looking for? Please contact our customer service.
                                    </p>
                                    <Link to="/contact">
                                        <Button className="bg-black flex items-center hover:bg-zinc-800 hover:scale-105 hover:cursor-pointer text-white px-6 py-3 text-sm font-medium">
                                            <Mail className="w-4 h-4" />
                                            Contact Us
                                        </Button>
                                    </Link>
                                </div>
                            </section>


                        </Accordion>


                    </div>

                </div>

            </BlurFade>

        </div>
    );
}
