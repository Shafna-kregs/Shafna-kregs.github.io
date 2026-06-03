"use client"

import Image from "next/image"
import { profileData } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <p className="text-xs font-mono tracking-widest text-primary mb-2">BACKGROUND</p>
              <h2 className="text-4xl font-serif font-bold text-foreground">About</h2>
              <div className="w-12 h-1 bg-primary mt-4" />
            </div>

            {/* About Paragraphs */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: profileData.about.intro }} />
              <p dangerouslySetInnerHTML={{ __html: profileData.about.phd }} />
              <p dangerouslySetInnerHTML={{ __html: profileData.about.postdoc }} />
              <p dangerouslySetInnerHTML={{ __html: profileData.about.current }} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">{profileData.stats.journalPapers}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Journal Papers</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">{profileData.stats.patents}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Patents</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">{profileData.stats.phdStudents}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">PhD Students</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">{profileData.stats.yearsAtNITC}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Years at NITC</div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <p className="text-xs font-mono tracking-widest text-primary mb-6">EDUCATION</p>
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution} · {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <p className="text-xs font-mono tracking-widest text-primary mb-6">PROFESSIONAL EXPERIENCE</p>
              <div className="space-y-4">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                    <div>
                      <div className="font-semibold text-foreground">{exp.position}</div>
                      <div className="text-sm text-muted-foreground">{exp.institution}</div>
                    </div>
                    <div className="text-sm text-primary font-mono">{exp.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Research Group Card with Lab Image */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl border border-primary/20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Lab Image */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/lab.png"
                alt="Research Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Lab Info */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xs font-mono tracking-widest text-primary mb-2">RESEARCH GROUP</p>
              <h3 className="text-2xl font-serif font-bold text-foreground">{profileData.lab}</h3>
              <p className="text-muted-foreground mt-2">{profileData.institution} · {profileData.department}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
