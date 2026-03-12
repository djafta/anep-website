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
import { removeQualificationAction } from "@/actions/delete-qualification.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export type DeleteQualificationDialogProps = {
  qualificationPublicId: string
}

export function DeleteQualificationDialog({ qualificationPublicId }: DeleteQualificationDialogProps) {
  const [state, dispatch, isPending] = React.useActionState(removeQualificationAction, null);
  const router = useRouter();

  React.useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Qualificação apagada com sucesso!")
      router.push('/admin/dashboard/qualifications');
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
          <AlertDialogTitle>Apagar Qualificação?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta operação não pode ser desfeita. A qualificação será apagada permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Manter</AlertDialogCancel>
          <AlertDialogAction
            onClick={ (event => {
              event.preventDefault();
              startTransition(() => {
                const formData = new FormData();
                formData.append('publicId', qualificationPublicId);
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