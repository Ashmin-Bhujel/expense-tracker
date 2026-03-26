import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log(123);
  }, []);

  return (
    <main className="min-h-screen w-full bg-neutral-900 text-neutral-100">
      <header>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-center text-4xl font-semibold">@expense-tracker/web</h1>
        </div>
      </header>
    </main>
  );
}
