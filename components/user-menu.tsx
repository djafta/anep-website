'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export type User = {
  email: string
  name: string
}

interface UserMenuProps {
  user: User
}

export function UserMenu({ user }: UserMenuProps) {
  const initials = user.email.at(0)?.toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 p-0 h-auto rounded-full shadow-md border"
        >
          <Avatar className="h-9 w-9 rounded-full">
            <AvatarFallback className={ 'bg-primary text-white' }>
              { initials }
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-72 rounded-2xl shadow-xl p-2"
      >
        <DropdownMenuLabel className="space-y-1">
          <p className="text-sm">
            { user.name }
          </p>
          <p className="font-semibold text-xs">
            { user.email }
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator/>

        <DropdownMenuItem asChild className="text-red-600">
          <Link href={ "/sign-out" }>
            Terminar Sessão
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
