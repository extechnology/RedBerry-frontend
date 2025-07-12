import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"




// Lazy loading Pages
const HomePage = lazy(() => import("./pages/Home"))
const FaqPage = lazy(() => import("./pages/Faq"))
const ContactUs = lazy(() => import("./pages/ContactUs"))
const AboutUs = lazy(() => import("./pages/AboutUs"))
const Gallery = lazy(() => import("./pages/Gallery"))


const MainLayout = lazy(() => import("./components/layout/MainLayout"))





function App() {


  return (


    <Suspense fallback={<div>Loading...</div>}>


      <Routes>


        {/* Main Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />

          <Route path="/faqs" element={<FaqPage />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/gallery" element={<Gallery />} />
        
        </Route>



      </Routes>


    </Suspense>


  )


}

export default App
