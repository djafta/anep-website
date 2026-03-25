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
import { removeFieldAction } from "@/actions/fields/remove-field.action";

export type DeleteFieldDialog = {
  fieldPublicId: string
}

export function DeleteFieldDialog({ fieldPublicId }: DeleteFieldDialog) {
  const [state, dispatch, isPending] = React.useActionState(removeFieldAction, null);
  const router = useRouter();

  React.useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Campo apagado com sucesso!")
      router.push('/admin/fields');
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
          <AlertDialogTitle>Apagar Campo?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta operação não pode ser desfeita. O campo será apagada permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Manter</AlertDialogCancel>
          <AlertDialogAction
            onClick={ (event => {
              event.preventDefault();
              startTransition(() => {
                const formData = new FormData();
                formData.append('publicId', fieldPublicId);
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