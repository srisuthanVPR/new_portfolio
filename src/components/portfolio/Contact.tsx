import { useState, type FormEvent } from "react";
import { Github, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/portfolio";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/srisuthanVPR", href: profile.github },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim() || null,
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setSending(true);
    const { error } = await supabase.from("contact_messages").insert(payload);
    setSending(false);

    if (error) {
      toast.error("Message could not be sent. Please email me directly.");
      return;
    }

    toast.success("Thanks! Your message has been sent.");
    form.reset();
  }

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            centered={false}
            eyebrow="Contact"
            title="Let's build something useful, measurable, and ready for real users."
            description="I'm open to internships, collaborations, and projects where software makes a visible difference."
          />
          <ul className="reveal mt-8 space-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="panel flex items-center gap-4 p-4 transition-colors hover:border-primary"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                    <link.icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                      {link.label}
                    </span>
                    <span className="block text-sm font-medium">{link.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="reveal panel space-y-4 p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required maxLength={120} placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" maxLength={160} placeholder="Internship, project…" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              maxLength={4000}
              rows={6}
              placeholder="Tell me a little about what you're building."
            />
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={sending}>
            {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            {sending ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
