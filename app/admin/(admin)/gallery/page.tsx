import { AdminGalleryPage, Figure } from "@/components/admin/gallery/gallery.page";
import { api } from "@/lib/http/api";

export default async function Page() {
  const figures = await api.get<Figure[]>('gallery/figures');
  return <AdminGalleryPage figures={ figures }/>
}