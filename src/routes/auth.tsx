import { Button } from "@/components/ui/button";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-neutral-100  min-h-screen">
      <div className="mx-auto max-w-screen-xl p-4">
        <nav className="flex justify-between items-center">
          <p>logo</p>
          <Button variant={"secondary"}>Sign Up</Button>
        </nav>
        <div className="flex justify-center mt-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
