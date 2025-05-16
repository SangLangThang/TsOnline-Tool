import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
function Account() {
  return (
    <Tabs defaultValue="account">
      <ScrollArea className="w-[100vw] whitespace-nowrap rounded-md border">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="password1">Password</TabsTrigger>
          <TabsTrigger value="password2">Password</TabsTrigger>
          <TabsTrigger value="password3">Password</TabsTrigger>
          <TabsTrigger value="password4">Password</TabsTrigger>
          <TabsTrigger value="password5">Password</TabsTrigger>
          <TabsTrigger value="password6">Password</TabsTrigger>
          <TabsTrigger value="password7">Password</TabsTrigger>
          <TabsTrigger value="password8">Password</TabsTrigger>
          <TabsTrigger value="password9">Password</TabsTrigger>
          <TabsTrigger value="password0">Password</TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="password1">Change your password here.</TabsContent>
      <TabsContent value="password2">Change your password here.</TabsContent>
      <TabsContent value="password3">Change your password here.</TabsContent>
      <TabsContent value="password4">Change your password here.</TabsContent>
      <TabsContent value="password5">Change your password here.</TabsContent>
      <TabsContent value="password6">Change your password here.</TabsContent>
      <TabsContent value="password7">Change your password here.</TabsContent>
      <TabsContent value="password8">Change your password here.</TabsContent>
      <TabsContent value="password9">Change your password here.</TabsContent>
      <TabsContent value="password0">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default Account;
