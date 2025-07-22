import { Outlet } from "react-router-dom"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import WhatsAppChat from "../common/WhatssAppIcon"



export default function MainLayout() {


    return (


        <div className="flex flex-col min-h-screen">


            <header>
                <Navbar />
            </header>


            <main className="flex-1">
                <Outlet />
            </main>


            <footer>
                <Footer />
            </footer>


            <section aria-label="WhatsApp Chat">
                <WhatsAppChat />
            </section>


        </div>

    )


}
