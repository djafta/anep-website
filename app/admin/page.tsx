import { AdminLoginForm } from "@/components/admin-login-form";

export default async function AdminPage() {
  return (
    <div className={ 'flex-1 flex items-center justify-center' }>
      <AdminLoginForm/>
    </div>
  )
}