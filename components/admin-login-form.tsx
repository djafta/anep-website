'use client';

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel, } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { loginAction } from "@/action/login.action";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function AdminLoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [state, dispatch, isPending] = React.useActionState(loginAction, null)
  const router = useRouter();

  React.useEffect(() => {
    if (!state) return;

    if (state.success) {
      router.push('/admin/dashboard');
    }

    if (!state.success) {
      toast.error(state.payload.error)
    }
  }, [state]);

  return (
    <div className={ cn("flex flex-col gap-6 max-w-sm", className) } { ...props }>
      <Card>
        <CardHeader>
          <CardTitle>Entrar na sua conta</CardTitle>
          <CardDescription>
            Introduza seu email e senha para entrar na sua conta de administrador da ANEP.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={ dispatch }>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  disabled={ isPending }
                  id="email"
                  name={ 'email' }
                  type="email"
                  placeholder="x.sobrenome@anep.gov.mz"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                </div>
                <Input name={ 'password' } disabled={ isPending } id="password" type="password" required/>
              </Field>
              <Field>
                <Button type="submit">
                  { isPending ? <Spinner/> : 'Entrar' }
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
