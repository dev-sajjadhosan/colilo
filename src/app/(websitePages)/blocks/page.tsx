"use client";

import BlockCard from "@/components/modules/root/block-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ArrowBigLeftDashIcon,
  CircleArrowOutUpRight,
  Home,
  Maximize2,
  Play,
  Share2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlockPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-13 h-screen p-10">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Button
            className="rounded-full"
            variant={"secondary"}
            onClick={() => router.back()}
          >
            <ArrowBigLeftDashIcon /> Back
          </Button>
          <h3 className="text-lg font-semibold">My Thoughts</h3>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant={"secondary"}
            className="rounded-full"
            size={"icon-lg"}
          >
            A
          </Button>
          <Button
            variant={"secondary"}
            className="rounded-full"
            size={"icon-lg"}
          >
            B
          </Button>
          <Button
            variant={"secondary"}
            className="rounded-full"
            size={"icon-lg"}
          >
            C
          </Button>
        </div>
      </div>
      {/* view */}
      <div className="grid grid-cols-2 gap-5 w-full h-120">
        {Array.from({ length: 5 }).map((_, idx) => (
          <BlockCard key={idx} data={null} />
        ))}
      </div>
    </div>
  );
}
