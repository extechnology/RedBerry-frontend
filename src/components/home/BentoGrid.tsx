import { MotionEffect } from "../animate-ui/effects/motion-effect"



export default function BentoGrid() {


    return (


        <section className="px-2 py-8 sm:py-16 md:px-8 max-w-7xl mx-auto">


            {/* Header */}
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
                    <h2 className="text-4xl md:text-6xl font-semibold mb-4">
                        Your brand deserves to stand out — we make it happen.
                    </h2>
                    <p className="text-md text-gray-700 mb-1 font-medium max-w-2xl mx-auto">
                        we believe every brand has a unique story. Our creative design and professional printing services ensure your brand stands out with impact, clarity, and lasting visual appeal.
                    </p>
                </div>
            </MotionEffect>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">


                {/* Card 1 */}
                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.3}>
                    <div className="relative rounded-4xl overflow-hidden flex flex-col h-[600px]">

                        <img
                            src="/Bento-1.jpg"
                            alt="Ski Community"
                            loading="lazy"
                            className="w-full h-full object-cover absolute inset-0 z-0"
                        />

                    </div>
                </MotionEffect>


                {/* Card 2 (with gap between images) */}
                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.4}>
                   
                    <div className="flex flex-col justify-between rounded-4xl overflow-hidden h-[600px] gap-y-4">


                        {/* Top Image with Overlay */}
                        <div className="relative h-1/2 rounded-4xl overflow-hidden">

                            <img
                                src="/Bento-2.jpg"
                                alt="Faster"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />

                        </div>


                        {/* Bottom Image */}
                        <div className="h-1/2 rounded-4xl overflow-hidden">
                            <img
                                src="/Bento-3.jpg"
                                alt="Ski People"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                </MotionEffect>



                {/* Card 3 */}
                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.5}>
                  
                    <div className="relative rounded-4xl overflow-hidden flex flex-col h-[600px]">

                        <img
                            src="/Bento-4.jpg"
                            alt="Training Rate"
                            loading="lazy"
                            className="w-full h-full object-cover absolute inset-0 z-0"
                        />

                    </div>
                
                </MotionEffect>



                {/* Card 4 */}
                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.6}>

                    <div className="relative rounded-4xl overflow-hidden flex flex-col h-[600px] sm:col-span-2 lg:col-span-1">

                        <img
                            src="/Bento-5.jpg"
                            alt="Subscription"
                            loading="lazy"
                            className="w-full h-full object-cover absolute inset-0 z-0"
                        />

                    </div>
                
                </MotionEffect>


            </div>


        </section>

    )


}
