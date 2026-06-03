"use client"

import { patents } from "@/lib/data"

export function PatentsSection() {
  const grantedCount = patents.filter(p => p.status === "GRANTED").length
  const publishedCount = patents.filter(p => p.status === "PUBLISHED").length

  return (
    <section id="patents" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-primary mb-2">INTELLECTUAL PROPERTY</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Patents</h2>
          <div className="w-12 h-1 bg-primary mt-4" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-md">
          <div className="text-center p-4 bg-secondary rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary">{patents.length}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Total Patents</div>
          </div>
          <div className="text-center p-4 bg-secondary rounded-lg border border-border">
            <div className="text-3xl font-bold text-green-500">{grantedCount}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Granted</div>
          </div>
          <div className="text-center p-4 bg-secondary rounded-lg border border-border">
            <div className="text-3xl font-bold text-yellow-500">{publishedCount}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Published</div>
          </div>
        </div>

        {/* Patents List */}
        <div className="space-y-4">
          {patents.map((patent, index) => (
            <div
              key={index}
              className="p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {/* Status Badge */}
                <span className={`px-2 py-1 text-[10px] font-mono tracking-wider rounded ${
                  patent.status === "GRANTED" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {patent.status}
                </span>
                {/* Year */}
                <span className="text-sm font-mono text-primary">{patent.year}</span>
              </div>

              {/* Title */}
              <h4 className="font-semibold text-foreground mb-2">{patent.title}</h4>

              {/* Details */}
              <p className="text-sm text-muted-foreground mb-2">
                {patent.status === "GRANTED" 
                  ? `Patent No.: ${patent.patentNo}` 
                  : `Appl. No.: ${patent.applicationNo}`}
                {" · "}
                {patent.date}
              </p>

              {/* Inventors */}
              <p className="text-sm text-muted-foreground">
                👥 {patent.inventors}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
