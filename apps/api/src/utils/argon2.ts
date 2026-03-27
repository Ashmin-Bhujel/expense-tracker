import { PASSWORD_HASH_OPTIONS } from "@/constants/argon2.js";
import argon2 from "argon2";

// * Hash password
export async function hashPassword(password: string) {
  return await argon2.hash(password, PASSWORD_HASH_OPTIONS);
}

// * Verify password
export async function verifyPassword(passwordHash: string, password: string) {
  return await argon2.verify(passwordHash, password);
}
