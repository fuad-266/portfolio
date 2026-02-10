/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden hover:ring-2 hover:ring-primary/20 hover:border-primary/20 transition-all duration-300 group/card",
        className
      )}
    >
      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover transition-transform duration-500 group-hover/card:scale-110"
            />
          ) : image ? (
            <div className="overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-muted/30" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/90 text-black dark:text-white px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm border border-black/5 dark:border-white/10 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {link.icon}
                  {link.type}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg tracking-tight group-hover/card:text-primary transition-colors">{title}</h3>
            <time className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm p-1 hover:bg-primary/10 rounded-full"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground/90 dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wide border-border/50 bg-muted/20 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors h-5 px-2 rounded-md"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>

  );
}
