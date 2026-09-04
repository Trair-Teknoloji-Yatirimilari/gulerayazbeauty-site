import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { db } from "./db";
import { requireAdmin } from "./auth.functions";

// Randevu alma akışı WhatsApp'a taşındığı için siteden artık yeni kayıt
// yazılmıyor. Tablo ve yönetim paneli okumaları olduğu gibi duruyor.
export interface AppointmentRow {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  preferred_date: string | null;
  service: string | null;
  message: string | null;
  consent_given: boolean;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

export const listAppointments = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async () => {
    const { rows } = await db().query<AppointmentRow>(`SELECT * FROM appointments ORDER BY created_at DESC`);
    return rows;
  });

const updateStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["pending", "confirmed", "completed", "cancelled"]),
});

export const updateAppointmentStatus = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => updateStatusSchema.parse(d))
  .handler(async ({ data }) => {
    await db().query(`UPDATE appointments SET status = $1 WHERE id = $2`, [data.status, data.id]);
    return { ok: true };
  });

export const deleteAppointment = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    await db().query(`DELETE FROM appointments WHERE id = $1`, [data.id]);
    return { ok: true };
  });
