import { MotionEffect } from "../animate-ui/effects/motion-effect"
import { CountingNumber } from "../animate-ui/text/counting-number"





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
                            src="https://media.istockphoto.com/id/92166101/photo/skier-jumping.jpg?s=612x612&w=0&k=20&c=sstavNuQwlshEfHpSRPRZfUxrqKyyEvskvt7BZoobbQ="
                            alt="Ski Community"
                            loading="lazy"
                            className="w-full h-full object-cover absolute inset-0 z-0"
                        />

                        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 text-center rounded-4xl px-4 py-10 z-10">
                            <h4 className="text-sm font-medium text-gray-700">Community</h4>
                            <p className="text-4xl font-medium text-black">
                                <CountingNumber inView number={30} decimalPlaces={1} decimalSeparator="." className="text-4xl" />k
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Discover the Joy of Skiing, and join the skiing community onsite now.
                            </p>
                        </div>

                    </div>
                </MotionEffect>


                {/* Card 2 (with gap between images) */}
                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.4}>
                    <div className="flex flex-col justify-between rounded-4xl overflow-hidden h-[600px] gap-y-4">


                        {/* Top Image with Overlay */}
                        <div className="relative h-1/2 rounded-4xl overflow-hidden">

                            <img
                                src="https://media.istockphoto.com/id/1424605124/photo/young-man-taking-selfie-picture-with-smart-cell-phone-hiking-mountain-on-snowy-slope-happy.jpg?s=612x612&w=0&k=20&c=jr4JrFnFyc2IZvD5N4LcIwzEyqlQ7dIHIQKBU_2h6fk="
                                alt="Faster"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />


                            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 text-center rounded-4xl px-4 py-10 z-10">
                                <h4 className="text-sm font-medium text-gray-700">Training Rate</h4>
                                <p className="text-4xl font-medium text-black">
                                    <CountingNumber inView number={48} className="text-4xl" />%
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Gradually challenge yourself with steeper slopes and varied conditions.
                                </p>
                            </div>

                        </div>


                        {/* Bottom Image */}
                        <div className="h-1/2 rounded-4xl overflow-hidden">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/034/866/709/non_2x/group-of-young-people-on-skiing-created-with-generative-ai-photo.jpeg"
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
                            src="https://media.istockphoto.com/id/1361529536/photo/woman-snowboarding-at-ski-resort.jpg?s=612x612&w=0&k=20&c=9se-G7z2HdbqYLy7BDEFHlKKeSIS9tVEW6Qa7EuVd40="
                            alt="Training Rate"
                            loading="lazy"
                            className="w-full h-full object-cover absolute inset-0 z-0"
                        />

                        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 text-center rounded-4xl px-4 py-10 z-10">
                            <h4 className="text-sm font-medium text-gray-700">Training Rate</h4>
                            <p className="text-4xl font-medium text-black"><CountingNumber inView number={48} className="text-4xl" />%</p>
                            <p className="text-xs text-gray-400 mt-1">
                                Gradually challenge yourself with steeper slopes and varied conditions.
                            </p>
                        </div>

                    </div>
                </MotionEffect>


                {/* Card 4 */}
                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.6}>
                    <div className="relative rounded-4xl overflow-hidden flex flex-col h-[600px] sm:col-span-2 lg:col-span-1">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXMZLMiCZ3m5P_a5d4hhP1WWwenOTO0iNng&s"
                            alt="Subscription"
                            loading="lazy"
                            className="w-full h-full object-cover absolute inset-0 z-0"
                        />

                        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 text-center rounded-4xl px-4 py-10 z-10">
                            <h4 className="text-sm font-medium text-gray-700">Subscription</h4>
                            <p className="text-4xl font-medium text-black">
                                $<CountingNumber inView number={32} className="text-4xl" />/mo
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Maintain a good level of fitness with exercises that improve your strength.
                            </p>
                        </div>

                    </div>
                </MotionEffect>

            </div>


        </section>

    )


}
