import { Button } from "~/common/components/ui/button";

export default function HomePage() {
  return (
    <main className="container mx-auto py-16">
      <div className="max-w-2xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Welcome to Our App
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A modern web application built with React Router, TypeScript, and Shadcn UI.
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </main>
  );
}


