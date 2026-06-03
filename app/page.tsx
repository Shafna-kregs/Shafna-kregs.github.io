import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { PublicationsSection } from "@/components/publications-section"
import { PatentsSection } from "@/components/patents-section"
import { StudentsSection } from "@/components/students-section"
import { TeachingSection } from "@/components/teaching-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <PatentsSection />
      <StudentsSection />
      <TeachingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
