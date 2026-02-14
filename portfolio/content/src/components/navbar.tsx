"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { useRef, type MouseEvent } from "react";

export default function Navbar() {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
    e.currentTarget.style.setProperty('--reveal-position', `${x}%`);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon 
                    className="dock-icon-reveal nav-item-fluent rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors"
                    onMouseMove={handleMouseMove}
                  >
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain relative z-10" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="tooltip-fluent rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon 
                      className="dock-icon-reveal nav-item-fluent rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors"
                      onMouseMove={handleMouseMove}
                    >
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain relative z-10" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="tooltip-fluent rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon 
              className="dock-icon-reveal nav-item-fluent rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors"
              onMouseMove={handleMouseMove}
            >
              <ModeToggle className="size-full cursor-pointer relative z-10" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="tooltip-fluent rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
