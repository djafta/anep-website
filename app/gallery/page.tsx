import GalleryPage, { GalleryItem } from "@/components/gallery/gallery.page";
import { api } from "@/lib/http/api";

export default async function Page() {
  const items = await api.get<GalleryItem[]>('gallery/figures');
  return <GalleryPage items={ items }/>
}