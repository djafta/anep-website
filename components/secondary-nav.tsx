"use client"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { JSX, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

export type SecondaryNavProps = {
  links?: { label: string, href: string }[]
}

/**
 * Renders a navigation component with a search functionality and a list of navigation links.
 * The links are filtered based on the user's search query.
 *
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.links - An array of link objects to be displayed in the navigation.
 * Each link object should contain at least a `label` and an `href` property.
 *
 * @return {JSX.Element} The rendered navigation component containing a search input and filtered navigation links.
 */
export function SecondaryNav({ links }: SecondaryNavProps): JSX.Element {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  /**
   * A memoized array of filtered link objects based on the current search query.
   * This variable filters the `links` array by checking if the `label` of each link
   * includes the `search` term (case-insensitive). If the search query is empty or
   * contains only whitespace, it returns the original `links` array or an empty array
   * if `links` is undefined.
   *
   * Dependencies:
   * - `links`: The original array of link objects with a `label` property.
   * - `search`: The search term used to filter the `links` array.
   */
  const filteredLinks = useMemo(() => {
    if (search.trim().length === 0) return links || [];

    return links?.filter(({ label }) => {
      return label.toLowerCase().includes(search.toLowerCase());
    }) || []
  }, [links, search])

  const highlightLabel = (label: string) => {
    if (!search.trim()) return label;

    const regex = new RegExp(`(${search})`, "ig");
    const parts = label.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={ i } className="text-white font-semibold bg-primary rounded-sm">{ part }</span>
      ) : (
        <span key={ i }>{ part }</span>
      )
    );
  };

  return (
    <aside className="self-start w-full sticky lg:top-32">
      {/* Search */ }
      <div className={'py-1'}>
        <div className="relative">
          <Input
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
            type="search"
            placeholder="Search..."
            className={ 'rounded-full focus-within:bg-background' }
          />
        </div>
      </div>

      {/* Navigation */ }
      <nav className="py-4 overflow-y-auto">
        <div className="space-y-0">
          { filteredLinks.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={ item.href }
                href={ item.href }
                className={ cn(
                  "block py-2.5 text-sm rounded-full transition-colors",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                ) }
              >
                { highlightLabel(item.label) }
              </Link>
            )
          }) }
        </div>
      </nav>
    </aside>
  )
}
