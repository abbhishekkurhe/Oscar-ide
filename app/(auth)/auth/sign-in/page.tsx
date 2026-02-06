"use client";

import Image from "next/image";
import SignInFormClient from "@/models/auth/components/sign-in-from-client";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <Image src="/type1.svg" alt="login" width={200} height={200} priority />
      <SignInFormClient />
    </div>
  );
}
