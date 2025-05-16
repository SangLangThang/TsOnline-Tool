import Basic from "./basic/basic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function Account() {
  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="quest">Quest</TabsTrigger>
        <TabsTrigger value="datau">Dã Tẩu</TabsTrigger>
      </TabsList>

      <TabsContent value="basic" className="w-full">
        <Basic></Basic>
      </TabsContent>
      <TabsContent value="quest">Change your password here.</TabsContent>
      <TabsContent value="datau">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default Account;
