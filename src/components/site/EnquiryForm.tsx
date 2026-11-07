import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

export function EnquiryForm({ subjectLabel = "Subject", submitLabel = "Submit Enquiry" }: { subjectLabel?: string; submitLabel?: string }) {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thank you! Your enquiry has been received.");
    }, 600);
  };
  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary-glow focus:ring-4 focus:ring-accent";
  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-semibold">Full name<input required name="name" maxLength={100} className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold">Phone number<input required name="phone" type="tel" maxLength={20} className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold">Email<input required name="email" type="email" maxLength={255} className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold">{subjectLabel}<input required name="subject" maxLength={150} className={field} /></label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">Message<textarea required name="message" rows={5} maxLength={1000} className={field} /></label>
      <button disabled={sending} className="btn btn-primary sm:col-span-2 sm:justify-self-start">
        <Send size={16} /> {sending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
