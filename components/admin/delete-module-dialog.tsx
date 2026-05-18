'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import React, { startTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { removeModuleAction } from "@/actions/remove-module.action";

export type DeleteModuleDialogProps = {
  moduleId: string
}

export function DeleteModuleDialog({ moduleId }: DeleteModuleDialogProps) {
  const [state, dispatch, isPending] = React.useActionState(removeModuleAction, null);
  const router = useRouter();

  React.useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Módulo apagado com sucesso!")
      router.push('/admin/modules/independents');
    } else {
      toast.error(state.payload.error);
    }
  }, [state]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          <Trash2/>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Trash2/>
          </AlertDialogMedia>
          <AlertDialogTitle>Apagar Módulo?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta operação não pode ser desfeita. O módulo será apagado permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Manter</AlertDialogCancel>
          <AlertDialogAction
            onClick={ (event => {
              event.preventDefault();
              startTransition(() => {
                const formData = new FormData();
                formData.append('publicId', moduleId);
                dispatch(formData);
              })
            }) }
          >
            { isPending ? <Spinner/> : 'Apagar' }
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}