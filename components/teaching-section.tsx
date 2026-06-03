"use client"

import { teaching } from "@/lib/data"

export function TeachingSection() {
  return (
    <section id="teaching" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-primary mb-2">ACADEMICS</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Teaching</h2>
          <div className="w-12 h-1 bg-primary mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Theory Courses */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">THEORY COURSES</h3>
            <div className="space-y-3">
              {teaching.theory.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded">
                    {course.code}
                  </span>
                  <span className="text-foreground">{course.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Laboratory Courses */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">LABORATORY COURSES</h3>
            <div className="space-y-3">
              {teaching.lab.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded">
                    {course.code}
                  </span>
                  <span className="text-foreground">{course.name}</span>
                </div>
              ))}
            </div>

            {/* Opportunities Note */}
            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Opportunities:</strong> Highly motivated postdoctoral/doctoral aspirants and B.Tech/M.Tech/M.Sc. project students from NITC are welcome to contact the group leader.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
