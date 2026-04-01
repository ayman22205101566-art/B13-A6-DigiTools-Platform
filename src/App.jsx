import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatsBar from "./components/StatsBar"
import PremiumToolsSection from "./components/PremiumToolsSection"
import StepsSection from "./components/StepsSection"
import PricingSection from "./components/PricingSection"
import FooterSection from "./components/FooterSection"

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar cartCount={cartItems.length} />
      <Hero />
      <StatsBar />
      <PremiumToolsSection
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <StepsSection />
      <PricingSection />
      <FooterSection />
    </div>
  )
}

export default App