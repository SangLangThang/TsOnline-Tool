import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";
import Setting from "./setting";
import { IEvent } from "@/types/model";
import Battle from "./battle";

function Basic() {
  const events: IEvent[] = [
    {
      id: "pmt",
      name: "Phong Ma Trận",
    },
    {
      id: "hlq",
      name: "Hổ Lao Quan",
    },
    {
      id: "2k",
      name: "Nhị Kiều",
    },
    {
      id: "40npc",
      name: "40 NPC",
    },
    {
      id: "chanha",
      name: "Chấn Hà",
    },
    {
      id: "tiendau",
      name: "Tiên đấu",
    }
  ]
  return (
    <>
      <Card className="w-full mb-3">
        <div className="flex gap-1 px-3 justify-between">
          <div className="flex gap-1 flex-col w-1/2">
            <div className="">
              <Label className="mb-1" htmlFor="team">
                Team
              </Label>
              <Input id="team"></Input>
            </div>
            <div className="flex">
              <Button>Load</Button>
              <Button>Save</Button>
              <Button>Invite</Button>
            </div>
          </div>
          <Separator className="h-14" orientation="vertical"></Separator>
          <div className="flex flex-col w-1/2 gap-1">
            <div className="">
              <Label className="mb-1" htmlFor="warp">
                Warp
              </Label>
              <Input id="warp"></Input>
            </div>
            <div className="flex">
              <Button>Warp</Button>
            </div>
          </div>
        </div>
      </Card>
      <Card className="w-full mb-3">
        <div className="flex gap-3 w-full items-center justify-between px-3">
          <div className="w-1/2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Event" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Event</SelectLabel>
                  {events.map((event) => (
                    <SelectItem key={event.id} value={event.id}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3">
            <Button>Go to Map</Button>
            <Button>Get Event</Button>
            <Button>Start</Button>
            <Button>Stop</Button>
          </div>
        </div>
      </Card>
      <Card className="w-full mb-3">
        <div className="flex gap-3 w-full items-center px-3">
          <div className="flex gap-3">
            <Label>Tiên đấu</Label>
            <Button>Battle</Button>
            <Button>Sleep</Button>
            <Button>Reset</Button>
            <Button>Resume</Button>
            <Button>Pause</Button>
          </div>
        </div>
      </Card>
      <Card className="w-full mb-3">
        <div className="flex gap-3 w-full items-center px-3">
          <div className="flex gap-3">
            <Label className="text-md min-w-[35px]">CHAR</Label>
            <Popover>
              <PopoverTrigger>
                <Zap size="16px"></Zap>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-2">
                <Setting></Setting>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-3">
            <Badge>Live</Badge>
            <Badge>Broken Gem</Badge>
            <Badge className="text-black bg-amber-500">Hard CC</Badge>
            <Badge className="text-white bg-violet-500">Cổ Vũ</Badge>
            <Badge className="text-white bg-red-400">Cuồng Nộ</Badge>
          </div>
        </div>
      </Card>
      <Card className="w-full mb-3">
        <div className="flex gap-3 w-full items-center px-3">
          <div className="flex gap-3">
            <Label className="text-md min-w-[35px]">PET</Label>
            <Popover>
              <PopoverTrigger>
                <Zap size="16px"></Zap>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-2">
                <Setting></Setting>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-3">
            <Badge>Live</Badge>
            <Badge>Broken Gem</Badge>
            <Badge className="text-black bg-amber-500">Hard CC</Badge>
            <Badge className="text-white bg-violet-500">Cổ Vũ</Badge>
            <Badge className="text-white bg-red-400">Cuồng Nộ</Badge>
          </div>
        </div>
      </Card>
      <Card className="w-full mb-3">
        <Battle></Battle>
      </Card>
    </>
  );
}

export default Basic;
