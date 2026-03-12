"use client"
import Link from "next/link"

type EntryCardProps = {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export function EntryCard({ title, description, href, icon }: EntryCardProps) {
  return (
    <Link
      href={ href }
      className="
        group
        relative
        rounded-xl
        bg-card
        p-6
        transition
        hover:bg-accent
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-ring
        border
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg
            bg-muted
            text-foreground
            transition
            group-hover:bg-background
          "
        >
          { icon }
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-medium">
            { title }
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            { description }
          </p>
        </div>
      </div>

      <span
        className="
          absolute bottom-4 right-4
          text-sm
          text-muted-foreground
          transition
          group-hover:text-foreground
        "
      >
        →
      </span>
    </Link>
  )
}
