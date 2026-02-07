"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import UserButton from "../auth/components/user-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass background */}
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Oscar Logo"
                width={36}
                height={36}
                priority
              />
              <span className="hidden sm:block text-lg font-extrabold tracking-tight">
                Oscar
              </span>
            </Link>

            <div className="hidden sm:flex items-center gap-4">
              <NavLink href="/docs/components/background-paths">
                Docs
              </NavLink>

              <NavLink
                href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
                target="_blank"
              >
                API
                <span className="ml-2 rounded-md border border-green-500 px-1.5 py-0.5 text-xs text-green-500">
                  New
                </span>
              </NavLink>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <UserButton />
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ---------------------------------- */
/* Reusable Nav Link                   */
/* ---------------------------------- */
function NavLink({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="relative text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-zinc-900 dark:bg-white transition-all group-hover:w-full" />
    </Link>
  );
}
