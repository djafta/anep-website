import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { useCnqp } from "@/hooks/use-cnqp";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Popover } from '@base-ui/react/popover';

export function Navbar() {
  const { fields } = useCnqp();
  return (
    <div
      className={ 'p-2 sticky top-0 z-50 border-b border-px bg-background/50 backdrop-blur-xs flex items-center justify-between' }>
      <div className={ 'flex items-center gap-4' }>
        <NavigationMenu.Root className="min-w-max rounded-lg bg-transparent text-gray-900">
          <NavigationMenu.List className="relative flex">
            <NavigationMenu.Item className={ "mr-5" }>
              <Link className={ triggerClassName } href="/">
                <ChevronLeft className={ "stroke-1" }/> Início
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link className={ triggerClassName } href="/about">
                Sobre
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={ triggerClassName }>
                CNQP
                <NavigationMenu.Icon
                  className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                  <ChevronDownIcon/>
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className={ contentClassName }>
                <div className={ 'mx-auto w-full max-w-7xl flex flex-col gap-4' }>
                  <div className={ 'p-3' }>
                    <h2 className={ 'pb-2 text-md font-semibold text-primary' }>Catálogo Nacional das Qualificações
                      Profissionais</h2>
                    <p className={ 'text-sm text-muted-foreground text-wrap' }>
                      O CNQP é um instrumento dinâmico, que contém as competências padrão de todas as qualificações
                      profissionais nacionais, registadas e certificáveis, informando sobre a oferta formativa
                      disponível
                      no
                      país, no Subsistema de Educação Profissional
                    </p>
                  </div>
                  <Separator/>
                  <h2 className={ "text-sm px-3 text-muted-foreground" }>Campos das qualificações</h2>
                  <div className={ "grid grid-cols-3" }>
                    { fields.map((field) => (
                      <Link
                        key={ field.code }
                        className={ "text-sm p-3 hover:bg-muted transition-all duration-300 rounded-xl" }
                        href={ `/cnqp/${ field.code }` }
                      >
                        { field.name }
                      </Link>
                    )) }
                  </div>
                  <Separator/>
                  <div className={ "flex items-center gap-2 p-3 py-6" }>
                    <Link className={ "text-sm text-primary flex items-center" } href={ "/cnqp" }>
                      Aprender mais sobre o CNQP <ChevronRight className={ "text-xs stroke-1" }/>
                    </Link>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={ triggerClassName }>
                Instituições
                <NavigationMenu.Icon
                  className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                  <ChevronDownIcon/>
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className={ contentClassName }>
                <ul className="flex max-w-[400px] flex-col justify-center">
                  { institutionsLinks.map((item) => (
                    <li key={ item.href }>
                      <Link href={ item.href } className={ linkCardClassName }>
                        <h3 className="m-0 mb-1 text-base leading-5 font-medium">{ item.title }</h3>
                        <p className="m-0 text-sm leading-5 text-gray-500">{ item.description }</p>
                      </Link>
                    </li>
                  )) }
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link className={ triggerClassName } href="/licensing">
                Licenciamento
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link className={ triggerClassName } href="/news">
                Notícias
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              sideOffset={ 10 }
              collisionPadding={ { top: 5, bottom: 5, left: 20, right: 20 } }
              collisionAvoidance={ { side: 'none' } }
              className="box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5"
              style={ {
                ['--duration' as string]: '0.35s',
                ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
              } }
            >
              <NavigationMenu.Popup
                className="data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] origin-[var(--transform-origin)] rounded-lg bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 w-[var(--popup-width)] xs:w-[var(--popup-width)] dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <NavigationMenu.Arrow
                  className="flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                  <ArrowSvg/>
                </NavigationMenu.Arrow>
                <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden"/>
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </NavigationMenu.Root>
      </div>
      <div>
        <Popover.Root>
          <Popover.Trigger
            className="flex size-10 items-center justify-center rounded-full border border-gray-200  text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100">
            <span className={ '' }>?</span>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner sideOffset={ 8 }>
              <Popover.Popup
                className="origin-[var(--transform-origin)] rounded-lg bg-[canvas] px-6 py-4 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Popover.Arrow
                  className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                  <ArrowSvg/>
                </Popover.Arrow>
                <div>
                  <p>Sem ajuda</p>
                </div>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" { ...props }>
      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" { ...props }>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-[canvas]"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  );
}

const triggerClassName =
  'box-border flex items-center justify-center gap-1.5 h-10 ' +
  'px-2 xs:px-3.5 m-0 rounded-md bg-transparent text-gray-900 font-medium ' +
  'text-[0.925rem] xs:text-base leading-6 select-none no-underline ' +
  'hover:bg-gray-100 active:bg-gray-100 data-[popup-open]:bg-gray-100 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:relative';

const contentClassName =
  'w-fit h-full p-6 xs:w-max xs:min-w-[400px] xs:w-max ' +
  'transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ' +
  'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 ' +
  'data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] ' +
  'data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] ' +
  'data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] ' +
  'data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]';

const linkCardClassName =
  'block rounded-md p-2 xs:p-3 no-underline text-inherit ' +
  'hover:bg-gray-100 focus-visible:relative focus-visible:outline focus-visible:outline-2 ' +
  'focus-visible:-outline-offset-1 focus-visible:outline-blue-800';

const overviewLinks = [
  {
    href: '/react/overview/quick-start',
    title: 'Quick Start',
    description: 'Install and assemble your first component.',
  },
  {
    href: '/react/overview/accessibility',
    title: 'Accessibility',
    description: 'Learn how we build accessible components.',
  },
  {
    href: '/react/overview/releases',
    title: 'Releases',
    description: 'See what’s new in the latest Base UI versions.',
  },
  {
    href: '/react/overview/about',
    title: 'About',
    description: 'Learn more about Base UI and our mission.',
  },
] as const;

const institutionsLinks = [
  {
    href: '/institutions#iep',
    title: 'Instituições de Educação Profissional',
    description:
      'Instituições de Educação Profissional Acreditadas pela ANEP para ministrar qualificações, módulos e exames de RCA',
  },
  {
    href: '/institutions#ies',
    title: 'Instituições de Ensino Superior',
    description:
      'Instituições de Ensino Superior Acreditadas pela ANEP para ministrar qualificações que conferem o certificado A, B e C',
  }
] as const;
