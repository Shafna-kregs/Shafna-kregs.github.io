"use client"

import { useState } from "react"
import { publications, publicationCategories } from "@/lib/data"

export function PublicationsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const filteredPublications = activeCategory === "all" 
    ? publications 
    : publications.filter(pub => pub.category.toLowerCase().replace(" ", "-") === activeCategory)

  // Get the count for the active category
  const activeCount = publicationCategories.find(cat => cat.id === activeCategory)?.count || filteredPublications.length
  
  const initialCount = 4
  const displayedPublications = showAll ? filteredPublications : filteredPublications.slice(0, initialCount)

  // Get the label for active category
  const activeCategoryLabel = publicationCategories.find(cat => cat.id === activeCategory)?.label || "All"

  return (
    <section id="publications" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-primary mb-2">PEER-REVIEWED</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Publications</h2>
          <div className="w-12 h-1 bg-primary mt-4" />
          <p className="mt-4 text-muted-foreground">
            41 publications in peer-reviewed journals (reverse chronological order)
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {publicationCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setShowAll(false)
              }}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.id
                  ? "bg-primary-foreground/20"
                  : "bg-background"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {displayedPublications.map((pub) => (
            <div
              key={pub.id}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Publication Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-mono text-primary">#{pub.id}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.authors} · {pub.journal}, {pub.volume} ({pub.year})
                  </p>
                  <span className="inline-block px-2 py-1 text-[10px] font-mono tracking-wider bg-secondary text-muted-foreground rounded">
                    {pub.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button - Dynamic based on category */}
        {activeCount > initialCount && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Show Less
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Show All {activeCount} {activeCategoryLabel === "All" ? "Publications" : `${activeCategoryLabel} Publications`}
                </>
              )}
            </button>
          </div>
        )}

        {/* NITC Profile Link */}
        <div className="mt-8 p-4 bg-background rounded-lg border border-border text-center">
          <p className="text-sm text-muted-foreground">
            Full list available on the{" "}
            <a
              href="https://physics.nitc.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              NITC faculty page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
