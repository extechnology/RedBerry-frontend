import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import SuspenseLoader from "./components/common/SuspenseLoader"
import ScrollToTop from "./components/common/ScrollToTop"


// Lazy loading Pages
const HomePage = lazy(() => import("./pages/Home"))
const FaqPage = lazy(() => import("./pages/Faq"))
const ContactUs = lazy(() => import("./pages/ContactUs"))
const AboutUs = lazy(() => import("./pages/AboutUs"))
const Gallery = lazy(() => import("./pages/Gallery"))
const PrintingServices = lazy(() => import("./pages/PrintingServices"))
const LaserService = lazy(() => import("./pages/LaserService"))
const ExhibitionService = lazy(() => import("./pages/ExhibitionService"))
const InteriorDesing = lazy(() => import("./pages/InteriorDesing"))
const GraphicDesing = lazy(() => import("./pages/GraphicDesing"))
const Indoor = lazy(() => import("./pages/Indoor"))



const MainLayout = lazy(() => import("./components/layout/MainLayout"))





function App() {


  return (


    <Suspense fallback={<SuspenseLoader />}>

      <ScrollToTop />

      <Routes>


        {/* Main Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />

          <Route path="/faqs" element={<FaqPage />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/printingservices" element={<PrintingServices />} />

          <Route path="/indoor&outdoorsignage" element={<Indoor />} />

          <Route path="/lasercutting&engraving" element={<LaserService />} />

          <Route path="/exhibitions" element={<ExhibitionService />} />

          <Route path="/interiordesing" element={<InteriorDesing />} />

          <Route path="/graphicdesign" element={<GraphicDesing />} />

        </Route>



      </Routes>


    </Suspense>


  )


}

export default App
