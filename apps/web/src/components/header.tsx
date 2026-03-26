import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        <h1 className="text-2xl font-semibold">Expense Tracker</h1>
        <ModeToggle />
      </div>
    </header>
  );
}
