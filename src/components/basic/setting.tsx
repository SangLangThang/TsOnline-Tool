import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Setting() {
  return (
    <>
      <div className="grid grid-cols-3 items-center gap-4 w-full">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
      </div>
    </>
  );
}

export default Setting;
