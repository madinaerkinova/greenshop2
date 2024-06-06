import { z } from "zod";

export const validationLogin = z.object({
  name: z.string().min(2, { message: "password is required" }),
  password: z.string().min(3, { message: "password is required" }),
});
