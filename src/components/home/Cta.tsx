import { Link } from "react-router-dom";
import { MotionEffect } from "../animate-ui/effects/motion-effect";




export default function Cta() {


    return (


        <section className="bg-white py-10 sm:py-16 px-2 md:px-16 border-t-2 border-dashed border-gray-300">


            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">


                <MotionEffect inView slide={{ direction: 'down', }} fade zoom delay={0.4}>

                    {/* Image */}
                    <div className="flex justify-center">

                        <img
                            src="/connect-empower.jpg"
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
                            Connect and Empower<br />
                            <span className="text-gray-900">Your brand and Business</span>
                        </h2>

                        <p className="mt-4 text-gray-700 text-lg">
                            Connect with Redberry to unlock the full potential of your brand. Our creative solutions and expert services are designed to empower your business and enhance your market presence.
                        </p>

                        <Link to={'/contact'}>
                            <button className="mt-6 px-6 py-3 rounded-full hover:scale-105 hover:cursor-pointer bg-black text-white font-semibold transition">
                                Contact Now !
                            </button>
                        </Link>

                    </div>

                </MotionEffect>

            </div>


        </section >

    )

}
