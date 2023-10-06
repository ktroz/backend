import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().regex(new RegExp(/.+@\w+\.\w+/)),
    role: z.optional(z.enum(["USER","ADMIN"]))
})