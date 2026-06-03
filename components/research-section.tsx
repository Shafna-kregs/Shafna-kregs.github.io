"use client"

import { useState } from "react"
import Image from "next/image"
import { researchAreas } from "@/lib/data"

const galleryImages = [
  { title: "OPTOELECTRONICS", image: "/images/optoelectronics.png" },
  { title: "NEUROMORPHIC", image: "/images/neuromorphic.png" },
  { title: "IONOTRONICS", image: "/images/ionotronics.png" },
  { title: "CATALYSIS", image: "/images/catalysis.png" },
  { title: "2D MATERIALS", image: "/images/2d-materials.png" },
  { title: "NANOMATERIALS", image: "/images/nanomaterials.png" }
]

export function ResearchSection() {
  const [activeCategory, setActiveCategory] = useState("optoelectronics")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1)

  return (
    <section id="research" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-primary mb-2">WHAT WE DO</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Research Overview</h2>
          <div className="w-12 h-1 bg-primary mt-4" />
          <p className="mt-6 text-muted-foreground max-w-3xl leading-relaxed">
            Our group operates at the interface of <strong className="text-foreground">nanomaterials science, device physics, and light-driven chemical processes</strong>, specializing in low-dimensional material systems for next-generation optoelectronic, ionotronic, and neuromorphic technologies.
          </p>
        </div>

        {/* Research Images Gallery - Popup Effect */}
        <div className="mb-16">
          <div className="flex items-end justify-center gap-1 h-[280px] sm:h-[320px] md:h-[400px]">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-out ${
                  hoveredIndex === index
                    ? "flex-[3] h-full"
                    : "flex-1 h-[85%]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-100" : "scale-110"
                  }`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Title overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-80"
                }`}>
                  <span className={`font-mono font-bold tracking-wider text-white transition-all duration-300 ${
                    hoveredIndex === index ? "text-sm sm:text-base" : "text-[10px] sm:text-xs"
                  }`}>
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {researchAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveCategory(area.id)}
              className={`px-4 py-2 text-xs font-medium tracking-wider rounded-full transition-all duration-200 ${
                activeCategory === area.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Research Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <div
              key={area.id}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                activeCategory === area.id
                  ? "bg-primary/10 border-primary/30 scale-105"
                  : "bg-secondary/50 border-border hover:border-primary/30"
              }`}
            >
              {/* Image */}
              {area.image && (
                <div className="relative w-full aspect-video">
                  <Image
                    src={area.image}
                    alt={area.heading}
                    fill
                    className="object-cover"
                  />
                  {/* Category Badge on image */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-1 rounded-full bg-primary text-primary-foreground">
                      {area.title}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Icon - only show if no image */}
                {!area.image && <div className="text-4xl mb-4">{area.icon}</div>}

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">{area.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>

              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                activeCategory === area.id ? "bg-primary" : "bg-transparent"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
