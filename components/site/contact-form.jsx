"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_CHANNELS } from "@/lib/site-content";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialValues);
  const [status, setStatus] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(
      "Form submission is not enabled yet. Please reach us via email or phone while the backend API is being added."
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[32px] bg-[#111108] p-8 text-white shadow-card md:p-10">
        <p className="font-clash text-[42px] leading-[1] text-parktek-yellow">Contact Us</p>
        <p className="mt-4 max-w-[40ch] text-lg leading-8 text-white/75">
          Ready to update the way your premises handle entry, exit, monitoring, and list-based access? Talk to the ParkTek team.
        </p>

        <div className="mt-10 space-y-5">
          {CONTACT_CHANNELS.map((item) => (
            <a
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-sm uppercase tracking-[0.18em] text-white/45">{item.label}</span>
              <span className="mt-1 text-lg leading-7 text-white">{item.value}</span>
            </a>
          ))}
        </div>
      </div>

      <form className="rounded-[32px] bg-white p-8 shadow-card md:p-10" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" onChange={updateField} placeholder="John Doe" required value={form.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              onChange={updateField}
              placeholder="john@example.com"
              required
              type="email"
              value={form.email}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              onChange={updateField}
              placeholder="+91 9899945876"
              value={form.phone}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              onChange={updateField}
              placeholder="ParkTek"
              value={form.company}
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label htmlFor="message">Project Context</Label>
          <Textarea
            id="message"
            name="message"
            onChange={updateField}
            placeholder="Tell us about the parking, access-control, or operational challenge you want to solve."
            required
            value={form.message}
          />
        </div>

        {status ? (
          <p className="mt-5 rounded-2xl border border-parktek-yellow/40 bg-parktek-yellow/10 px-4 py-3 text-sm leading-6 text-[#5c5600]">
            {status}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button className="h-14 rounded-[18px] px-6 text-base" type="submit">
            Send Inquiry
          </Button>
          <a
            className="text-sm font-medium uppercase tracking-[0.14em] text-[#75756d] underline-offset-4 hover:underline"
            href="mailto:support@parktek.in"
          >
            Prefer email instead?
          </a>
        </div>
      </form>
    </div>
  );
}
