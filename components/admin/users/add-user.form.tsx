"use client"

import { useActionState, useEffect, useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react";
import { addUserAction } from "@/actions/create-user.action";
import { useRouter } from "next/navigation";

export function AddUserFormDialog() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [state, dispatch, isPending] = useActionState(addUserAction, null)
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
      router.refresh();
    }
  }, [state, router]);

  return (
    <Dialog open={ open } onOpenChange={ setOpen }>
      <DialogTrigger asChild>
        <Button><Plus/> Adicionar utilizador</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Utilizador</DialogTitle>
        </DialogHeader>

        <form action={ dispatch } className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome"
              value={ form.name }
              onChange={ handleChange }
              disabled={ isPending }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="n.sobrenome@anep.gov.mz"
              value={ form.email }
              onChange={ handleChange }
              disabled={ isPending }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              value={ form.password }
              onChange={ handleChange }
              disabled={ isPending }
              required
            />
          </div>

          <DialogFooter>
            <Button disabled={ isPending } type="submit">
              { isPending ? 'A adicionar...' : 'Adicionar' }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}