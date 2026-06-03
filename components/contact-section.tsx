"use client"

import { profileData } from "@/lib/data"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-primary mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl font-serif font-bold text-foreground">Contact</h2>
          <div className="w-12 h-1 bg-primary mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Office Address */}
            <div className="flex gap-4 p-6 bg-background rounded-xl border border-border">
              <div className="text-2xl">📍</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">OFFICE ADDRESS</h4>
                <p className="text-muted-foreground whitespace-pre-line">
                  {profileData.contact.office}
                  {"\n"}
                  {profileData.contact.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-6 bg-background rounded-xl border border-border">
              <div className="text-2xl">📞</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">PHONE</h4>
                <a 
                  href={`tel:${profileData.contact.phone}`}
                  className="text-primary hover:underline"
                >
                  {profileData.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-6 bg-background rounded-xl border border-border">
              <div className="text-2xl">✉️</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">EMAIL</h4>
                <a 
                  href={`mailto:${profileData.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {profileData.contact.email}
                </a>
              </div>
            </div>

            {/* Department Profile */}
            <div className="flex gap-4 p-6 bg-background rounded-xl border border-border">
              <div className="text-2xl">🌐</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">DEPARTMENT PROFILE</h4>
                <a 
                  href={profileData.contact.departmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  NITC Physics Department
                </a>
              </div>
            </div>
          </div>

          {/* Join Research Group */}
          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Join Our Research Group
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are always looking for highly motivated and talented researchers to join our group. We work on cutting-edge problems at the interface of nanomaterials, optoelectronics, and ionotronic systems at the <strong className="text-foreground">{profileData.lab}</strong>.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-foreground">Postdoctoral/Ph.D. positions:</p>
                  <p className="text-sm text-muted-foreground">
                    Highly motivated and talented postdoctoral/doctoral aspirants are encouraged to reach out directly.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">B.Tech/M.Tech/M.Sc. projects:</p>
                  <p className="text-sm text-muted-foreground">
                    Interested students from NITC can contact the group leader to discuss possible project topics.
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                ✉ Send an Email
              </a>
            </div>

            {/* Funded Projects */}
            <div className="p-6 bg-background rounded-xl border border-border">
              <p className="text-xs font-mono tracking-widest text-primary mb-2">FUNDED PROJECTS</p>
              <p className="text-muted-foreground">
                Active externally funded research: <strong className="text-foreground">{profileData.funding.current}</strong> on {profileData.funding.description}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
