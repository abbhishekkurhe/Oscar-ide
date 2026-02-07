import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      
      {/* Hero Image */}
      <div className="mb-8">
        <Image
          src="/type2.png"
          alt="Hero Section"
          width={500}
          height={580}
          priority
          className="mx-auto drop-shadow-xl"
        />
      </div>
      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl
        bg-linear-to-r from-rose-500 via-red-500 to-pink-500
        dark:from-rose-400 dark:via-red-400 dark:to-pink-400
        bg-clip-text text-transparent leading-tight">
        Oscar Code With Intelligence
      </h1>
      <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400">
       Oscar Code Editor is a powerful, intelligent code editor designed to
        enhance your productivity with smart features, seamless integrations,
        and a modern developer experience.
      </p>

      {/* CTA Button */}
      <Link href="/dashboard" className="mt-8">
        <Button
          variant="brand"
          size="lg"
          className="gap-2 px-8 py-6 text-base shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Get Started
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </Link>

    </section>
  );
}
