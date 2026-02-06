// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/authentication/auth";

export const { GET, POST } = handlers;
