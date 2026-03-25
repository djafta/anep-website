'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { changePasswordAction } from "@/actions/change-password.action";
import { toast } from "sonner";

export function ChangeUserPasswordForm({ publicId }: { publicId: string }) {
  const [state, dispatch, isPending] = useActionState(changePasswordAction, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <div className={ 'gap-2 flex flex-col' }>
      <h2 className={ 'text-sm' }>Alterar palavra passe</h2>
      <div>
        <form action={ dispatch }>
          <input type="hidden" name="publicId" value={ publicId }/>
          <Input disabled={ isPending } type="password" placeholder="Nova palavra passe" name="password" required/>
          <Button disabled={ isPending } type="submit" className={ 'mt-2' }>
            { isPending ? 'A alterar...' : 'Alterar' }
          </Button>
        </form>
      </div>
    </div>
  )
}