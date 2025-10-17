import { Button } from "@/components/ui/button";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  return (
    <main className="bg-neutral-100  min-h-screen">
      <div className="mx-auto max-w-screen-xl p-4">
        <nav className="flex justify-between items-center">
          <p>logo</p>
          <Button asChild variant={"secondary"}>
            <Link
              to={
                location.pathname === "/auth/sign-in"
                  ? "/auth/sign-up"
                  : "/auth/sign-in"
              }
            >
              {location.pathname === "/auth/sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>
        <div className="flex justify-center mt-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
