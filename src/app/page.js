import Brands from "@/components/brands"
import Contacts from "@/components/contacts"
import FeaturedProject from "@/components/features-project"
import Hero from "@/components/hero"
import Stats from "@/components/states"

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedProject />
      <Contacts />
      <Brands />
    </div>
  )
}
