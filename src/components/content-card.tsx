"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type ContentCardProps = {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  imageUrl: string;
  price?: number;
  type?: "song" | "album" | "artist" | "event";
  artistId?: string;
};

export default function ContentCard({
  id,
  title,
  subtitle,
  badge,
  imageUrl,
  price,
  type = "song",
  artistId
}: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const href = type === "artist" 
    ? `/artist/${id}`
    : type === "event" 
    ? `/event/${id}`
    : `/song/${id}`;

  return (
    <Link 
      href={href}
      className="group block w-40 shrink-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-2">
        <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-brand-700 shadow-lg transition-transform duration-300 group-hover:scale-105">
          {!imageError ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-opacity duration-300"
              onError={() => setImageError(true)}
              sizes="160px"
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-700 to-brand-800">
              <div className="text-2xl font-bold text-white/20">
                {title.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
          
          {badge && (
            <div className="pointer-events-none absolute left-2 top-2 rounded-full bg-black/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              {badge}
            </div>
          )}

          {price !== undefined && (
            <div className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-brand-accent/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-black">
              ${price.toFixed(2)}
            </div>
          )}

          {/* Hover overlay */}
          {isHovered && type === "song" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
              <div className="rounded-full bg-brand-accent p-3 shadow-lg">
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-0.5 px-1">
          <div className="text-sm font-semibold line-clamp-1 group-hover:text-brand-accent transition-colors">
            {title}
          </div>
          <div className="text-xs text-white/60 line-clamp-1">
            {subtitle}
          </div>
        </div>
      </div>
    </Link>
  );
}