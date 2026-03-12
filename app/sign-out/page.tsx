'use client';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, } from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import { signOutAction } from "@/actions/sign-out.action";
import React, { startTransition, useEffect } from "react";

export default function SignOutPage() {
  const [, dispatch] = React.useActionState(signOutAction, null)
  useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        dispatch()
      })
    }, 1000)
  }, []);
  return (
    <div
      className={
        "fixed left-0 top-0 w-full h-full flex items-center justify-center"
      }
    >
      <Empty className="w-full">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner/>
          </EmptyMedia>
          <EmptyTitle>Terminar Sessão</EmptyTitle>
          <EmptyDescription>
            Por favor, espere enquanto terminamos a sua sessão. Não atualize a página.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
        </EmptyContent>
      </Empty>
    </div>
  );
}
