"use client";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Rocket,
  Puzzle,
  Github,
  ArrowRight,
  Terminal,
  Heart,
  ArrowBigLeftDashIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex items-center justify-between">
        <header className="space-y-4 mb-12">
          <h1 className="text-7xl font-semibold tracking-tight italic">
            Colilo.
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            A creative playground for the "first impression" of your app. 🚀
          </p>
        </header>
        <Button
          onClick={() => router.back()}
          variant={"secondary"}
          className="h-30 w-xs text-4xl font-light [&_svg]:size-13! rounded-full group"
        >
          <ArrowBigLeftDashIcon
            strokeWidth={1}
            className="group-hover:-translate-x-2 duration-200"
          />{" "}
          Back
        </Button>
      </div>

      <Separator className="mb-12" />

      <article className="space-y-10 text-lg leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <Sparkles className="text-yellow-500" size={22} />
            <h2>What is this place?</h2>
          </div>
          <p>
            Colilo is a curated collection of **creative UI blocks**,
            specifically focusing on the authentication experience. 🎨 I built
            this because I believe that pages don't have to be boring. They are
            the "front door" of your software, and they should feel welcoming,
            smooth, and high-quality.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <Puzzle className="text-blue-500" size={22} />
            <h2>Why I made this</h2>
          </div>
          <p>
            I’m a developer who loves the intersection of **clean code** and
            **beautiful design**. 🛠️ Often, we focus so much on the backend that
            we forget the user's emotional experience. Colilo is my way of
            sharing rapid UI ideas that other developers can use to make their
            projects stand out instantly. 💡
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold">
            <Rocket className="text-purple-500" size={22} />
            <h2>What’s in it for you?</h2>
          </div>
          <p>
            Whether you are a developer looking for inspiration or a recruiter
            checking my work, you'll find **ready-to-use components** here. ⚡
            Everything is built with modern tools like Tailwind CSS, ShadcnUI
            and Framer Motion, meaning you get high-performance animations and
            responsive layouts right out of the box. 📦
          </p>
        </section>
      </article>

      <section className="mt-20 bg-secondary/30 rounded-3xl p-8 md:p-10 border border-border/60 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground">
              <Terminal size={24} className="text-primary" />
              The Engine Room
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Built with a focus on type-safety, modularity, and rapid
              deployment.
            </p>
            <div className="flex gap-3 pt-2">
              <Badge variant="outline" className="bg-background">
                Next.js 15
              </Badge>
              <Badge variant="outline" className="bg-background">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-background">
                Tailwind
              </Badge>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-3">
            <button className="flex items-center justify-between gap-4 bg-foreground text-background px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all">
              View on GitHub <Github size={18} />
            </button>
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
              Handcrafted with{" "}
              <Heart size={10} className="inline text-red-500" /> in Bangladesh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
