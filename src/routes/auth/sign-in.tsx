import { SIgnInCard } from "@/features/components/sign-in-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SIgnInCard />;
}
