"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";

export default function SignInFormClient() {
  const handleGoogleSignIn = async () => {
    await signIn("google", {
      callbackUrl: "/", // 👈 where to go after login
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-center">
          Sign in using your Google account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignIn}
        >
          <Chrome className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-center text-gray-500 w-full">
          By signing in, you agree to our Terms & Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
}
