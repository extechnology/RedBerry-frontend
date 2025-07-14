

export default function SuspenseLoader() {


    return (


        <div className="flex items-center justify-center h-screen bg-white">

            <img
                src="/Nav-black-logo.png"
                alt="Company Logo"
                loading="lazy"
                className="w-72 h-24 animate-pulse scale-110 transition-transform duration-700 ease-in-out"
            />

        </div>


    )


}
