"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { api } from "@/lib/http/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function NewImagePage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");

  const [preview, setPreview] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const url = URL.createObjectURL(file);

    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  function handleSubmit() {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("file", file as Blob);
      formData.append("categories", categories);
      formData.append("publish", "true")

      try {
        await api.post(`gallery/figures`, formData);
        router.push("/admin/gallery");
      } catch (error) {
        toast.error("Erro ao salvar a imagem. Tente novamente.");
      }
    })
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0] || null;

    if ((selectedFile?.size || 0) > 0) {
      setFile(selectedFile);
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 pb-6">
      <input
        ref={ inputRef }
        type="file"
        accept="image/*"
        className="hidden"
        onChange={ handleFileChange }
      />

      { file == null ? (
        <button
          type="button"
          className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed text-sm text-muted-foreground hover:bg-muted"
          onClick={ () => inputRef.current?.click() }
        >
          Clique para selecionar uma imagem
        </button>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border aspect-video">
            <img
              src={ preview }
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              type="button"
              onClick={ () => inputRef.current?.click() }
            >
              Alterar imagem
            </Button>

            <Button
              variant="outline"
              type="button"
              onClick={ () => {
                setFile(null);

                if (inputRef.current) {
                  inputRef.current.value = "";
                }
              } }
            >
              Remover
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>{ file.name }</p>
            <p>{ (file.size / 1024 / 1024).toFixed(2) } MB</p>
          </div>
        </div>
      ) }

      <div className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="title">Título</FieldLabel>
          <Input
            onChange={ (e) => setTitle(e.target.value) }
            id="title"
            placeholder="Seminário Nacional de Turismo"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="categories">Categorias</FieldLabel>
          <Input
            onChange={ (e) => setCategories(e.target.value) }
            id="categories"
            placeholder="Educação"
          />
          <FieldDescription>Escreva as categorias a que a imagem pertence separando-as com ponto e
            vírgula</FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="description">Descrição</FieldLabel>
          <Textarea
            onChange={ (e) => setDescription(e.target.value) }
            id="description"
            placeholder="Descrição da imagem"
          />
        </Field>

        <div className="flex gap-4">
          <Button onClick={ handleSubmit } disabled={ !file || !title || !description || isPending } variant="outline">
            { isPending && (<Spinner/>) }
            Salvar e Publicar
          </Button>
        </div>
      </div>
    </div>
  )
}
