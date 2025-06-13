'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { openChatbot } from '@/components/chatbot';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { SITE_CONFIG } from '@/const/site-config';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconDownload,
  IconHome,
  IconMail,
  IconMoon,
  IconRobot,
  IconSun,
  IconUser,
} from '@tabler/icons-react';

interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const navigationItems: CommandItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <IconHome className="h-4 w-4" />,
      action: () => {
        router.push('/');
        setOpen(false);
      },
    },
    {
      id: 'about',
      label: 'About',
      icon: <IconUser className="h-4 w-4" />,
      action: () => {
        router.push('/about');
        setOpen(false);
      },
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <IconBriefcase className="h-4 w-4" />,
      action: () => {
        router.push('/projects');
        setOpen(false);
      },
    },
  ];

  const actionItems: CommandItem[] = [
    {
      id: 'email',
      label: 'Copy Email',
      icon: <IconMail className="h-4 w-4" />,
      action: async () => {
        await navigator.clipboard.writeText(SITE_CONFIG.contact.email);
        toast.success('Email copied', {
          description: SITE_CONFIG.contact.email,
        });
        setOpen(false);
      },
    },
    {
      id: 'theme-toggle',
      label: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      icon: theme === 'dark' ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />,
      action: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setOpen(false);
      },
    },
    {
      id: 'chat',
      label: 'Open Chat',
      icon: <IconRobot className="h-4 w-4" />,
      action: () => {
        openChatbot();
        setOpen(false);
      },
    },
    {
      id: 'download-resume',
      label: 'Download Resume',
      icon: <IconDownload className="h-4 w-4" />,
      action: () => {
        const link = document.createElement('a');
        link.href = SITE_CONFIG.resume.path;
        link.download = SITE_CONFIG.resume.filename;
        link.click();
        setOpen(false);
        toast.success('Resume download started');
      },
    },
  ];

  const externalLinks: CommandItem[] = [
    {
      id: 'github',
      label: 'GitHub',
      icon: <IconBrandGithub className="h-4 w-4" />,
      action: () => {
        window.open(SITE_CONFIG.social.github, '_blank');
        setOpen(false);
      },
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: <IconBrandLinkedin className="h-4 w-4" />,
      action: () => {
        window.open(SITE_CONFIG.social.linkedin, '_blank');
        setOpen(false);
      },
    },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem key={item.id} onSelect={item.action} className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
              {item.shortcut && <span className="text-muted-foreground ml-auto text-xs">{item.shortcut}</span>}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Actions">
          {actionItems.map((item) => (
            <CommandItem key={item.id} onSelect={item.action} className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="External">
          {externalLinks.map((item) => (
            <CommandItem key={item.id} onSelect={item.action} className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
