import { SIgnUpCard } from "@/features/components/sign-up-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SIgnUpCard />;
}
