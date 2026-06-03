"use client"

import { profileData } from "@/lib/data"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profileData.name} {profileData.lastName} · {profileData.department}, {profileData.institution}
          </p>
          <p className="text-sm text-muted-foreground">
            {profileData.title} · {profileData.lab}
          </p>
        </div>
      </div>
    </footer>
  )
}
