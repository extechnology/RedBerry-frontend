import { Flame } from "lucide-react";
import { CountingNumber } from "../animate-ui/text/counting-number";
import { MotionEffect } from "../animate-ui/effects/motion-effect";



// Feature data
const features = [
    {
        count: 30,
        label: "Happy Clients",
        image: "https://c0.wallpaperflare.com/preview/893/649/155/man-operating-laptop-on-top-of-table.jpg",
    },
    {
        count: 15,
        label: "Your Growth Partner",
        image: "https://media.istockphoto.com/id/1390242644/photo/smiling-people-in-the-meeting-room-using-a-laptop-searching-s.jpg?s=612x612&w=0&k=20&c=DtQoaRXByFbFNUXk1ZNIeWuQhTzKjsyC-1PeyenkfcE=",
    },
    {
        count: 35,
        label: "Happy Clients",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LpCCRBf3ATtMGbbX9BRpmat3_Za-c39vm_-Ipa05gCJFET9MhvMLC_OIRo6livZ4qM4&usqp=CAU",
    },
    {
        count: 18,
        label: "Your Growth Partner",
        image: "https://img.freepik.com/premium-photo/smiling-multiracial-family-couple-enjoy-freelancing-sitting-table-working-laptops-together_1048944-25489632.jpg",
    },
];



export default function WhyChooseUs() {


    return (


        <section className="bg-white py-10 sm:py-16 border-t-2 border-dashed border-gray-300 px-2 sm:px-10 lg:px-20 text-black">


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
                    <p className="text-sm text-pink-600 font-medium mb-2 animate-pulse">● Why Choose Us</p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our mission is to drive progress and enhance the lives of our customers
                        by delivering superior products and services that exceed.
                    </p>
                </div>
            </MotionEffect>



            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                {features.map((item, idx) => (

                    <MotionEffect inView key={idx} slide={{ direction: 'down', }} fade zoom delay={0.4 + idx * 0.1}>

                        <div
                            key={idx}
                            className="rounded-3xl overflow-hidden relative group shadow-md"
                        >

                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute bottom-4 left-4 text-white">

                                <div className="flex items-center gap-2 text-2xl font-bold">
                                    <p> <CountingNumber inView number={item.count} className="text-2xl" />+</p>
                                    <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center">
                                        <Flame className="w-4 h-4" />
                                    </div>
                                </div>

                                <p className="text-sm font-medium mt-1">{item.label}</p>

                            </div>

                        </div>

                    </MotionEffect>

                ))}


            </div>

        </section>

    );
}
