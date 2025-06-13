'use client';

import { SearchIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { toast } from 'sonner';
import { openChatbot } from '@/components/chatbot';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SITE_CONFIG } from '@/const/site-config';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBriefcase,
  IconCheck,
  IconClipboard,
  IconDownload,
  IconInfoSquare,
  IconInnerShadowTop,
  IconMail,
  IconStar,
  IconStarFilled,
} from '@tabler/icons-react';

const data: {
  navMain: {
    title: string;
    url: string;
    icon: React.ElementType;
    iconFilled: React.ElementType;
  }[];
  navFooter: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
} = {
  navMain: [
    {
      title: 'Ask',
      url: '/',
      icon: SearchIcon,
      iconFilled: SearchIcon,
    },
    {
      title: 'Home',
      url: '/',
      icon: IconStar,
      iconFilled: IconStarFilled,
    },
    {
      title: 'Work',
      url: '/projects',
      icon: IconBriefcase,
      iconFilled: IconBriefcase,
    },
    {
      title: 'About',
      url: '/about',
      icon: IconInfoSquare,
      iconFilled: IconInfoSquare,
    },
  ],
  navFooter: [
    {
      title: 'LinkedIn',
      url: SITE_CONFIG.social.linkedin,
      icon: IconBrandLinkedin,
    },
    {
      title: 'GitHub',
      url: SITE_CONFIG.social.github,
      icon: IconBrandGithub,
    },
    {
      title: 'Twitter',
      url: SITE_CONFIG.social.twitter,
      icon: IconBrandTwitter,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const items = data.navMain;
  const footerItems = data.navFooter;
  const [emailCopied, setEmailCopied] = React.useState(false);

  // Function to determine if a nav item is active
  const isItemActive = (url: string) => {
    if (url === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(url);
  };

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.contact.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);

      toast.success('Email copied', {
        icon: <IconClipboard className="size-4 flex-shrink-0 text-purple-500" />,
        description: SITE_CONFIG.contact.email,
      });
    } catch (err) {
      console.error('Failed to copy email:', err);
      toast.error('Failed to copy email', {
        description: 'Please try again or copy manually',
      });
    }
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex w-full items-center justify-between">
              <SidebarMenuButton asChild className="flex-1 data-[slot=sidebar-menu-button]:!p-1.5">
                <a href="#">
                  <IconInnerShadowTop className="!size-5" />
                  <span className="text-base font-semibold">Andrew J</span>
                </a>
              </SidebarMenuButton>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = isItemActive(item.url);
                const IconComponent = isActive ? item.iconFilled : item.icon;

                // Special handling for Ask button
                if (item.title === 'Ask') {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        tooltip={item.title}
                        onClick={(e) => {
                          e.preventDefault();
                          openChatbot();
                        }}
                        className="text-sidebar-foreground/60"
                      >
                        {IconComponent && <IconComponent />}
                        <span className="text-sm font-medium">{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      asChild
                      isActive={isActive}
                      className={!isActive ? 'text-sidebar-foreground/60' : ''}
                    >
                      <a href={item.url}>
                        {IconComponent && <IconComponent />}
                        <span className="text-sm font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-row">
          {footerItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} target="_blank">
                    <IconComponent className="size-3 transition-all duration-300 hover:scale-110" />
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleEmailCopy}
              tooltip={emailCopied ? 'Email copied!' : 'Copy email address'}
              className={emailCopied ? 'text-green-600' : ''}
            >
              {emailCopied ?
                <IconCheck />
              : <IconMail />}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Download Resume">
              <a href={SITE_CONFIG.resume.path} download={SITE_CONFIG.resume.filename}>
                <IconDownload className="size-3 transition-all duration-300 hover:scale-110" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
