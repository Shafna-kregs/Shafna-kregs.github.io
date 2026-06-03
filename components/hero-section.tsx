"use client"

import Image from "next/image"
import { profileData } from "@/lib/data"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Department Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-primary uppercase">
                {profileData.department} · {profileData.institution}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="text-foreground">{profileData.name}</span>
              <br />
              <span className="text-primary">{profileData.lastName}</span>
            </h1>

            {/* Title */}
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">
                {profileData.title} · {profileData.lab}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {profileData.location}
              </p>
            </div>

            {/* Research Tags */}
            <div className="flex flex-wrap gap-2">
              {profileData.researchAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 text-xs font-mono border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>

          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-primary/50 overflow-hidden bg-white">
                <Image
                  src="/images/profile.png"
                  alt="Photonic Materials and Devices Laboratory"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
