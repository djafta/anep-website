'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { BadgeCheck, LogOut } from "lucide-react";

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
        className="min-w-64 rounded-2xl shadow-xl"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-3 py-2">
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src={ '' } alt={ user.name }/>
              <AvatarFallback className="rounded-full bg-primary text-white">
                { initials }
              </AvatarFallback>
            </Avatar>

            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{ user.name }</span>
              <span className="truncate text-xs text-muted-foreground">
                    { user.email }
                  </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator/>

        <DropdownMenuItem asChild>
          <DropdownMenuItem>
            <BadgeCheck className="mr-2 h-4 w-4"/>
            Conta
          </DropdownMenuItem>
        </DropdownMenuItem>

        <DropdownMenuSeparator/>

        <DropdownMenuItem asChild className="text-red-600">
          <Link href={ "/sign-out" }>
            <LogOut className="mr-2 h-4 w-4"/>
            Sair
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
