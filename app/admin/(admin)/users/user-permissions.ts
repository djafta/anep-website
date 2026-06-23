import { BookOpen, Pencil, Plus, Search, Trash2, } from "lucide-react";

export const PERMISSION_GROUPS = [
  {
    label: "Qualificações",
    desc: "Gestão das qualificações disponíveis no sistema.",
    permissions: [
      {
        value: "create:qualification",
        label: "Criar qualificações",
        desc: "Adicionar novas qualificações ao sistema.",
        icon: Plus,
      },
      {
        value: "read:qualification",
        label: "Visualizar qualificações",
        desc: "Consultar as qualificações registadas.",
        icon: Search,
      },
      {
        value: "update:qualification",
        label: "Editar qualificações",
        desc: "Alterar informações das qualificações.",
        icon: Pencil,
      },
      {
        value: "delete:qualification",
        label: "Remover qualificações",
        desc: "Eliminar qualificações existentes.",
        icon: Trash2,
      },
    ],
  },
  {
    label: "Módulos Independentes",
    desc: "Gestão dos módulos independentes disponíveis.",
    permissions: [
      {
        value: "create:independent_module",
        label: "Criar módulos independentes",
        desc: "Adicionar novos módulos independentes.",
        icon: Plus,
      },
      {
        value: "read:independent_module",
        label: "Visualizar módulos independentes",
        desc: "Consultar os módulos independentes registados.",
        icon: BookOpen,
      },
      {
        value: "update:independent_module",
        label: "Editar módulos independentes",
        desc: "Alterar informações dos módulos independentes.",
        icon: Pencil,
      },
      {
        value: "delete:independent_module",
        label: "Remover módulos independentes",
        desc: "Eliminar módulos independentes existentes.",
        icon: Trash2,
      },
    ],
  },
];

export const PERMISSION_LABELS: Record<string, string> = {
  "create:qualification": "Criar qualificações",
  "read:qualification": "Visualizar qualificações",
  "update:qualification": "Editar qualificações",
  "delete:qualification": "Remover qualificações",

  "create:independent_module": "Criar módulos independentes",
  "read:independent_module": "Visualizar módulos independentes",
  "update:independent_module": "Editar módulos independentes",
  "delete:independent_module": "Remover módulos independentes",

  "*": "Todas",
};

export const ROLES_LABELS: Record<string, string> = {
  "ADMIN": "Administrador(a)",
  "MANAGER": "Gestor(a)",
}