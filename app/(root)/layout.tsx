import { Metadata } from "next";
import Header from "@/models/home/header";
import Footer from "@/models/home/footer";
import SpaceBackground from "@/components/ui/SpaceBackground";

export const metadata: Metadata = {
  title: {
    template: "Oscar Code Editor",
    default: "Code Editor for Languages - Oscar",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Space background */}
      <SpaceBackground />

      {/* Content */}
      <Header />
      <main className="relative z-20 w-full pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
