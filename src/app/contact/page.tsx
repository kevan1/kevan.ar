"use client";
import ContactForm from "@/components/ContactForm";
import CalEmbed from "@/components/cal";
import { use } from "react";


export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">contact me.</h1>
      
      <ContactForm />

      <h1 className="mt-2 text-lg font-medium text-gray-500">Book a Meeting</h1>
      <CalEmbed  />
    </article>

  );
}
