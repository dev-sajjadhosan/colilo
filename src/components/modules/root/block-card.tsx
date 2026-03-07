import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CircleArrowOutUpRight, Code2, Maximize2, Play, Share2 } from "lucide-react";

interface ICardProps {
  data: any;
}

export default function BlockCard({ data }: ICardProps) {
  return (
    <>
      <Card className="w-full h-full rounded-3xl bg-transparent border-muted/30 hover:border-muted/70">
        <CardHeader className="flex items-center justify-between">
          <Button variant={"secondary"} className="rounded-full">
            Code <Code2 />
          </Button>
          <div className="flex items-center">
            <Button variant={"ghost"} className="rounded-full" size={"icon-lg"}>
              <CircleArrowOutUpRight />
            </Button>
            <Button variant={"ghost"} className="rounded-full" size={"icon-lg"}>
              <Maximize2 />
            </Button>
            <Button variant={"ghost"} className="rounded-full" size={"icon-lg"}>
              <Share2 />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="h-full flex justify-center items-center">
          <div className="w-11/12 h-80 bg-muted/30 rounded-2xl flex items-center justify-center">
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full"
            >
              <Play />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <h3 className="text-lg font-semibold"># Header</h3>
          <div className="flex items-center gap-2">
            <Badge variant={"secondary"}>NEW</Badge>
            <Badge variant={"secondary"}>3d ago</Badge>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
