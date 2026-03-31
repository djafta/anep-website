import { ChangeUserPasswordForm } from "@/components/admin/users/change-user-password.form";

type User = {
  id: number;
  publicId: string;
  email: string;
  name: string;
  role: string;
};

type UserAccountPageProps = {
  user: User;
};

export default function UserAccountPage({ user }: UserAccountPageProps) {
  return (
    <div className="w-full px-6 pb-6 space-y-6">
      {/* Perfil */ }
      <div className="flex items-center gap-4 border-b border-zinc-200 pb-6">
        <div
          className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
          { user.name.charAt(0).toUpperCase() }
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-800">
            { user.name }
          </h2>
          <p className="text-sm text-zinc-500">
            { user.email }
          </p>
        </div>
      </div>

      {/* Dados */ }
      <div className="divide-y divide-zinc-200">
        <InfoRow label="Nome" value={ user.name }/>
        <InfoRow label="Email" value={ user.email }/>
        <InfoRow label="Função" value={ user.role }/>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase text-zinc-400 tracking-wide">
          Segurança
        </h3>

        <div className="rounded-xl border border-zinc-200 p-4">
          <ChangeUserPasswordForm publicId={ user.publicId }/>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 py-4 md:flex-row md:items-center md:justify-between">
      <span className="text-sm text-zinc-500">{ label }</span>
      <span className="text-sm font-medium text-zinc-800 break-all">
        { value }
      </span>
    </div>
  );
}