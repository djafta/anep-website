"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { api } from "@/lib/http/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Pencil, Trash, Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

export type Figure = {
  description: string;
  publicId: string;
  title: string;
  categories: string[];
  url: string;
  publishedAt: Date | null;
}

export type AdminGalleryPageProps = {
  figures?: Figure[];
}

export function AdminGalleryPage({ figures }: AdminGalleryPageProps) {

  return (
    <div className={ "flex flex-1 flex-col gap-4 pb-6" }>
      <div className={ "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" }>
        { figures?.map((figure) => (
          <FigureCard key={ figure.publicId } figure={ figure }/>
        )) }
      </div>
    </div>
  )
}

function FigureCard({ figure }: { figure: Figure }) {
  const [isPublished, setPublished] = useState(!!figure.publishedAt);
  const [isPending, startTransition] = useTransition();
  const [isDialogOpen, setDialogOpen] = useState(false);

  function handlePublishedChange(checked: boolean) {
    setPublished(checked);
    startTransition(async () => {
      try {
        if (checked) {
          await api.post(`gallery/figures/${ figure.publicId }/publish`)
        } else {
          await api.post(`gallery/figures/${ figure.publicId }/unpublish`)
        }
      } catch (error) {
        setPublished(!checked);
      }
    })
  }

  return (
    <div key={ figure.publicId } className={ "rounded-xl  border bg-white" }>
      <div className={ "p-3 flex justify-between items-center" }>
        <div className="flex items-center space-x-2">
          <Switch onCheckedChange={ handlePublishedChange } checked={ isPublished }
                  id={ `${ figure.publicId }-published` }/>
          <Label htmlFor={ `${ figure.publicId }-published` }>Publicado</Label>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={ 'rounded-full' } size={ 'icon-sm' } variant="ghost"><EllipsisVertical/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={ 'end' }>
              <DropdownMenuItem>
                <Pencil/>
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator/>
              <DropdownMenuItem variant="destructive" onClick={ () => setDialogOpen(true) }>
                <Trash/>
                Apagar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <img
        src={ figure.url }
        alt={ figure.description }
        className={ "object-cover aspect-video w-full" }
      />
      <div className={ "p-2" }>
        <h3 className={ "text-xs font-semibold truncate max-w-full" }>{ figure.title }</h3>
      </div>
      <DeleteDialog figure={ figure } isOpen={ isDialogOpen } onOpenChange={ setDialogOpen }/>
    </div>
  )
}

function DeleteDialog({ figure, isOpen, onOpenChange }: {
  figure: Figure,
  isOpen: boolean,
  onOpenChange?: (open: boolean) => void
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleDelete() {
    startTransition(async () => {
      await api.delete(`gallery/figures/${ figure.publicId }`)
      router.refresh();
    })
  }

  return (
    <AlertDialog open={ isOpen || isPending } onOpenChange={ onOpenChange }>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon/>
          </AlertDialogMedia>
          <AlertDialogTitle>Apagar Imagem?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação vai apagar permanente a imagem { figure.title }. A imagem deixará de estar disponível
            imediatamente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Manter</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={ handleDelete }>
            { isPending && <Spinner/> }
            Apagar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}