"use server";

import { auth } from "@auth/auth"; // points to app/authentication/auth.ts
import { db } from "@lib/db";

export const getUserById = async (id: string) => {
  if (!id) return null;

  try {
    return await db.user.findUnique({
      where: { id },
      include: { accounts: true },
    });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};

export const getAccountByUserId = async (userId: string) => {
  if (!userId) return null;

  try {
    return await db.account.findFirst({
      where: { userId },
    });
  } catch (error) {
    console.error("Error fetching account by user ID:", error);
    return null;
  }
};

export const CurrentUser = async () => {
  const session = await auth(); // now correctly points to NextAuth
  return session?.user ?? null;
};
