import { Building2, Globe2, Hammer, Landmark, Award } from "lucide-react";




export default function AboutUs() {


    // Stats
    const stats = [
        { value: "100+", label: "Employees", icon: Building2 },
        { value: "15+", label: "Countries", icon: Globe2 },
        { value: "60+", label: "Projects done", icon: Hammer },
        { value: "30+", label: "Offices", icon: Landmark },
        { value: "25+", label: "Project Awards", icon: Award },
    ];


    return (


        <section className="bg-white text-black px-4 sm:px-8 md:px-16 py-20">


            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
                    Bringing Your Vision to Life <br className="hidden sm:block" />
                    with Expertise and Dedication
                </h2>
            </div>


            {/* Image */}
            <div className="w-full rounded-lg overflow-hidden mb-10">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmr6ZqsrxMGdZpRJmtuMsnV05bIpPA6a_6jA&s" // replace this with actual imported image or public path
                    alt="Team"
                    loading="lazy"
                    className="w-full h-[80vh] object-cover"
                />
            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 bg-black text-white p-6 rounded-xl text-center mb-14">
                {stats.map((stat, idx) => (
                    <div key={idx}>
                        <stat.icon className="mx-auto mb-2" size={28} />
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-gray-300">{stat.label}</p>
                    </div>
                ))}
            </div>


            {/* Story Section */}
            <div className="text-center max-w-3xl mx-auto mb-6">
                <p className="text-green-600 font-semibold">Crafting Excellence</p>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2">The VisionCrafters Journey Story</h3>
                <p className="text-gray-700 mt-4 text-sm sm:text-base">
                    At VisionCrafters, our journey began with a simple yet powerful vision to transform the landscape of construction
                    by combining innovation, craftsmanship, and integrity. Founded 12 years ago by a team of passionate industry veterans,
                    VisionCrafters quickly established itself as a trusted name. Our story is one of perseverance, excellence, and bold vision.
                </p>
            </div>


            {/* Boxes Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">

                {/* Box 1 */}
                <div className="bg-blue-50 p-6 rounded-lg shadow">
                    <img src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww" loading="lazy" alt="Inception" className="rounded mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Inception Vision:</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                        VisionCrafters was founded on a collective vision shared among seasoned professionals who sought to promote excellence
                        in the construction industry. With decades of experience under their belts, the founders established a company that prioritizes
                        innovation, integrity, and a commitment to client satisfaction.
                    </p>
                </div>

                {/* Box 2 */}
                <div className="bg-blue-50 p-6 rounded-lg shadow">
                    <img src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww" alt="Journey" loading="lazy" className="rounded mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Evolutionary Journey:</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                        From its humble beginnings as a startup to its current standing as a respected industry force, the company has remained steadfast
                        in its mission to lead through purpose-driven innovation. The journey of VisionCrafters is marked by milestones that reflect
                        resilience and a drive for transformation.
                    </p>
                </div>

            </div>


        </section>

    )

}
