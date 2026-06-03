"use client"

import { students } from "@/lib/data"

export function StudentsSection() {
  return (
    <section id="students" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-primary mb-2">PHOTONIC MATERIALS AND DEVICES LABORATORY</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Doctoral Students</h2>
          <div className="w-12 h-1 bg-primary mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Students */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              CURRENT STUDENTS
            </h3>
            <div className="space-y-4">
              {students.current.map((student, index) => (
                <div
                  key={index}
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-semibold text-foreground mb-1">{student.name}</h4>
                  <p className="text-sm text-muted-foreground">{student.research}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Completed PhD */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              COMPLETED PHD
            </h3>
            <div className="space-y-4">
              {students.completed.map((student, index) => (
                <div
                  key={index}
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-semibold text-foreground mb-1">{student.name}</h4>
                  <p className="text-sm text-muted-foreground">{student.thesis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
