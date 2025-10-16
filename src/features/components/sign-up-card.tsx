import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

export function SIgnUpCard() {
  return (
    <Card className="w-full h-full md:w-[478px] border-none shadow-none ">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        <form className="space-y-3">
          <Input
            required
            type="name"
            value={""}
            onChange={() => {}}
            placeholder="Enter your name"
            disabled={false}
          />
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size={"lg"} className="w-full">
            Sign In
          </Button>
        </form>
      </CardContent>
      <CardContent className="flex flex-col">
        <Button
          disabled={false}
          variant={"outline"}
          size={"lg"}
          className="w-full"
        >
          <FcGoogle className="h-3 w-3" />
          Login with Google
        </Button>
      </CardContent>
    </Card>
  );
}
