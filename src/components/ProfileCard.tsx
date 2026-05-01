"use client";

import React, { useCallback, useState } from "react";

interface ProfileCardProps {
  avatarUrl?: string;
  miniAvatarUrl?: string;
  name?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
  className?: string;
}

export default function ProfileCard({
  avatarUrl = "/avatar.jpg",
  miniAvatarUrl,
  name = "Rifky Febrian",
  handle = "Rifky",
  status = "Online",
  contactText = "Contact Me",
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
  className = "",
}: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setGlow({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });

      if (!enableTilt) return;

      const rotateY = (x / rect.width - 0.5) * 14;
      const rotateX = -(y / rect.height - 0.5) * 14;

      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    },
    [enableTilt],
  );

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTransform("rotateX(0deg) rotateY(0deg)");
    setGlow({ x: 50, y: 50 });
  };

  return (
    <>
      <style jsx>{`
        @keyframes profile-rainbow-shine {
          0% {
            background-position: 180% 0%;
          }

          100% {
            background-position: -180% 0%;
          }
        }
      `}</style>

      <div
        className={`relative w-[min(388px,90vw)] ${className}`}
        style={{ perspective: "900px" }}
      >
        <div
          className="pointer-events-none absolute -inset-8 z-0 rounded-[44px] blur-3xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.42 : 0,
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(125,190,255,0.72), rgba(180,135,255,0.28) 34%, transparent 56%)`,
          }}
        />

        <div
          onPointerEnter={() => setIsHovered(true)}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="relative z-10 aspect-[0.718] overflow-hidden rounded-[30px] border border-white/10 bg-black/40 shadow-2xl transition-transform duration-300 ease-out"
          style={{
            transform,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/35 mix-blend-overlay" />

          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="absolute inset-x-0 bottom-0 z-10 h-full w-full object-cover object-bottom opacity-100"
          />

          <div className="absolute inset-0 z-[11] bg-gradient-to-b from-black/10 via-transparent to-black/20 mix-blend-multiply" />

          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.34 : 0,
              background:
                "linear-gradient(115deg, transparent 0%, rgba(255,0,128,0.3) 18%, rgba(255,255,0,0.3) 32%, rgba(0,255,170,0.3) 46%, rgba(0,170,255,0.3) 60%, rgba(180,0,255,0.3) 74%, transparent 100%)",
              backgroundSize: "220% 220%",
              animation: isHovered
                ? "profile-rainbow-shine 1.8s linear infinite"
                : "none",
              mixBlendMode: "screen",
            }}
          />

          <div className="absolute inset-x-0 top-12 z-30 text-center">
            <h3 className="mx-auto max-w-[280px] text-balance text-3xl font-extrabold tracking-tight text-black/55 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
              {name}
            </h3>
          </div>

          {showUserInfo && (
            <div className="absolute inset-x-5 bottom-5 z-40 flex items-center justify-between rounded-2xl border border-white/20 bg-white/20 px-4 py-3 shadow-[0_0_24px_rgba(255,255,255,0.12)] backdrop-blur-xl">
              <div className="flex min-w-0 items-center gap-3">
                <div className="size-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
                  <img
                    src={miniAvatarUrl || avatarUrl}
                    alt={`${name} mini avatar`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 text-left">
                  <p className="truncate text-sm font-semibold text-zinc-950">
                    @{handle}
                  </p>
                  <p className="text-sm text-zinc-800/70">{status}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onContactClick}
                className="shrink-0 rounded-xl bg-zinc-900 px-4 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                {contactText}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
