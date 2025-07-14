import { MotionEffect } from "../animate-ui/effects/motion-effect";




export default function Cta() {


    return (


        <section className="bg-white py-10 sm:py-16 px-2 md:px-16 border-t-2 border-dashed border-gray-300">


            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">


                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.4}>
             
                    {/* Image */}
                    <div className="flex justify-center">
             
                        <img
                            src="https://as1.ftcdn.net/jpg/04/69/92/54/1000_F_469925430_KfRlZ0yKcQe3MjDQPN1c5Hw9VUa2CKBh.jpg"
                            alt="Fitness Transformation"
                            loading="lazy"
                            className="rounded-3xl w-full max-w-xl object-cover"
                        />
             
                    </div>
             
                </MotionEffect>


                {/* Content */}
                <MotionEffect
                    fade
                    blur="10px"
                    transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                    }}
                    inView
                >
                    
                    <div>
                    
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            Lorem Ipsum<br />
                            <span className="text-gray-900">Lorem Ipsum Lorem ?</span>
                        </h2>
                    
                        <p className="mt-4 text-gray-700 text-lg">
                            No more guesswork. No more waiting. Get personalized workouts,
                            flexible nutrition, expert coaching, and tools that keep you on
                            track — all in one place.
                        </p>

                        <button className="mt-6 px-6 py-3 rounded-full hover:scale-105 hover:cursor-pointer bg-black text-white font-semibold transition">
                            START YOUR FREE TRIAL
                        </button>
                    
                    </div>

                </MotionEffect>

            </div>


        </section >

    )

}
