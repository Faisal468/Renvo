import { createBrowserRouter } from "react-router"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Kitchen from "../pages/services/Kitchen"
import Bathroom from "../pages/services/Bathroom"
import Flooring from "../pages/services/Flooring"
import Roofing from "../pages/services/Roofing"
import Patio from "../pages/services/Patio"
import Portfolio from "../pages/Portfolio"
import Cabinets from "../pages/Cabinets"
import Window from "../pages/services/Window"
import Vendors from "../pages/Vendors"
import Finances from "../pages/Finances"
import Contact from "../pages/Contact"
import Support from "../pages/Support"
import SupportAboutUs from "../pages/support/AboutUs"
import SupportGetSupport from "../pages/support/GetSupport"
import SupportOurProcess from "../pages/support/OurProcess"
import SupportOurValue from "../pages/support/OurValue"
import Shop from "../pages/Shop"
import Login from "../pages/admin/Login"
import Dashboard from "../pages/admin/Dashboard"

export const router = createBrowserRouter([
  {
    path: "/admin",
    children: [
      { index: true, Component: Login },
      { path: "dashboard", Component: Dashboard },
    ],
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/kitchen", Component: Kitchen },
      { path: "services/bathroom", Component: Bathroom },
      { path: "services/flooring", Component: Flooring },
      { path: "services/roofing", Component: Roofing },
      { path: "services/patio", Component: Patio },
      { path: "portfolio", Component: Portfolio },
      { path: "shop", Component: Shop },
      { path: "support", Component: Support },
      { path: "support/get-support", Component: SupportGetSupport },
      { path: "support/about-us", Component: SupportAboutUs },
      { path: "support/our-process", Component: SupportOurProcess },
      { path: "support/our-value", Component: SupportOurValue },
      { path: "cabinets", Component: Cabinets },
      { path: "vendors", Component: Vendors },
      { path: "windows", Component: Window },
      { path: "doors", Component: Vendors },
      { path: "countertops", Component: Shop },
      { path: "finances", Component: Finances },
      { path: "contact", Component: Contact },
    ],
  },
])
