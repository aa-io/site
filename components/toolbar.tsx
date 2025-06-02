import { SidebarTrigger } from './ui/sidebar';

export default function Toolbar({ title }: { title: string }) {
  return (
    <div className="border-border bg-background/75 sticky top-0 z-10 flex h-(--header-height) items-center gap-2 border-b-[0.5px] backdrop-blur-sm">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1 text-sm font-semibold">{title}</div>
    </div>
  );
}
