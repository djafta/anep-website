import { PageHeader } from "@/components/page-header";
import { AddUserFormDialog } from "@/components/admin/users/add-user.form";

export default async function UsersHeader() {
  return (
    <PageHeader
      title={ "Utilizadores" }
      description="Gerencie os utilizadores do sistema, incluindo a criação de novos utilizadores, edição de informações existentes e atribuição de funções e permissões.">
      <div>
        <AddUserFormDialog/>
      </div>
    </PageHeader>
  )
}