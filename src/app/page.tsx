import Experience from "@/components/Experience";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  ArrowDownRight,
  ArrowRightIcon,
  FileDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const KEVIN_BIRTH_YEAR = 2000;
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/kevin.jpg"
          alt="Photo of Kevin"
          width={175}
          height={175}
          priority
        />
        <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="title text-balance text-4xl sm:text-5xl">Kevin Anrique</h1>
          <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">
            {/* Update my age */}
            {new Date().getFullYear() - KEVIN_BIRTH_YEAR}
            yo DevOps engineer from Argentina 🇦🇷
          </p>
          <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
            I like to develop full-stack, drink instant coffee and get coding
            advice from my cat.
          </p>
          <div className="mt-4 flex items-end gap-1">
            <p className="font-semibold">Ask MY chatbot vertion anything about me</p>
            <ArrowDownRight className="size-5 animate-bounce" />
          </div>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
            <SpeedInsights/>
            <Analytics/>
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
