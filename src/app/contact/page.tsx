"use client";
import ContactForm from "@/components/ContactForm";
import CalEmbed from "@/components/cal";

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">contact me.</h1>

      <ContactForm />

      <h2 className="mt-2 text-center text-lg font-medium">
        or book a meeting
      </h2>
      <CalEmbed />
    </article>
  );
}
