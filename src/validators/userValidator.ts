import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(2, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

type UserInput = z.infer<typeof userSchema>;

export function validateUser(userData: unknown): UserInput {
  try {
    return userSchema.parse(userData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors.map(e => e.message).join(", "));
    }
    throw new Error((error as Error).message);
  }
}
