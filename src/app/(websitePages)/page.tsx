import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Github, Info } from "lucide-react"; // Optional icons for DX

import image from "../../../public/image4.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-background">
      <div className="flex items-center justify-between h-screen">
        <div className="flex flex-col justify-center gap-3 h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />

          <div className="flex flex-col gap-6 px-4">
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-muted-foreground">
              Colilo
            </h1>

            <h3 className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              <span className="font-semibold text-foreground underline decoration-primary/50 underline-offset-4">
                Colilo
              </span>{" "}
              an open-source laboratory for creative experiments. From unique
              authentication flows to modern UI components—whatever new idea I
              have today, I build and share it here.
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Link href={"/blocks"}>
                <Button size="xl" className="px-8 font-medium gap-2 group">
                  Explore Components{" "}
                  <ArrowRight className="group-hover:translate-x-2 duration-200" />
                </Button>
              </Link>
              <Button
                size="xl"
                variant={"ghost"}
                className="px-8 font-medium gap-2"
              >
                <Info /> About
              </Button>
            </div>
          </div>
        </div>
        <div className="relative size-110 flex items-center justify-center gap-5">
          <div className=" w-20 h-60 z-20 bg-muted/30 rounded-full animate-bounce duration-100"></div>
          <div className=" w-20 h-80 z-20 bg-muted/25 rounded-full animate-bounce duration-100 delay-100"></div>
          <div className=" w-20 h-60 z-20 bg-muted/20 rounded-full animate-bounce duration-100 delay-150"></div>
          {/* <Image src={image} width={200} height={200} alt="Imaege" /> */}
        </div>
      </div>
      <section className="mt-30 flex flex-col items-center gap-20 w-full">
        <div className="flex items-center justify-center w-full">
          <div className="text-lg font-semibold rounded-full text-center w-60 py-2 bg-transparent border-r-4 border-l-4 text-muted-foreground duration-300 hover:w-80 hover:bg-muted/30 overflow-hidden text-nowrap group">
            <span className="group-hover:hidden animate-out">
              New Components
            </span>
            <span className="hidden group-hover:inline animate-in text-center">
              Explore New Creativity
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 w-11/12">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card
              key={i}
              className="bg-muted/20 border-0 h-120 hover:bg-muted/40"
            >
              <CardHeader className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Layout 01</h3>
                <div className="flex items-center gap-1">
                  <Badge variant={"secondary"}>Authenticate</Badge>
                  <Badge variant={"secondary"}>new</Badge>
                </div>
              </CardHeader>
              <CardContent className="h-full">00</CardContent>
              <CardFooter className="gap-3">
                <Button size={"lg"} variant={"secondary"}>
                  View Code <Code2 />
                </Button>
                <Button size={"lg"} variant={"secondary"}>
                  Share
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <footer className="mt-30 flex justify-between items-center w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-[15rem] font-extrabold text-muted/50">Colilo</h1>
          <h3 className="text-lg font-semibold -mt-20 text-center text-muted-foreground tracking-[.5rem]">
            Find my creativity in 1 Place.
          </h3>
        </div>
        <aside className="flex-1">
          {/* <h3 className="text-9xl font-bold text-center mb-5 text-orange-500/50">
            2&#$&6
          </h3> */}
          <div className="grid grid-cols-2 w-md mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <Button
                key={i}
                variant={"ghost"}
                className="bg-muted/20 rounded-none! h-15 flex gap-3 items-center justify-center font-semibold "
              >
                <Github /> Github
              </Button>
            ))}
          </div>
        </aside>
      </footer>
    </div>
  );
}
