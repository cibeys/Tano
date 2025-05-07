import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
})

export const registerSchema = z
  .object({
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
    confirmPassword: z.string().min(6, { message: "Konfirmasi password minimal 6 karakter" }),
    username: z
      .string()
      .min(3, { message: "Username minimal 3 karakter" })
      .max(20, { message: "Username maksimal 20 karakter" }),
    fullName: z.string().min(2, { message: "Nama lengkap minimal 2 karakter" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  })

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
})

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
    confirmPassword: z.string().min(6, { message: "Konfirmasi password minimal 6 karakter" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  })

export type LoginFormValues = z.infer<typeof loginSchema>
export type RegisterFormValues = z.infer<typeof registerSchema>
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>
