import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        <Link to="/" className="cursor-pointer text-2xl font-semibold">
          Expense Tracker
        </Link>

        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex items-center gap-2">
              <li>
                <Link to="/">
                  {({ isActive }) => (
                    <Button variant={!isActive ? "ghost" : "default"} asChild>
                      <span>Home</span>
                    </Button>
                  )}
                </Link>
              </li>

              <li>
                <Link to="/about">
                  {({ isActive }) => (
                    <Button variant={!isActive ? "ghost" : "default"} asChild>
                      <span>About</span>
                    </Button>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
